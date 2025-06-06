import Navbar from "./Navbar";
import LittleLemonFooter from "./LittleLemonFooter";
import "../styles/Layout.css";

// Accessibility: Skip Link allows keyboard/screen reader
// users to jump directly to main content.

function Layout({ children }) {
    return (
        <div className="app-shell">
            {/* Skip to Main Content link for accessibility */}
            <a href="main-content" className="skip-link">
                Skip to main content
            </a>
            <Navbar />
            <div className="main-grid">
                {/* Placeholder for <aside className="sidebar-left">...</aside> here later */}
                <main className="main-content" id="main-content">
                    {children}
                </main>
                {/* Placeholder for <aside className="sidebar-right">Widget area for future use</aside> */}
            </div>
            <LittleLemonFooter />
        </div>
    );
}

export default Layout;