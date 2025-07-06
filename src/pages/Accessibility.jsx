import React from 'react';

function Accessibility() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-yellow-100 text-green-900 w-full min-h-[70vh] py-12 px-2">
      <section
        className="w-full max-w-3xl bg-white/90 rounded-2xl shadow-lg p-8 border border-yellow-300"
        aria-labelledby="accessibility-title"
      >
        <h1 id="accessibility-title" className="text-3xl font-bold mb-6 text-green-900 text-center">
          Accessibility Statement
        </h1>

        <p className="mb-4 text-lg">
          Little Lemon Restaurant is committed to making this website accessible to everyone,
          including people with disabilities. We continually improve the user experience for all
          users and apply relevant accessibility standards.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Standards</h2>
        <ul className="list-disc ml-8 mb-4">
          <li>WCAG 2.1 AA compliance (Web Content Accessibility Guidelines)</li>
          <li>Semantic HTML and landmark regions for navigation</li>
          <li>Full keyboard navigation, and focus management</li>
          <li>Accessible forms, dialogs and error messaging</li>
          <li>Consistent high-contrast color scheme in both light and dark mdoe</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Scope</h2>
        <p className="mb-4">
          All primary pages, forms, navigation and interactive features have been reviewed for
          accessibility. Decorative background images are hidden from assistive technology.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Feedback</h2>
        <p className="mb-4">
          If you experience any difficulty accessing this website or notice an accessibility issue,
          please{' '}
          <a
            href="mailto:littlelemon@gmail.com"
            className="underline hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-green-900 rounded"
            aria-label="Email accessibility feedback"
          >
            Email us
          </a>{' '}
          or{' '}
          <a
            href="https://github.com/pokrhitman/little_lemon_website/issues"
            className="underline hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-green-900 rounded"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open a GitHub issue (opens in new tab)"
          >
            Open an issue on GitHub
          </a>
          . We aim to respond to accessibility feedback within a short period of time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Known Limitations</h2>
        <ul className="list-disc ml-8 mb-4">
          <li>Some third-pary content may not be fully accessible (e.g., embedded maps).</li>
          <li>The carousel feature is under development with a focus on accessibility.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Commitment</h2>
        <p>
          We are committed to regulary reviewing and updating this website to ensure ongoing
          accessibility compliance.
        </p>
      </section>
    </div>
  );
}

export default Accessibility;
