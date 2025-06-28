import React from 'react';

function Footer() {
  return (
    <footer role="contentinfo" className="w-full py-6 mt-12 bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center justiry-center space-y-2 px-4">
        <span className="text-lg font-semibold text-gray-700">
          © {new Date().getFullYear()} Little Lemon. All rights reserved.
        </span>
        <span className="text-sm text-gray-500">
          Built by{' '}
          <a
            href="https://github.com/pokrhitman"
            target="_blank"
            rel="noopener norefferer noreferrer"
            className="underline hover:text-yellow-600 transition"
          >
            Pokrhitman
          </a>{' '}
          with React, Vite, Tailwind CSS and shadcn/ui.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
