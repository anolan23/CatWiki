const express = require('express');
const catWiki = require('../cat-wiki');
const db = require('../db/index.js');
const router = express.Router();

router.get('/api/breeds', async (req, res) => {
  try {
    const { limit } = req.query;
    const response = await catWiki.get('/breeds', {
      params: {
        limit,
      },
    });
    res.send(response.data);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

router.get('/api/breeds/search', async (req, res) => {
  try {
    const { q, limit } = req.query;
    const { data } = await catWiki.get('/breeds/search', {
      params: {
        q,
      },
    });
    const results = limit ? data.slice(0, limit) : data;
    res.send(results);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

router.post('/api/breeds/search', async (req, res) => {
  try {
    const { query } = req.body;
    const { rows } = await db.query(
      `
        INSERT INTO searches (query)
        VALUES ($1)
        RETURNING *
    `,
      [query]
    );
    res.send(rows[0]);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

router.get('/api/breeds/trending', async (req, res) => {
  try {
    const { limit } = req.query;
    const { rows } = await db.query(
      `
      SELECT query, count(*) as search_count
      FROM searches
      GROUP BY query
      ORDER BY search_count DESC
      LIMIT $1
    `,
      [limit]
    );
    const trending = rows.map((search) => search.query); // ['minx', 'tabby', 'burmese']
    const { data: allBreeds } = await catWiki.get('/breeds'); // all breeds [{}, {}, {}]
    //only keep trending breeds from breeds array
    // const breeds = response.data.filter((breed) =>
    //   trending.includes(breed.name)
    // );

    const breeds = trending
      .map((breed) => {
        return allBreeds.find((b) => b.name === breed);
      })
      .filter((b) => b);

    res.send(breeds);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

router.get('/api/breeds/:name', async (req, res) => {
  try {
    const { name } = req.params;
    console.log(name);
    const { data } = await catWiki.get('/breeds/search', {
      params: {
        name,
      },
    });
    const [breed] = data;
    const { data: imgData } = await catWiki.get(`/images/search`, {
      params: {
        size: 'med',
        limit: 8,
        format: 'json',
        breed_id: breed.id,
      },
    });
    const images = imgData.map((image) => image.url);
    breed.images = images;

    res.send(breed);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

module.exports = router;
