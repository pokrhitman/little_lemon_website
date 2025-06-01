import { useState } from 'react';
import menuItemsToDisplay from '../data/menuData';
import "../styles/Menu.css";

function Menu() {
    const [popupItem, setPopupItem] = useState(null);

    // For keyboard accessibility, optional:
    const handleCardKey = (item, e) => {
        if (e.key === "Enter" || e.key === " ") {
            setPopupItem(item);
        }
    };

    // Close popup on click elsewhere (optional)
    const handleClosePopup = () => setPopupItem(null);

    return (
        <main className="menu-list-page" onClick={handleClosePopup}>
            <div className="menu-list-container">
                {menuItemsToDisplay.map(section => (
                    <section key={section.title} className="menu-section">

                        <h2 className="menu-section-title">{section.title}</h2>

                        <div className="menu-section-items">
                            {section.data.map(item => {
                                return (
                                    <div
                                        className="menu-item-card"
                                        key={item.name}
                                        tabIndex={0}
                                        onMouseEnter={() => setPopupItem(item)}
                                        onMouseLeave={() => setPopupItem(null)}
                                        onClick={e => { e.stopPropagation(); setPopupItem(item); }}
                                        onKeyDown={e => handleCardKey(item, e)}
                                        aria-haspopup="dialog"
                                    >
                                        <div className="menu-item-title">{item.name}</div>
                                        <div className="menu-item-price">{item.price}</div>
                                        {/* Popup */}
                                        {popupItem === item && (
                                            <div
                                                className="menu-item-popup"
                                                onClick={e => e.stopPropagation()}
                                                role="dialog"
                                                aria-label={`Nutritional info for ${item.name}`}
                                            >
                                                <img src={import.meta.env.BASE_URL + item.img}
                                                    alt={item.name}
                                                    className="menu-popup-img"
                                                />
                                                <div className="menu-popup-info">
                                                    <div className="menu-popup-ingredients">{item.nutrition.ingredients}</div>
                                                    <div className="menu-popup-calories">           {item.nutrition.calories} kcal </div>
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