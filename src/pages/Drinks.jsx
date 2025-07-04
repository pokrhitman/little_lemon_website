import React, { useState } from 'react';
import drinksItemsToDisplay from '../data/drinksData';
import ItemCard from '../components/ItemCard';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import terrace from '../assets/terrace.jpg';

function Drinks() {
  const [popupItem, setPopupItem] = useState(null);

  // For keyboard accessibility, optional:
  const handleCardKey = (item, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setPopupItem(item);
    }
  };

  const handleOpenPopup = item => setPopupItem(item);
  const handleClosePopup = () => setPopupItem(null);

  return (
    <div id="main-content" className="relative flex-1 flex-col items-center overflow-hidden w-full">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center pointer-events-none w-full h-full"
        style={{
          backgroundImage: `url(${terrace})`,
          filter: 'blur(2px) brightness(0.9)',
          opacity: 0.6,
        }}
        aria-hidden="true"
      />
      <main className="px-2 md:px-6 py-8 w-full">
        <h1 className="sr-only">Drinks - Little Lemon Restaurant</h1>
        <div className="max-w-7xl mx-auto">
          {drinksItemsToDisplay.map(section => (
            <section key={section.title} className="mb-14">
              <h2 className="text-3xl font-bold text-blue-100 drop-shadow-lg mb-2">
                {section.title}
              </h2>
              <p className="text-blue-50 text-md mb-4 drop-shadow">
                Click on an item to see more details.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.data.map(item => (
                  <ItemCard
                    key={item.name}
                    title={item.name}
                    price={item.price}
                    bg="bg-blue-50"
                    hoverBg="bg-blue-200"
                    textColor="text-blue-900"
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
          <DialogContent className="max-w-md w-full">
            {popupItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{popupItem.name}</DialogTitle>
                  <p className="text-md text-blue-600 mt-1 mb-2">{popupItem.price}</p>
                </DialogHeader>
                <DialogClose className="absolute top-2 right-2" aria-label="Close" />
                <div className="flex flex-col items-center text-center px-2 pb-2">
                  {popupItem.img && (
                    <img
                      src={import.meta.env.BASE_URL + popupItem.img}
                      alt={popupItem.name}
                      className="mx-auto mb-4 max-h-44 rounded-lg object-cover"
                      style={{ maxWidth: '100% ' }}
                      draggable="false"
                    />
                  )}
                  <div className="flex justify-center gap-8 w-full">
                    <div>
                      <div className="font-medium text-blue-900">Calories:</div>
                      <div>{popupItem.nutrition?.calories} kcal</div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-900">Sugar:</div>
                      <div>{popupItem.nutrition?.sugar} g</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>

      {/* Tailwind JIT color registry */}
      <div className="hidden hover:bg-blue-200 hover:bg-yellow-300" />
    </div>
  );
}

export default Drinks;
