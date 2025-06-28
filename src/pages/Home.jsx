import React from 'react';
import QuoteCard from '../components/QuoteCard';
import CarouselCard from '../components/CarouselCard';

function Home() {
  return (
    <main
      id="main-content"
      className="flex-1 flex flex-col items-center bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto bg-yellow-50 rounded-2xl shadow-lg p-8 mt-8 mb-10 border-4 border-yellow-300 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-green-900 mb-6">
          Welcome to Little Lemon!
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold font-serif text-green-800 mb-3">
          Little Lemon is a charming neighborhood bistro serving the traditional Mediterranean food,
          delicious desserts and a variety of drinks in a lively but casual environment.
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mt-2 font-serif">
          We are looking forward to your visit, book a table and be our guest!
        </h2>
      </section>

      {/* Main Grid: Animation | Cards | Chatbot */}
      <section className="w-full flex justify-center items-start gap-4 max-w-5xl mb-8 mx-auto">
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

        {/* Right: Chatbor placeholder */}
        <div className="hidden lg:flex w-24 h-48 bg-gray-200 rounded-lg items-center justify-center">
          <span className="text-3xl">🤖</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
