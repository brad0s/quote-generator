import { useEffect, useState } from 'react';
import { fetchQuote } from './api';
import { categories } from './context';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
      setIsLoading(false);
    };
    init();
  }, []);

  const handleButtonClick = async () => {
    setIsLoading(true);
    const newQuote = await fetchQuote();
    setQuote(newQuote);
    setIsLoading(false);
  };
  const handleInput = async (value) => {
    setIsLoading(true);
    const newQuote = await fetchQuote(value);
    setQuote(newQuote);
    setIsLoading(false);
  };

  return (
    <div className='App'>
      <div className='quote-container'>
        <h1>Quote Generator</h1>
        {isLoading ? (
          <p className='loading'>Loading...</p>
        ) : (
          <>
            <div className='quote'>{quote.quote}</div>
            <div className='author'>{quote.author}</div>
          </>
        )}
        <button onClick={() => handleButtonClick()}>Generate</button>
        <div className='select'>
          <select name='category' id='category' onInput={(e) => handleInput(e.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
