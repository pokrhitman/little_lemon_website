import React from 'react';

function Footer() {
  return (
    <footer role="contentinfo" className="w-full py-6 bg-yellow-400 border-t border-green-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center justiry-center space-y-2 px-4">
        <span className="text-lg font-semibold text-green-900">
          © {new Date().getFullYear()} Little Lemon. All rights reserved.
        </span>
        <span className="text-sm text-green-900">
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
