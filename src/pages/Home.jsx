import React from 'react';
import QuoteCard from '../components/QuoteCard';
import CarouselCard from '../components/CarouselCard';
import oranges from '../assets/background/oranges.jpg';

function Home() {
  return (
    <div className="relative flex-1 flex flex-col items-center overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center
      pointer-events-none w-full h-full"
        style={{
          backgroundImage: `url(${oranges})`,
          filter: 'blur(4px) brightness(0.7)', // blur + dim
          opacity: 0.6,
        }}
        aria-hidden="true"
      />
      {/* Optional: Color overlay, example: */}
      {/* <div className="absolute inset-0 -z-10 bg-yellow-100/40" /> */}

      {/* Hero Section */}
      <section
        aria-labelledby="home-title"
        className="w-full max-w-3xl mx-auto bg-yellow-50 rounded-2xl shadow-lg p-6 mt-8 mb-10 border-4 border-yellow-300 text-center"
      >
        <h1
          id="home-title"
          className="text-3xl md:text-3xl font-extrabold font-serif text-green-900 mb-6"
        >
          Welcome to Little Lemon!
        </h1>
        <h2 className="text-xl md:text-xl font-semibold font-serif text-green-800 mb-4">
          Little Lemon is a charming neighborhood bistro serving the traditional Mediterranean food,
          delicious desserts and a variety of drinks in a lively but casual environment.
        </h2>
        <h2 className="text-xl font-bold text-green-900 mt-2 font-serif">
          We are looking forward to your visit, book a table and be our guest!
        </h2>
      </section>

      {/* Main Grid: Cards only*/}
      <section
        aria-label="Featured content"
        className="w-full flex flex-col items-center justify-center"
      >
        {/* Center: 2 Cards in a row */}
        <div className="flex flex-row justify-center gap-10 w-full max-w-4xl">
          {/* Quote Card */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <QuoteCard />
          </div>
          {/* Carousel Card */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <CarouselCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
