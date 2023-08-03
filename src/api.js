export const fetchQuote = async (q = '') => {
  const url = new URL('https://api.api-ninjas.com/v1/quotes');
  const params = new URLSearchParams();
  if (q) {
    params.append('category', q);
  }
  url.search = params;

  try {
    const response = await fetch(url, {
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
