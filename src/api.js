export const fetchQuote = async (q = '') => {
  let BASE_URL = 'https://api.api-ninjas.com/v1/quotes';
  if (q) {
    BASE_URL = BASE_URL + '?category' + q;
  }

  try {
    const response = await fetch(BASE_URL, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
      },
    });
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};
