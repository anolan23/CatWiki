const express = require('express');
const catWiki = require('../cat-wiki');
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

module.exports = router;
