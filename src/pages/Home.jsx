import React from 'react';
import QuoteCard from '../components/QuoteCard';
import CarouselCard from '../components/CarouselCard';
import oranges from '../assets/oranges.jpg';

function Home() {
  return (
    <div id="main-content" className="relative flex-1 flex flex-col items-center overflow-hidden">
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
      <section className="w-full max-w-3xl mx-auto bg-yellow-50 rounded-2xl shadow-lg p-6 mt-8 mb-10 border-4 border-yellow-300 text-center">
        <h1 className="text-3xl md:text-3xl font-extrabold font-serif text-green-900 mb-6">
          Welcome to Little Lemon!
        </h1>
        <h2 className="text-xl md:text-xl font-semibold font-serif text-green-800 mb-4">
          Little Lemon is a charming neighborhood bistro serving the traditional Mediterranean food,
          delicious desserts and a variety of drinks in a lively but casual environment.
        </h2>
        <h2 className="text-xl md:text-xl font-bold text-green-900 mt-2 font-serif">
          We are looking forward to your visit, book a table and be our guest!
        </h2>
      </section>

      {/* Main Grid: Animation | Cards | Chatbot */}
      <section className="w-full flex justify-center items-start gap-6 max-w-5xl mb-2 mx-auto">
        {/* Left: Animation/ illustration (placehoder) */}
        <div className="hidden lg:flex w-24 h-48 bg-yellow-100 rounded-lg items-center justify-center">
          {/* Replace with animation / character as needed */}
          <span className="text-3xl">🧑‍🍳</span>
        </div>

        {/* Center: 2 Cards in a row */}
        <div className="flex-1 grid grid-cols-2 gap-8 place-items-center">
          {/* Quote Card */}
          <div className="min-h-[320px] flex flex-col w-full">
            <QuoteCard />
          </div>
          {/* Carousel Card */}
          <div className="h-[320px] flex flex-col w-full">
            <CarouselCard />
          </div>
        </div>

        {/* Right: Chatbot placeholder */}
        <div className="hidden lg:flex w-24 h-48 bg-gray-200 rounded-lg items-center justify-center">
          <span className="text-3xl">🤖</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
