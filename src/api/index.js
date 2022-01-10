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
