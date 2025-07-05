import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.png';
import PropTypes from 'prop-types';

function Navbar({ user, onLogout, colorMode, toggleColorMode }) {
  return (
    <nav className="w-full bg-green-900 text-yellow-400 shadow" aria-label="Primary nagivation">
      <div className="max-w-7xl mx-auto flex items-center h-20 px-4">
        {/* Left: Logo (clickable, always visible) */}
        <div className="flex-shrink-0">
          <Link to="/" tabIndex={0} aria-label="Home">
            <img
              src={logo}
              alt="Little Lemon Logo"
              className="w-14 h-14 object-contain hover:ring-4 hover:ring-yellow-400 transition"
              draggable="false"
            />
          </Link>
          {/* (Optional) Add social icons here later */}
        </div>

        {/* Center: Nav links */}
        <ul
          className="flex flex-1 justify-center gap-8 text-lg font-bold"
          role="menubar"
          aria-label="Site sections"
        >
          {[
            { to: '/', label: 'Home' },
            { to: '/menu', label: 'Menu' },
            { to: '/drinks', label: 'Drinks' },
            { to: '/desserts', label: 'Desserts' },
            { to: '/store', label: 'Store' },
            { to: '/feedback', label: 'Feedback' },
          ].map(({ to, label }) => (
            <li key={label} role="none">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 text-lg font-semibold rounded transition
              ${isActive ? 'text-yellow-400 underline' : 'hover:text-yellow-300'}`
                }
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                tabIndex={0}
                role="menuitem"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Account/ Login and Color Mode Switch */}
        <div className="flex items-center w-1/4 justify-end space-x-2">
          {user ? (
            <>
              <NavLink to="/account">
                <Button varian="ghost" className="text-base font-semibold">
                  Account
                </Button>
              </NavLink>
              <span className="ml-2 text-base font-medium">
                {user.firstName
                  ? `Welcome, ${user.firstName}!`
                  : user.email
                    ? `Logged in as: ${user.mail}`
                    : `Logged in`}
              </span>
              <Button onClick={onLogout} variant="destructive" className="ml-2">
                Log out
              </Button>
            </>
          ) : (
            <NavLink to="/login">
              <Button variant="ghost" className="text-base font-semibold">
                Log In
              </Button>
            </NavLink>
          )}
          {/* Color mode switch */}
          <Button
            size="icon"
            variant="ghost"
            aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="ml-4"
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func,
  colorMode: PropTypes.string.isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Navbar;
