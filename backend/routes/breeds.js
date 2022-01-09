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
    const { q } = req.query;
    const response = await catWiki.get('/breeds/search', {
      params: {
        q,
      },
    });
    res.send(response.data);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

router.post('/api/breeds/search', async (req, res) => {
  try {
    const { query } = req.body;
    await db.query(
      `
        INSERT INTO searches (query)
        VALUES ($1)
    `,
      [query]
    );
    res.status(200).send();
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
      OFFSET 0
      LIMIT $1
    `,
      [limit]
    );
    const trending = rows.map((search) => search.query);
    const response = await catWiki.get('/breeds');
    const breeds = response.data.filter((breed) =>
      trending.includes(breed.name)
    );

    res.send(breeds);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

module.exports = router;
