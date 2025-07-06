import React, { useState } from 'react';
import dessertsItemsToDisplay from '../data/dessertsData';
import ItemCard from '../components/ItemCard';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import chocolate from '../assets/chocolate.jpg';

function Desserts() {
  const [popupItem, setPopupItem] = useState(null);

  // For keyboard accessibility
  const handleCardKey = (item, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setPopupItem(item);
    }
  };

  const handleOpenPopup = item => setPopupItem(item);
  const handleClosePopup = () => setPopupItem(null);

  return (
    <div className="relative flex-1 flex flex-col items-center overflow-hidden w-full">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center pointer-events-none w-full h-full"
        style={{
          backgroundImage: `url(${chocolate})`,
          filter: 'blur(4px) brightness(0.85)',
          opacity: 0.65,
        }}
        aria-hidden="true"
      />

      <div className="px-2 md:px-6 py-8 w-full">
        <h1 className="sr-only">Desserts - Little Lemon Restaurant</h1>
        <div className="max-w-7xl mx-auto">
          {dessertsItemsToDisplay.map(section => (
            <section
              key={section.title}
              aria-labelledby={`desserts-section-${section.title.replace(/\s+/g, '-')}`}
              className="mb-14"
            >
              <h2
                id={`desserts-section-${section.title.replace(/\s+/g, '-')}`}
                className="text-3xl font-bold text-pink-100 drop-shadow-lg mb-2"
              >
                {section.title}
              </h2>
              <p className="text-pink-50 text-md mb-4 drop-shadow">
                Click an item to see more details.
              </p>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                role="list"
                aria-label={`${section.title} items`}
              >
                {section.data.map(item => (
                  <ItemCard
                    key={item.name}
                    title={item.name}
                    price={item.price}
                    bg="bg-pink-100"
                    hoverBg="bg-yellow-100"
                    textColor="text-pink-800"
                    onClick={() => handleOpenPopup(item)}
                    onKeyDown={e => handleCardKey(item, e)}
                    tabIndex={0}
                    aria-haspopup="dialog"
                    aria-label={item.name}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
        {/* Dialog for nutrition info */}
        <Dialog open={!!popupItem} onOpenChange={open => !open && handleClosePopup()}>
          <DialogContent className="max-w-md w-full" aria-modal="true" role="dialog">
            {popupItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{popupItem.name}</DialogTitle>
                  <p className="text-md text-pink-600 mt-1 mb-2">{popupItem.price}</p>
                </DialogHeader>
                <DialogClose className="absolute top-2 right-2" aria-label="Close" />
                <div className="flex flex-col items-center text-center px-2 pb-2">
                  {popupItem.img && (
                    <img
                      src={import.meta.env.BASE_URL + popupItem.img}
                      alt={popupItem.name}
                      className="max-auto mb-4 max-h-40 rounded-lg object-cover"
                      style={{ maxWidth: '100%' }}
                      draggable="false"
                    />
                  )}
                  <div className="flex justify-center gap-8 w-full">
                    <div>
                      <div className="font-medium text-pink-800">Calories:</div>
                      <div>{popupItem.nutrition?.calories} kcal</div>
                    </div>
                    <div className="font-medium text-pink-800">Fat:</div>
                    <div>{popupItem.nutrition?.fat} g</div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Tailwind JIT color registry */}
      <div className="hidden hover:bg-yellow-100 hover: bg-pink-100" />
    </div>
  );
}

export default Desserts;
