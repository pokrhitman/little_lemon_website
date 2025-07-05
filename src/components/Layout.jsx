import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';

// Accessibility: Skip Link allows keyboard/screen reader
// users to jump directly to main content.

function Layout({ children, user, onLogout }) {
  const mainRef = useRef(null);
  const location = useLocation();

  // On route change, focus the main content for keyboard/a11y users
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 bg-yellow-100 text-green-900 p-2 rounded font-bold transition"
      >
        Skip to main content
      </a>

      {/* Semantic Navbar */}
      <Navbar user={user} onLogout={onLogout} />

      {/* Main Content Area, focused on route change */}
      <main
        id="main-content"
        ref={mainRef}
        tabIndex={-1}
        className="flex-1 flex flex-col w-full outline-none"
      >
        {children}
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
  onLogout: PropTypes.func,
};

export default Layout;
