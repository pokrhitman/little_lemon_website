import menuItemsToDisplay from '../data/menuData';
import "../styles/Menu.css";

function Menu() {
    return (
        <div className="menu-page">
            <h1 className="menu-title">Our Menu</h1>
            <div className="menu-sections">
                {menuItemsToDisplay.map((section, sectionIdx) => (
                    <section key={section.title + sectionIdx} className="menu-section">
                        <h2 className="menu-section-title">{section.title}</h2>
                        <ul className="menu-items-list">
                            {section.data.map((item, itemIdx) => (
                                <li key={item.name + itemIdx} className="menu-item">
                                    <span className="menu-item-name">{item.name}</span>
                                    <span className="menu-item-price">{item.price}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Menu;