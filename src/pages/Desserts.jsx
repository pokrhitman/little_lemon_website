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

function Desserts() {
  const [popupItem, setPopupItem] = useState(null);

  // For keyboard accessibility
  const handleCardKey = (item, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setPopupItem(item);
    }
  };

  const handleOpenPopup = item => {
    setPopupItem(item);
  };

  // Close popup on click elsewhere
  const handleClosePopup = () => {
    setPopupItem(null);
  };

  return (
    <main id="main-content" className="px-2 md:px-6 py-8 w-full min-h-screen bg-pink-50">
      <h1 className="sr-only">Desserts - Little Lemon Restaurant</h1>

      <div className="max-w-7xl mx-auto">
        {dessertsItemsToDisplay.map(section => (
          <section key={section.title} className="mb-14">
            <h2 className="text-3xl font-bold text-pink-800 mb-2">{section.title}</h2>
            <p className="text-pink-600 text-md mb-4">Click an item to see more details.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <DialogContent className="max-w-md w-full">
          {popupItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl fon-bold">{popupItem.name}</DialogTitle>
                <p className="text-md text-pink-600 mt-1 bm-2">{popupItem.price}</p>
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
    </main>
  );
}

export default Desserts;
