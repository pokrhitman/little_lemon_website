import "../styles/MenuDetail.css";

function MenuDetail({ item }) {
    if (!item) {
        return (
            <div className="menu-detail-card">
                <p className="menu-detail-error">No menu item selected.</p>
            </div>
        );
    }

    return (
        <div className="menu-detail-card">
            {item.image && (
                <img
                src={item.image}
                className="menu-detail-image"
                alt={item.name}
                />
            )}
            <h2 className="menu-detail-title">{item.name}</h2>
            <p className="menu-detail-price">Price: {item.price}</p>
            {item.description && (
                <p className="menu-detail-description">{item.description}</p>
            )}
        </div>
    );
}

export default MenuDetail;