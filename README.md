# Little Lemon Website — Modern React Portfolio Project

> Portfolio project for the **Meta Front-End Developer Certification** offered by Coursera  
> A dynamic, full-featured restaurant web app showcasing best practices in React, accessibility, UI/UX and real-world front-end development.

---

## 🚀 Project Overview

This is a **front-end React web app** for the fictional Mediterranean bistro, _Little Lemon_.

- **Built for the Coursera Meta Front-End Developer Certificate.**
- Demonstrates advanced React architecture, component patterns, hooks, accessibility and a professional UI/UX.
- Designed for **scalability, clarity, and strong developer experience** using **Vite**, ESLint and a clean folder structure.

---

## ✨ Live Demo

👉 [View the Demo on GitHub Pages](https://pokrhitman.github.io/little_lemon_website/)

---

## ♿ Accessibility & AI-Readiness

This project goes beyond traditional accessibility (a11y) and proactively prepares for the future of web automation and AI agents. Key features include:

- **Semantic HTML**: All pages use correct landmarks (`<nav>`, `<main>`, `<header>`, `<footer>`), headings and label structure.
- **Keyboard Navigation**: All interactive elements are keyboard accessible (forms, buttons, pop-ups, etc.).
- **ARIA Labels & Roles**: Dynamic UI elements (popups, alerts, form feedback) use proper `aria-label`, `aria-live` and roles to announce changes to screen readers and bots.
- **Skip Link**: Prominent “Skip to main content” link at the top of every page for keyboard and screen reader users.
- **High Contrast & Focus States**: Color system and visible focus indicators help all users—including those with visual impairments or on touch devices.
- **Accessible Forms**: All inputs and controls have explicit labels, validation, and accessible feedback.
- **Structured Data for AI Agents**: Implements [Schema.org](https://schema.org/Restaurant) structured data in the site `<head>`, enabling search engines and AI assistants to understand the restaurant, menu and reservation options.
- **Future-Proof Philosophy**: Designed so AI agents (e.g., digital assistants, browser bots) can navigate, extract data and perform actions like menu lookups or reservations as the next web generation emerges.

---

## 🧩 Features

- **Modern Menu with Interactive Pop-ups**  
  Menu items (appetizers, main dishes, sides, desserts) are rendered as responsive cards with animated nutritional popups, built with a scalable data-driven approach.

- **Quote of the Day Widget**  
  A motivational or culinary quote is shown on the Home page, pulled from a local database (future-proof against broken APIs), with a button for instant new quotes.

- **Sign-Up, Login & Feedback Forms**  
  All forms are interactive, accessible and fully controlled, with real-time validation and success messaging. To collect real user feedback and data please follow the steps to create a Firebase project below this section.

- **Dark/Light Theme Toggle**  
  Global theming with persistent theme choice and consistent style application.

- **Reusable, Maintainable Components**  
  Modular approach: all UI blocks (Navbar, Footer, QuoteCard, MenuItem, etc.) are easy to reuse and extend.

- **Advanced React Patterns**  
  Functional components, custom hooks, prop drilling, controlled inputs, modular state management.

- **Polished UI & Clean Styling with Chakra UI**  
- All layouts and styles now use [Chakra UI](https://chakra-ui.com/)
  components for maximum accessibility and developer experience.

---

## ⚠️ Important Setup Step for real Authentication

This project **requires you to create your own Firebase project** for Auth/Feedback, Log In and Register features to work with actual user data. For security and resource reasons, no default Firebase API keys are included in this repo.

### How to get started:
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com/)
2. Create a Web App and copy your config keys.
3. Add them to a `.env` file in your project root (see `.env.example`).
4. Run `npm install` and then `npm run dev`.

*Do not use your actual API keys for commits to Github  or for public sites.*



## 🔧 Code Quality & Tooling

- **ESLint**: Enforces best practices, catches errors and accessibility issues before code is committed.
- **Prettier**: Automatic code formatting for a consistent, readable codebase.
- **CHANGELOG.md**: Tracks all significant changes and releases, following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) conventions.

---

## 🚧 Planned Improvements

- Migrate all layout and style code to [Chakra UI](https://chakra-ui.com/) components for even better accessibility and developer experience.
- Continue applying and documenting UI/UX and a11y best practices as new features are added.
- Refactor, document and polish all code and components based on ongoing user feedback and professional audits.

## _Project is open to contributions and continuous improvement!_

## 📁 Folder Structure

```
little_lemon_website/
  ├── public/
  ├── src/
  │   ├── assets/         # Images & static files
  │   ├── components/     # Navbar, Footer, QuoteCard, etc.
  │   ├── data/           # Static JSON data (menu, quotes)
  │   ├── hooks/          # Custom hooks (e.g., useFetchQuote)
  │   ├── pages/          # Page views (Home, Menu, Feedback, etc.)
  │   ├── styles/         # CSS stylesheets
  │   ├── App.jsx         # Main app component
  │   ├── main.jsx        # Entry point
  │   └── ...
  ├── package.json
  ├── README.md
  └── CHANGELOG.md        # Detailed explanations about updates and new
                            features
```

---

## ⚙️ Running Locally

```bash
git clone https://github.com/pokrhitman/little_lemon_website.git
cd little_lemon_website
npm install
npm run dev
```

- Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚠️ Important Note for Coursera Students

This project **started as a solution for the Meta Front-End Developer Capstone (Little Lemon) course assignment** on Coursera, but has since been **heavily refactored and expanded** with modern frameworks:

- All UI now uses Chakra UI (not plain CSS or course starter files)
- Form logic is handled with Formik and Yup, rather than React's useState or
  vanilla JS validation
- Routing, file structure and overall app logic have been modularized for
  professional/production use

**As a result, this codebase is _not compatible_ with Coursera's auto-grading system or course copy-paste assignments.**
If you are a student, please do not try to submit this repository as a solution — it will not match assignment requirements or grading scripts. You may fail the assignment or the peer review.

> **This repo is provided as a professional, portfolio-ready demonstration project. Use for learning and inspiration, not as a drop-in course answer.**

---


## 📝 Course Assignments Covered

- **Menu & Popups:** Mapping, filtering and UI state.
- **Form Handling:** Controlled form components (Signup, Login, Feedback).
- **Custom Hooks:** (e.g., local quote fetcher).
- **Theme Toggle:** Dark/light mode support.
- **Component Refactoring:** Code splitting, clean structure and modular CSS.
- **Accessibility & ARIA:** Semantic HTML, keyboard support, skip links, aria-labels and screen-reader-friendly forms.
- More advanced features coming as the course progresses!

---

## 🛠️ Tech Stack

- **React 18+**
- **Vite** (modern build tool)
- **Chakra UI** (component-based styling and a11y)
- **Formik + Yup** (form state & robust validation)
- **ESLint** (linting, code quality)
- **Modern JavaScript (ES6+)**

---

## 🧑‍💻 Clean Code Practices

- Detailed code comments and self-documenting structure.
- Strong, scalable folder conventions.
- DRY, SRP and meaningful component/function naming.
- Atomic commits and version control hygiene.
- Accessibility (a11y): semantic HTML, keyboard support, aria-labels, skip links, etc.
- AI/agent readiness: structured data, predictable UI.

---

## 📄 License

MIT License — see [LICENSE](LICENSE).

---

## 🤝 Connect

For questions, feedback or collaboration, connect with me via [GitHub](https://github.com/pokrhitman).

---
