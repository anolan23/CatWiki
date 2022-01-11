require('dotenv').config();
const express = require('express');
const path = require('path');

const breedsRouter = require('./routes/breeds.js');

const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
const htmlPath = path.join(__dirname, '..', 'build', 'index.html');

app.get('/', (req, res) => {
  res.sendFile(htmlPath);
});
app.use(breedsRouter);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
