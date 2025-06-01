import Navbar from "./Navbar";
import LittleLemonFooter from "./LittleLemonFooter";
import "../styles/Layout.css";

function Layout({ children }) {
    return (
        <div className="app-shell">
            <Navbar />
            <div className="main-grid">
                {/* Placeholder for <aside className="sidebar-left">...</aside> here later */}
                <main className="main-content">
                    {children}
                </main>
                {/* Placeholder for <aside className="sidebar-right">Widget area for future use</aside> */}
            </div>
            <LittleLemonFooter />
        </div>
    );
}

export default Layout;