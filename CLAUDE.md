# CLAUDE.md — Level One Website

## Project Overview

This is the marketing website for **Level One**, an Edinburgh-based AI systems company offering autonomous sales agents and revenue infrastructure for high-growth businesses. It is a **vanilla static website** — no framework, no build tool, no package manager. Everything runs in the browser directly from HTML, CSS, and JavaScript files.

The site is deployed as static files (e.g., via GitHub Pages or similar hosting).

---

## Repository Structure

```
Level-One.Website-/
├── index.html          # Single HTML file — the entire site
├── css/
│   ├── base.css        # CSS variables, reset, global typography, scrollbar
│   ├── layout.css      # Page-level layout, canvas, progress bar, grid background
│   ├── components.css  # Reusable UI components (buttons, cards, badges, etc.)
│   ├── sections.css    # Section-specific styles (hero, features, pricing, etc.)
│   ├── views.css       # Full-screen view styles (blueprint, solutions, spec sheet)
│   ├── calendar.css    # Calendar booking UI styles
│   └── responsive.css  # All media queries (mobile-first breakpoints)
├── js/
│   ├── data.js         # All content data: solutionData, infrastructureData, blueprintData
│   ├── blog-data.js    # Blog post HTML content (blogPosts object)
│   ├── splash.js       # Splash screen, canvas animation, triggerTransition()
│   ├── navigation.js   # View manager, menu system, burger toggle, menuStructure
│   ├── blueprint.js    # Blueprint 3-phase view logic, scroll observer
│   ├── calendar.js     # Calendar booking system, form validation, Make.com webhook
│   ├── solutions.js    # Solutions folder view — tab/section switching
│   └── init.js         # Helper functions, scroll animations, newsletter form, view openers
└── images/
    └── *.png / *.jpeg  # Local image assets (logo, AI-generated visuals)
```

---

## Architecture: Single-Page Application Pattern

The site uses a **show/hide SPA pattern** — all views exist in the DOM simultaneously; JavaScript toggles `display` between them. There is no routing library.

### Named views (DOM IDs):
| ID | Purpose |
|----|---------|
| `#main-content` | Main scrollable page (all sections) |
| `#blog-view` | Blog article reader |
| `#calendar-view` | Booking form + calendar picker |
| `#core-systems-view` | Technical spec sheet (Revenue Infrastructure section) |
| `#blueprint-view` | 3-phase deployment process with trainline sidebar |
| `#solutions-view` | Folder-style solutions browser with tabs + sidebar |

### View transitions
All view switches go through `triggerTransition(callback)` defined in `splash.js`. This shows the splash screen briefly, executes the callback to swap views, then fades back in. Direct DOM manipulation (no animation library).

### Key global state (in `navigation.js`):
- `currentView` — which view is active
- `currentMenuLevel` — `'main'` or `'subsection'` for the burger menu
- `sourceSection` — which section to scroll back to when closing a view

---

## JavaScript Files — Responsibilities

### `data.js`
The single source of truth for all content. Contains three large objects:

- **`solutionData`** — Content for "Revenue Infrastructure" (01 section, opened from feature cards). Keys: `sales`, `support`, `consulting`, `workflow`.
- **`infrastructureData`** — Content for "Infrastructure Catalog" (04 section, opened from service cards). Same keys, different content focused on specific tools.
- **`blueprintData`** — Content for the 3-phase deployment process. Array of `phases` with `id`, `number`, `title`, `subtitle`, `content`.

> **Note**: `data.js` is loaded twice in `index.html` (line 794–795 — a bug). The second load is redundant but harmless.

### `blog-data.js`
Contains `blogPosts` object with two keys (`agentic`, `hyperautomation`), each holding raw HTML string for the blog article content. Injected into `#blog-content-injection` div.

### `splash.js`
- Manages the animated splash/loading screen on first page load
- Loads 120 canvas frames from Cloudinary (`ezgif-frame-001.jpg` through `ezgif-frame-120.jpg`) for a scroll-driven hero animation
- Exports `triggerTransition(callback)` — used by all navigation to animate view transitions
- Controls scroll-driven canvas frame playback

### `navigation.js`
- Defines `menuStructure` — maps menu link names to sections/subsections/actions
- `openView()`, `closeView()`, `closeViewToSource()` — view management
- `openBlog(type)`, `openCalendar()` — specific view openers
- `showSubsections()`, `showMainMenu()` — animated two-level burger menu
- Burger toggle with scrollbar compensation
- `smoothScrollTo()` — custom easing scroll function

### `blueprint.js`
- `initBlueprint()` — renders all 3 phases into DOM from `blueprintData`
- `setupScrollObserver()` — uses `IntersectionObserver` to update the trainline sidebar as user scrolls
- `selectPhase(index)` / `scrollToPhase(index)` — programmatic phase navigation

### `calendar.js`
- Two-step booking flow: form → calendar picker
- `openCalendar(pricingTier)` — can pre-fill pricing tier from pricing cards
- `renderCalendar()` — generates calendar grid, disables past dates and weekends
- `sendToWebhook()` — POSTs booking data to Make.com webhook
- **Webhook URL**: `https://hook.eu2.make.com/YOUR_WEBHOOK_ID` (placeholder — must be replaced with actual URL)

### `solutions.js`
- `openSolutionView(type, sectionId)` — opens solutions folder view from `solutionData`
- `buildFolderTabs()`, `switchSolutionTab()`, `switchSolutionSection()` — tab and sidebar navigation with fade transitions

### `init.js`
- `openBlueprintPhase(phaseIndex, section)` — opens blueprint view at a specific phase
- `openCoreSystemsView(systemType)` — opens spec sheet, scrolls to relevant section
- `openInfrastructureView(type, section)` — opens solutions folder view from `infrastructureData`
- `buildInfrastructureTabs()`, `switchInfrastructureTab()`, `switchInfrastructureSection()` — mirrors solutions.js but for infrastructure catalog
- Scroll progress bar
- `.anim` scroll reveal animation (opacity + transform via scroll listener)
- Menu link initialization on DOMContentLoaded
- Newsletter form (UI feedback only — no actual submission endpoint)

---

## CSS Architecture

### Design Tokens (in `base.css` `:root`)
```css
--bg: #050507                  /* Near-black background */
--bg-card: #0a0a0e             /* Card backgrounds */
--orange: #ff6b35              /* Primary accent color */
--text: #f0f0f2                /* Primary text */
--text-secondary: #7a7a8a      /* Muted text */
--mono: 'JetBrains Mono'       /* Monospace — used for labels, badges */
--heading: 'Space Grotesk'     /* Headings */
--body: 'DM Sans'              /* Body copy */
```

### Animation Convention
Elements with class `.anim` start invisible (set in CSS) and become visible when scrolled into view via the `animateOnScroll()` function in `init.js`. Directional variants:
- `.anim-up` — slides up from below
- `.anim-left` — slides in from left
- `.anim-right` — slides in from right
- `.anim-scale` — scales up from smaller

Delay classes: `.d1` through `.d6` (staggered animation timing).

### Responsive Breakpoints (in `responsive.css`)
- `1024px` — Tablet landscape (2-column grids)
- `768px` — Tablet portrait (single column, adjusted nav)
- `480px` — Mobile (further size reductions)
- `360px` — Small mobile

---

## External Dependencies

All loaded from CDN — no local npm packages:

| Resource | URL | Purpose |
|----------|-----|---------|
| Google Fonts | fonts.googleapis.com | JetBrains Mono, Space Grotesk, DM Sans |
| Hero video | Cloudinary (`dw5n0wlmr`) | Background loop video in hero |
| Canvas frames | Cloudinary (`dw5n0wlmr`) | 120 JPG frames for scroll animation |
| Card images | Cloudinary (`dw5n0wlmr`) | AI-generated product imagery |
| Blog images | Unsplash | Blog card thumbnails |
| Logo | GitHub raw (`level-one-ai/Level-One.Website-`) | PNG logo used in nav, splash, calendar |

---

## Key Sections (in scroll order)

| # | Section ID | Content |
|---|-----------|---------|
| Hero | `.hero` | Video background, canvas animation, CTA to calendar |
| 01 | `#features` | 4 feature cards → open `core-systems-view` |
| 02 | `#process` | 3 process cards → open `blueprint-view` |
| 03 | `#about` | Company description |
| 04 | `#services` | 4 service cards → open `solutions-view` (infrastructureData) |
| 05 | `#pricing` | 3 pricing tiers → open calendar with tier pre-selected |
| 06 | `#insights` | 2 blog cards + newsletter form |
| 07 | `.cta-section` | Final CTA to calendar |

---

## Development Workflow

This project has **no build process**. Edits are made directly to source files.

### Making changes
1. Edit HTML, CSS, or JS files directly
2. Open `index.html` in a browser to test (or use a local static server)
3. For a local server: `python3 -m http.server 8080` or `npx serve .`

### Adding content
- **New blog post**: Add a key to `blogPosts` in `blog-data.js` and a card in `index.html` with `onclick="openBlog('your-key')"`
- **New solution section**: Add sections array to the relevant key in `solutionData` or `infrastructureData` in `data.js`
- **New feature card**: Add HTML card in `#features` section, add `onclick="openCoreSystemsView('type')"`

### Modifying pricing
Pricing is hardcoded in `index.html` within `#pricing`. Update the `<span class="price-amount">` and `<div class="pricing-feature">` elements directly.

### Webhook integration
The booking system sends to Make.com. Update the webhook URL in `calendar.js`:
```js
const webhookURL = 'https://hook.eu2.make.com/YOUR_WEBHOOK_ID';
```

---

## Known Issues / Technical Debt

1. **Duplicate `data.js` script tag** — `index.html` loads `js/data.js` twice (lines 794–795). This causes `infrastructureData` to be declared twice but JavaScript silently allows `const` re-declaration via duplicate script loads. Remove the duplicate `<script src="js/data.js"></script>` line.

2. **`infrastructureData` declared twice in `data.js`** — The object is defined at line 234 and again at line 676. The second declaration overwrites the first. The first (incomplete) block should be removed.

3. **Newsletter form has no backend** — The form in `#insights` only shows UI feedback (`Subscribed ✓`) but does not submit anywhere. Wire up to an email service or Make.com webhook if real subscriptions are needed.

4. **Duplicate `openCalendar` function** — Defined in both `navigation.js` and `calendar.js`. The `calendar.js` version (with `pricingTier` parameter) takes precedence due to script load order. The `navigation.js` version can be removed.

5. **`selectPhase` referenced in `init.js` but not defined** — `openBlueprintPhase()` calls `selectPhase(phaseIndex)` but this function does not exist; it should be `scrollToPhase()` (defined in `blueprint.js`).

---

## Conventions to Follow

- **No build tools** — do not introduce npm, bundlers, or transpilers
- **Vanilla JS only** — no jQuery, React, Vue, or other frameworks
- **CSS variables** — always use design tokens from `base.css` rather than hardcoded colors or fonts
- **View pattern** — new views should follow the existing pattern: add a `<div id="new-view">` to `index.html`, hide/show via `style.display`, open/close via `triggerTransition()`
- **Content in data files** — keep HTML content strings in `data.js` or `blog-data.js`, not inline in `index.html`
- **Section numbering** — sections follow `01 —`, `02 —`, etc. naming in section badges
- **Animation classes** — use `.anim .anim-up .d1` pattern for scroll-reveal; do not use JavaScript timers for entrance animations on main content
- **Orange accent only** — the brand color `#ff6b35` (`--orange`) is the only accent; do not introduce additional colors
