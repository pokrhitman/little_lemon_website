import React, { useState } from 'react';
import menuItemsToDisplay from '../data/menuData';
import ItemCard from '../components/ItemCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

function Menu() {
  const [popupItem, setPopupItem] = useState(null);

  // For keyboard accessibility:
  const handleCardKey = (item, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setPopupItem(item);
    }
  };

  // Open popup
  const handleOpenPopup = item => {
    setPopupItem(item);
  };

  // Close popup
  const handleClosePopup = () => {
    setPopupItem(null);
  };

  return (
    <main
      id="main-content"
      className="px-2 md:px-6 py-8 w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Hidden real h1 for SEO/ Accessibility */}
      <h1 className="sr-only">Menu - Little Lemon Restaurant</h1>

      <div className="max-w-7xl mx-auto">
        {menuItemsToDisplay.map(section => (
          <section key={section.title} className="mb-14">
            <h2 className="text-3xl font-bold text-green-900 mb-2">{section.title}</h2>
            <p className="text-gray-600 text-md mb-4">Click on an item to see more details.</p>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              aria-label={`${section.title} items`}
            >
              {section.data.map(item => (
                <ItemCard
                  key={item.name}
                  title={item.name}
                  price={item.price}
                  bg="bg-green-800"
                  hoverBg="bg-yellow-400"
                  textColor="text-yellow-100"
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

      {/* shadcn/ui Dialog Popup */}
      <Dialog open={!!popupItem} onOpenChange={open => !open && handleClosePopup()}>
        <DialogContent className="max-w-md w-full">
          {popupItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{popupItem.name}</DialogTitle>
                <p className="text-md text-gray-600 mt-1 mb-2">{popupItem.price}</p>
              </DialogHeader>
              <div className="flex flex-col items-center text-center px-2 pb2">
                <img
                  src={import.meta.env.BASE_URL + popupItem.img}
                  alt={popupItem.name}
                  className="mx-auto mb-4 max-h-44 rounded-lg object-cover"
                  style={{ maxWidth: '100%' }}
                />
                <div className="mb-2">
                  <span className="block font-medium mb-1">{popupItem.nutrition.ingredients}</span>
                  <span className="text-sm text-gray-500">{popupItem.nutrition.calories} kcal</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

export default Menu;
