require('dotenv').config();
const express = require('express');
const breedsRouter = require('./routes/breeds.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(breedsRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
