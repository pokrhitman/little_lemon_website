import React from 'react';
import Navbar from './Navbar';
import LittleLemonFooter from './LittleLemonFooter';
import '../styles/Layout.css';
import PropTypes from 'prop-types';

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
