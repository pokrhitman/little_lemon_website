import { useState } from 'react';
import menuItemsToDisplay from '../data/menuData';
import "../styles/Menu.css";
import useDevice from '../hooks/useDevice';

function Menu() {
    const {isMobile, isTouchDevice } = useDevice();

    const [popupItem, setPopupItem] = useState(null);

    // For keyboard accessibility, optional:
    const handleCardKey = (item, e) => {
        if (e.key === "Enter" || e.key === " ") {
            setPopupItem(item);
        }
    };

    // Close popup on click elsewhere (optional)
    const handleClosePopup = () => setPopupItem(null);

    const gridColumns = isMobile ? 1 : 3;

    return (
        <main className="menu-list-page" id="main-content" onClick={handleClosePopup}>
            {/* Visually hidden heading for accessibility/SEO */}
            <h1 className="sr-only">Menu - Little Lemon Restaurant</h1>
            <div className="menu-list-container">
                {menuItemsToDisplay.map(section => (
                    <section key={section.title} className="menu-section">
                        <h2 className="menu-section-title">{section.title}</h2>
                        <div className="menu-section-items"
                        style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)`}}
                        aria-label={`${section.title} items`}
                        >
                            {section.data.map(item => {
                                const popupId = `pop-up-${item.name.replace(/\s+/g, '')}`;
  
                                return (
                                    <div
                                        className="menu-item-card"
                                        key={item.name}
                                        tabIndex={0}
                                        aria-haspopup="dialog"
                                        aria-controls={popupId}
                                        aria-label={item.name}
                                        onMouseEnter={!isTouchDevice ? () => setPopupItem(item) : undefined}
                                        onMouseLeave={!isTouchDevice ? () => setPopupItem(null) : undefined}
                                        onClick={e => { e.stopPropagation(); setPopupItem(item); }}
                                        onKeyDown={e => handleCardKey(item, e)}
                                    >
                                        <div className="menu-item-title">{item.name}</div>
                                        <div className="menu-item-price">{item.price}</div>
                                        {/* Popup */}
                                        {popupItem === item && (
                                            <div
                                                className={`menu-item-popup${isMobile ? " mobile" : ""}`}
                                                id={popupId}
                                                onClick={e => e.stopPropagation()}
                                                role="dialog"
                                                aria-label={`Nutritional info for ${item.name}`}
                                                tabIndex={-1}
                                                onKeyDown={e => { if (e.key === "Escape") handleClosePopup();}}
                                            >
                                                {(isMobile || isTouchDevice) && (
                                                    <button
                                                    className="popup-close-btn"
                                                    aria-label="Close"
                                                    onClick={handleClosePopup}
                                                    tabIndex={0}
                                                    >x</button>
                                                )}
                                                <img src={import.meta.env.BASE_URL + item.img}
                                                    alt={item.name}
                                                    className="menu-popup-img"
                                                />
                                                <div className="menu-popup-info">
                                                    <div className="menu-popup-ingredients">{item.nutrition.ingredients}</div>
                                                    <div className="menu-popup-calories">{item.nutrition.calories} kcal </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}

export default Menu;