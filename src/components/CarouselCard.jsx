import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import testimonials from '../data/testimonials.json';

function CarouselCard() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  if (!total) return null;

  const testimonial = testimonials[index];

  // Keyboard navigation (optional)
  const handleKeyDown = e => {
    if (e.key === 'ArrowRight') {
      setIndex(prev => (prev + 1) % total);
    }
    if (e.key === 'ArrowLeft') {
      setIndex(prev => (prev - 1 + total) % total);
    }
  };

  // Next/ Prev button handlers
  const handlePrev = () => setIndex(prev => (prev - 1 + total) % total);
  const handleNext = () => setIndex(prev => (prev + 1) % total);

  return (
    <section aria-live="polite" aria-label="Meet Our Team" className="w-full max-w-md mx-auto mt-2">
      <Card className="bg-gray-100/90 shadow-xl rounded-2xl border border-gray-200">
        <CardContent className="flex flex-col items-center gap-2 py-2 px-6">
          <h2 className="text-xl font-bold text-gray-800 text-center tracking-wide mb-1">
            Meet Our Team
          </h2>
          {/* Carousel */}
          <div
            className="w-full flex flex-col items-center justify-center gap-4 bg-white rounded-lg shadow p-6"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label={`${testimonial.name}, ${testimonial.role} at ${testimonial.location}`}
            role="group"
          >
            {/* Image */}
            {testimonial.photo && (
              <img
                src={`${import.meta.env.BASE_URL}${testimonial.photo}`}
                alt={`Portrait of ${testimonial.name}, ${testimonial.role}`}
                className="rounded-xl w-96 h-48 object-cover border-4 border-yellow-300 shadow-md"
                draggable="false"
                style={{ objectPosition: 'center' }}
              />
            )}
            {/* Message */}
            <blockquote className="italic text-gray-700 text-lg text-center">
              “{testimonial.message}”
            </blockquote>
            {/* Details */}
            <div className="text-center">
              <span className="block font-bold text-green-900 text-lg">{testimonial.name}</span>
              <span className="block text-sm text-gray-500">
                {testimonial.role} — {testimonial.location}
              </span>
            </div>
            {/* Navigation */}
            <div className="flex flex-row items-center justify-center gap-4 mt-2">
              <button
                onClick={handlePrev}
                aria-label="Previous team member"
                className="w-10 h-10 rounded-full bg-yellow-200 text-green-900 text-2xl font-bold shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-green-900 transition flex items-center justify-center leading-none pb-[4px]"
              >
                ‹
              </button>
              <span className="text-green-900 font-semibold text-lg">
                {index + 1} / {total}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next team member"
                className="w-10 h-10 rounded-full bg-yellow-200 text-green-900 text-2xl font-bold shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-green-900 transition flex items-center justify-center leading-none pb-[4px]"
              >
                ›
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default CarouselCard;
