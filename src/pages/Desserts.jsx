import { useState } from 'react';
import "../styles/Desserts.css";
import useDevice from "../hooks/useDevice";
import dessertsItemsToDisplay from "../data/dessertsData";

function Desserts() {
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
        <main className="desserts-list-page" id="main-content" onClick={handleClosePopup}>
            {/* Visually hidden heading for accessibility/SEO */}
            <h1 className="sr-only">Desserts - Little Lemon Restaurant</h1>
            <div className="desserts-list-container">
                {dessertsItemsToDisplay.map(section => (
                    <section key={section.title} className="desserts-section">
                        <h2 className="desserts-section-title">{section.title}</h2>
                        <div className="desserts-section-items"
                        style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)`}}
                        aria-label={`${section.title} items`}
                        >
                            {section.data.map(item => {
                                const popupId = `pop-up-${item.name.replace(/\s+/g, '')}`;
  
                                return (
                                    <div
                                        className="desserts-item-card"
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
                                        <div className="desserts-item-title">{item.name}</div>
                                        <div className="desserts-item-price">{item.price}</div>
                                        {/* Popup */}
                                        {popupItem === item && (
                                            <div
                                                className={`desserts-item-popup${isMobile ? " mobile" : ""}`}
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
                                                    className="desserts-popup-img"
                                                />
                                                <div className="desserts-popup-info">
                                                    <div className="desserts-popup-calories">{item.nutrition.calories} kcal </div>
                                                    <div className="desserts-popup-fat">{item.nutrition.fat} in grams </div>
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

export default Desserts;