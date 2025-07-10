import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer role="contentinfo" className="w-full py-6 bg-yellow-400 border-t border-green-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-y-2">
        {/* Left: Copyright & Developer Notice */}
        <div className="flex flex-col md:flex-row md:items-center gap-x-2">
          <span className="text-green-900 text-sm md:text-base font-semibold">
            © {new Date().getFullYear()} Little Lemon. All rights reserved.
          </span>
          <span className="text-green-900 text-sm ">
            Built by{' '}
            <a
              href="https://github.com/pokrhitman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Pokrhitman's GitHub profile (opens in new tab)"
              className="underline hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-green-900 rounded transition"
            >
              Pokrhitman
            </a>{' '}
            with React, Vite, Tailwind CSS and shadcn/ui.
          </span>
        </div>

        {/* Right: Footer Navigation */}
        <nav aria-label="Footer links" className="flex flex-row gap-6 items-center mt-2 md:mt-0">
          <Link
            to="/accessibility"
            className="underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-900 rounded transition text-green-900 font-semibold"
            aria-label="Accessibility Statement"
          >
            Accessibility
          </Link>
          <span className="text-green-900 select-none opacity-60">|</span>
          <Link
            to="/privacy"
            className="underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-900 rounded transition text-green-900 font-semibold"
            aria-disabled="true"
            tabIndex={-1}
            onClick={e => e.preventDefault()}
          >
            Privacy Statement
          </Link>
          <span className="text-green-900 select-none opacity-60">|</span>
          <Link
            to="/contact"
            className="underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-900 rounded transition text-green-900 font-semibold"
            aria-disabled="true"
            tabIndex={-1}
            onClick={e => e.preventDefault()}
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
