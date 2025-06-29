import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';

// Accessibility: Skip Link allows keyboard/screen reader
// users to jump directly to main content.

function Layout({ children, user, onLogout }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to Main Content link for accessibility */}
      <a
        href="#main-content"
        className="absolute left-2 top-2 z-50 px-4 py-2 bg-yellow text-green-900 rounded opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto focus:translate-y-0 transition"
      >
        Skip to main content
      </a>
      <Navbar user={user} onLogout={onLogout} />
      <main id="main-content" className="flex-1 flex flex-col w-full">
        {children}
      </main>
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
