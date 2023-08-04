import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/quotes',
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY,
  },
});

export const fetchQuote = async (q = '') => {
  try {
    const response = await instance.get();
    return response.data[0];
  } catch (e) {
    console.error(e);
  }
};

export const fetchQuoteCategory = async (q = '') => {
  try {
    const response = await instance.get('', { params: { category: q } });
    return response.data[0];
  } catch (e) {
    console.error(e);
  }
};
