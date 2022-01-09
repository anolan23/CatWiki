const axios = require('axios');

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
});

// Alter defaults after instance has been created
instance.defaults.headers.common['x-api-key'] = process.env.API_KEY;
module.exports = instance;
