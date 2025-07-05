import React from 'react';

function Footer() {
  return (
    <footer role="contentinfo" className="w-full py-6 bg-yellow-400 border-t border-green-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-2 px-4">
        <p className="text-lg font-semibold text-green-900">
          © {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
        <p className="text-sm text-green-900">
          Built by{' '}
          <a
            href="https://github.com/pokrhitman"
            target="_blank"
            rel="noopener noreferer noreferrer"
            aria-label="Visit Pokrhitman's GitHub profile (opens in new tab"
            className="underline hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-green-900 rounded transition"
          >
            Pokrhitman
          </a>{' '}
          with React, Vite, Tailwind CSS and shadcn/ui.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
