import { useState, useCallback, useEffect } from 'react';
import quotes from '../data/quotes.json';

export default function useFetchQuote() {
  const [quote, setQuote] = useState(null);

  const getRandomQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  useEffect(() => {
    getRandomQuote();
  }, [getRandomQuote]);

  return { quote, getRandomQuote };
}
