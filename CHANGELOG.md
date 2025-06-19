# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

### Planned

- Full refactor of styles and layout to Chakra UI components.
- UI/UX design audit and accessibility enhancements.
- README and documentation updates.
- Additional features and quality-of-life improvements (to be specified).

---

## [1.4.0] – 2025-06-19

### Changed

- Fully refactored Menu, Drinks, Desserts, and Store pages to use Chakra UI layout and modal components for consistent, accessible UI.
- Removed all remaining legacy CSS and className-based styles from the refactored pages.
- Updated navigation: replaced Gift Card with Store, removed dead links from Navbar.

### Added

- Implemented fully accessible, keyboard- and screen reader-friendly modal popups for menu item details on Menu, Drinks, and Desserts pages.
- Added user prompt (“Click on an item to see more details.”) above product grids to clarify interaction.
- Included an InfoOutline icon next to each item name for improved discoverability of item details.
- Created a new Store page featuring sections for Spices, Sauces, and Merchandise, with “Buy Now” buttons linking to external stores.

### Fixed

- Ensured all interactive elements provide focus states, pointer cursors, and proper ARIA roles for accessibility.
- Standardized layout and spacing across all major pages to match design system and improve responsive UX.

### Removed

- Deactivated (but retained) GiftCard page/component in codebase pending future reservation/table booking feature.
- Eliminated unused onMouseEnter/onMouseLeave popup logic in favor of accessible modal pattern.


## [1.3.0] – 2025-06-18

### Changed

- Migrated Home page, Navbar, Footer and QuoteCard components to Chakra UI for modern, accessible and consistent styling.
- Removed ThemeContext and custom theme switch logic in favor of Chakra's built-in color mode (light/dark mode) support.
- Refactored App.jsx to eliminate legacy layout and style logic; now uses Chakra layout primitives and color tokens.

### Added

- Implemented Chakra's `IconButton` for global light/dark mode toggle in the Navbar.
- Integrated Chakra color mode script for persistent theming.

### Removed

- Deleted legacy Switch component and its styles after replacing with Chakra color mode toggle.
- Removed all unused or obsolete CSS files (App.css, Switch styles, etc.) following Chakra migration.
- Dramatically reduced or deleted `index.css` after migrating global styles to Chakra's theme system.

---

## [1.2.0] – 2025-06-16

### Added

- Integrated ESLint and Prettier for automated code linting and formatting.
- Created a custom Chakra UI theme with unified brand color tokens based on extracted legacy CSS colors.
- Added `theme.js` for centralized color, font, and design token management.
- Updated `main.jsx` to use ChakraProvider with the new theme.

### Changed

- Planned replacement of scattered legacy CSS with Chakra tokens for a unified design system (to be completed component-by-component in upcoming releases).

---

## [1.1.0] – 2025-06-16

### Added

- Integrated ESLint and Prettier for automated code linting and formatting.

---

## [1.0.0] – YYYY-MM-DD

### Added

- Initial version of the Little Lemon Restaurant website.
- Core pages: Home, Menu, Feedback, Login, etc. (summarize what you had at the project’s first public release).
