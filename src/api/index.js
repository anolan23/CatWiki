import axios from 'axios';

export async function getTrending(limit) {
  try {
    const response = await axios.get('/api/breeds/trending', {
      params: {
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getBreed(name) {
  try {
    const response = await axios.get(`/api/breeds/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchBreeds(q, limit) {
  try {
    const response = await axios.get(`/api/breeds/search`, {
      params: {
        q,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function logBreedSearch(query) {
  try {
    const response = await axios.post(`/api/breeds/search`, { query });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
