import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useFetchQuote from '../hooks/useFetchQuote';

function QuoteCard() {
  const { quote, getRandomQuote } = useFetchQuote();

  if (!quote) return null;

  return (
    <section
      aria-live="polite"
      aria-label="Quote of the Day"
      className="w-full max-w-md mx-auto mt-6"
    >
      <Card className="bg-gray-100/90 shadow-xl rounded-2xl border border-gray-200">
        <CardContent className="flex flex-col items-center gap-6 py-6 px-6">
          <h2 className="text-xl font-bold text-gray-800 text-center tracking-wide">
            Quote of the Day
          </h2>
          <blockquote className="bg-white rounded-lg px-4 py-4 shadow text-lg italic text-gray-800 relative w-full">
            <span className="text-yellow-500 text-2xl mr-2">“</span>
            {quote.content}
            <span className="text-yellow-500 text-2xl mr-2">“</span>
            <footer className="block text-right text-gray-500 font-semibold mt-2">
              — {quote.author}
            </footer>
          </blockquote>
          <Button
            variant="outline"
            className="bg-yellow-400 hover:bg-yellow-100 hover:border-yellow-400 transition"
            onClick={getRandomQuote}
            aria-label="Get a new quote"
          >
            Get New Quote
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

export default QuoteCard;
