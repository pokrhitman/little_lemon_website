# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

### Planned

- Table reservation system
- Food ordering and shopping cart feature
- Animation on Home page
- Chabot as concierge AI agent
- Additional features and quality-of-life improvements (to be specified).

---

## [2.2.0] 2025-07-06 Carousel feature and Home layout improvements

- Implemented a fully functional “Meet Our Team” carousel on the Home page, with employee bios and images.
- Set up robust image paths using public/assets and BASE_URL for production and GitHub Pages compatibility.
- Refactored the Home page layout: removed animation and chatbot placeholders, made cards more prominent and balanced, and improved overall spacing.
- Completed final branch cleanup and major git hygiene—local and remote repos are now clean and up to date.
- Continued accessibility (a11y) polish, keeping all components and new features compliant.


## [2.1.2] 2025-07-06 Accessibility statement & a11y refactor round 2

- Added a dedicated **Accessibility Statement** page and footer link for legal/ESG compliance.
- Refactored navigation forms and all pages for diamond-level accessibility (a11y).
- Fixed router basename and footer links for correct GitHub Pages navigation.
- Updated README with expanded accessibility & compliance details.

---

## [2.1.2] 2025-07-05 "Diamond-Standard" a11y Refactor & Layout Consistency

### Accessibility (a11y) Upgrades
- Completed a comprehensive a11y refactor across all major components, aligning the project with "diamond-level" (enterprise/ESG/legally-defensible) standards.
- Ensured only one `<main id="main-content">` landmark per page (in Layout), with all individual pages now using `<div>` as the root for stacking and backgrounds.
- Implemented programmatic focus on main content after route changes for improved screen reader and keyboard navigation.
- Added and improved skip link visibility for keyboard and screen reader users.
- Refactored `Navbar` to:
  - Use `aria-current="page"` on active links.
  - Provide clear, descriptive aria-labels and roles.
  - Ensure full keyboard and screen reader accessibility.
- Refactored `Footer` for proper landmark role, improved semantic structure and high-contrast accessible links.
- Upgraded `Home`, `QuoteCard`, and `CarouselCard` for correct heading order, aria-live regions and clear section labels.
- Confirmed background images remain `aria-hidden` and do not interfere with assistive tech.
- Fixed minor HTML/ARIA typos and enhanced keyboard focus states on all interactive elements.

### Structural & Design Consistency
- Standardized component architecture: all pages/components use correct semantic landmarks and maintain clean, accessible DOM.

---


## [2.1.1] 2025-07-04 

### Image Layers, Form & Spacing Polish

### Visual & Layout Upgrades
- Applied blurred, semi-transparent background image layers to Drinks, Desserts, Store and Feedback pages for a unified, modern Mediterranean look.
- Adjusted section headings and card backgrounds for improved contrast and readability over image layers.
- Fine-tuned Feedback form for better user experience:
  - Reduced vertical spacing between page text and form.
  - Made input and textarea fields slightly darker and more defined for better focus.
  - Improved radio button appearance and ensured label alignment (single-line for "Social Media").
- Standardized use of Tailwind spacing utilities (`gap`, `mb`, `py`) across form and grid containers to ensure tighter, more consistent layouts throughout all pages.

### Developer Experience
- Continued use of the “dummy div” Tailwind color registry pattern to guarantee JIT generation of all custom color/hover classes, supporting future palette flexibility.
- Confirmed accessibility improvements: form error messages, focus indicators, and color contrast.

---

**Note:**  
This update finalizes the image-layer layout migration and form accessibility phase. All main UI pages now present a consistent, visually appealing experience, with modular code and theme logic ready for further expansion.




## [2.1.0] 2025-06-29 

### UI, Card, and Tailwind Improvements

### UI & Layout
- Refactored `Menu` and `Home` pages to use blurred background images with semi-transparent overlays for a modern, Mediterranean look.
- Enhanced card and section title color contrast for readability over photo backgrounds.
- Standardized “pop” effect for item cards across Menu, Drinks, and Desserts.
- Updated item cards for left-aligned text, responsive sizing, and improved shadow/border.
- Fixed sticky footer: footer now always hugs the bottom when content is short; removed excess space on all pages.

### Design System & Tailwind
- Centralized card hover effect logic in `ItemCard` using `hoverBg` prop; removed wrapper divs for hover styling.
- Implemented a “dummy div” color registry pattern to ensure Tailwind JIT generates all required hover and background color classes (including new or custom shades).
- Confirmed that all menu and drink card color variants now work reliably across pages.
- Documented pattern for future-proofing the codebase.

### Code Cleanup
- Removed redundant/legacy style wrappers and unnecessary `min-h-screen`/margin from page files.
- Audited and cleaned up layout spacing for visual consistency and accessibility.

---

**Note:**  
This update future-proofs card theming and hover effects, unifies visual branding, and eliminates Tailwind JIT surprises. All main pages are now modular, clean and visually consistent.


---

### [2.0.0] 2025-06-28
- Major refactor: migrated entire project and codebase to React Hook Form, shadcn/ui, and Tailwind CSS.
- Removed all Chakra/Formik/Yup usage from Feedback and Login.
- Added PropTypes to new shadcn/ui components (textarea, radio-group).
- Unified style for all pages.
- Cleaned up unused legacy files (PasswordInput, useDevice).
- Debugged and fixed dialog/modal and card alignment issues site-wide.


## [1.5.1] - 2025-06-24 

### Authentication, Security & Routing Improvements

- Fixed SPA routing and navigation links for Login/Register pages to use React Router (`to` prop), ensuring compatibility with GH Pages subdirectory deployment.
- Switched all internal authentication-related navigation from `href` to `to`, resolving broken links and 404 errors on direct access.
- Audited and clarified Firebase API key handling for public deployments:
  - Restricted Firebase API key usage in Google Cloud Console to only allowed website domains.
  - Updated `.env` to use newly restricted Firebase key; removed/replaced any previously leaked keys.
  - Documented secure client-side key practices and added guidance for API key restriction.
- Reviewed and set minimum-necessary Firestore security rules:
  - Public write-only feedback collection; no public reads.
  - No public write/read for any other collections.
- Added documentation and in-code comments for security improvements.
- General UI and accessibility polish based on latest website testing by adding new component itemCard.jsx which handles the global styling of the item cards in the Menu, Drinks and Desserts pages.


## [1.5.1] – 2025-06-23

### Fixed
- Layout issues with item cards in Menu, Drinks, Desserts and Store pages.
- Reduced width of item cards and corrected spacing between section title, heading and the item cards.
- Better alignment of text and item cards for improved visual display.


## [1.5.0] – 2025-06-22

### Added
- Integrated Firebase Authentication (email/password) for registration and login.
- Connected feedback form to Firestore database with secure public write and private read rules.
- Hid Firebase API keys using environment variables and documented setup for future cloners.
- Added robust error handling and developer logging for form/database submissions.

### Changed
- Updated documentation and project structure to reflect backend integration and security best practices.


## [1.4.2] – 2025-06-21

### Changed
- Refactored useDevice custom hook to use Chakra’s responsive utilities and keep only touch/orientation logic not available in Chakra.
- Removed legacy utils.jsx email validator; all form validation is now handled via Yup in Chakra-ized forms.
- Cleaned up project by removing unused or course-specific helper files.

### Added
- Updated Navbar to show user’s name or email when logged in; also to display correct links for login, account and logout.
- Added comments throughout codebase to clarify authentication flow and Chakra best practices.

### Fixed
- All forms (Login, Register, Feedback) now use Chakra UI and Yup validation for full accessibility and brand consistency.
- Removed legacy device logic and all unused code from course assignments.


## [1.4.1] – 2025-06-20

### Changed

- Refactored Home page and all main page components to work with a single Chakra Layout wrapper, removing redundant <main> and conflicting minH/flex settings.
- Removed all legacy global CSS classes and replaced with Chakra props for backgrounds, spacing and colors.
- Standardized layout for sticky footer and responsive Navbar on all pages.
- Improved brand color consistency in all UI components.

### Fixed

- Footer now consistently appears at the bottom of every page, including Home and Login.
- Eliminated layout and spacing conflicts caused by duplicate <main> containers and leftover CSS.
- Resolved mobile/desktop viewport edge cases for short pages.

### Removed

- Deleted obsolete WelcomeCard.jsx component and all unused className references from web project.

### Notes

- Project is now fully Chakra-themed with no dependency on global CSS or React Native/mobile code.
- Next: apply layout fix to Login page and continue UI polish as needed.


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
