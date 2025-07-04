import React from 'react';
import storeItemsToDisplay from '../data/storeData';
import { Button } from '@/components/ui/button';
import jar from '../assets/jar.jpg';

function Store() {
  return (
    <div
      id="main-content"
      className="relative flex-1 flex flex-col items-center overflow-hidden w-full"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center pointer-event-none w-full h-full"
        style={{
          backgroundImage: `url(${jar})`,
          filter: 'blur(4px) brightness(0.92)',
          opacity: 0.62,
        }}
        aria-hidden="true"
      />

      <main className="px-2 md:px-6 py-8 w-full">
        <h1 className="sr-only">Store - Little Lemon Restaurant</h1>
        <div className="max-w-7xl mx-auto">
          {storeItemsToDisplay.map(section => (
            <section key={section.title} className="mb-14">
              <h2 className="text-3xl font-bold text-yellow-100 drop-shadow-lg mb-8">
                {section.title}
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                aria-label={`${section.title} products`}
              >
                {section.data.map(item => (
                  <div
                    key={item.name}
                    className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-4 max-w-[260px] min-w-[180px] w-full flex flex-col items-center transition hover:shadow-xl hover:bg-yellow-100"
                  >
                    <img
                      src={import.meta.env.BASE_URL + item.img}
                      alt={item.name}
                      className="rounded-xl object-cover w-52 h-52 mb-2"
                      draggable="false"
                    />
                    <div className="flex flex-col items-center gap-2 w-full">
                      <h3 className="text-lg font-bold text-center text-yellow-900 ">
                        {item.name}
                      </h3>
                      <span className="text-sm text-yellow-800 text-center">{item.price}</span>
                      <p className="text-sm text-yellow-800 text-center">{item.description}</p>
                      {item.url ? (
                        <Button
                          asChild
                          className="mt-2 w-full font-bold bg-yellow-400 hover:bg-yellow-300 text-green-900"
                        >
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Buy ${item.name} now`}
                          >
                            Buy Now
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="mt-2 w-full font-bold text-gray-500 border-gray-300 cursor-not-allowed"
                          disabled
                        >
                          Coming Soon!
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Dummy div for Tailwind JIT color registry */}
      <div className="hidden hover:bg-yellow-100 hover:bg-yellow-300 hover:bg-yellow-400" />
    </div>
  );
}

export default Store;
