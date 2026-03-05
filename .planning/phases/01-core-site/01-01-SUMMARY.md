---
phase: 01-core-site
plan: "01"
subsystem: ui
tags: [tailwind-v4, html, vanilla-js, bilingual, design-tokens, hero]

# Dependency graph
requires: []
provides:
  - index.html HTML5 shell with Tailwind v4 CDN and @theme design token block
  - 13 color tokens (earth-*, sage-*, gold-*, sky-*, neutral-*) and 2 font tokens
  - Fixed navigation with brand, 4 anchor links, mobile hamburger, hidden lang-toggle
  - Full-viewport hero section with dark overlay, headline, tagline, dual CTAs
  - js/main.js bilingual scaffold (ES/EN) with applyLanguage() and mobile nav toggle
  - css/styles.css custom overrides placeholder
  - images/ directory structure (hero, founders, school)
affects: [01-02, phase-2-i18n]

# Tech tracking
tech-stack:
  added:
    - "@tailwindcss/browser@4 (CDN — no build step)"
    - "Google Fonts: Playfair Display (700, italic 400) + Inter (400, 500, 600)"
  patterns:
    - "@theme block inside <style type='text/tailwindcss'> for Tailwind v4 CDN custom tokens"
    - "data-i18n attributes on all visible strings for JS-driven bilingual toggle"
    - "BOOKING_URL_PENDING placeholder with TODO HTML comment for client deliverable"

key-files:
  created:
    - index.html
    - css/styles.css
    - js/main.js
    - images/hero/.gitkeep
    - images/founders/.gitkeep
    - images/school/.gitkeep
  modified: []

key-decisions:
  - "Custom colors defined in @theme block (not tailwind.config.js) — v4 CDN ignores external config files"
  - "css/styles.css linked after Tailwind CDN script so Tailwind loads first"
  - "Mobile menu div placed after </nav> tag with fixed positioning to avoid z-index conflicts"
  - "hero.learnMore key added to translations (not in original interface spec but required by Task 2 secondary CTA)"

patterns-established:
  - "Pattern 1: All visible text nodes use data-i18n='key' — applyLanguage() updates textContent on lang switch"
  - "Pattern 2: Brand palette applied exclusively via Tailwind utility classes — zero default blue/purple/red utilities"
  - "Pattern 3: Section placeholder structure — each section has semantic id, min-h-screen, earthy background variant"

requirements-completed: [DSGN-01, HERO-01]

# Metrics
duration: 2min
completed: 2026-03-05
---

# Phase 1 Plan 01: Project Scaffold Summary

**Tailwind v4 @theme design system with 13 brand color tokens + full-viewport hero section, fixed bilingual nav, and JS translations scaffold — zero build step required**

## Status

CHECKPOINT PAUSED — awaiting human visual verification before proceeding to Plan 02.

## Performance

- **Duration:** ~2 min
- **Started:** 2026-03-05T16:25:37Z
- **Completed (checkpoint):** 2026-03-05T16:27:28Z
- **Tasks:** 2 of 3 complete (checkpoint at Task 3)
- **Files modified:** 6

## Accomplishments

- Established Tailwind v4 CDN @theme block with all 13 color tokens (exact hex values) and 2 font tokens — no default blue/purple/red utilities anywhere
- Built fixed navigation with AC.aballo brand in gold-500, 4 data-i18n wired anchor links, hidden lang-toggle for Phase 2, mobile hamburger with functional toggle
- Delivered full-viewport hero section with earth-900 dark overlay (WCAG contrast), Playfair Display headline, tagline, dual CTAs (gold primary + outlined secondary), and scroll indicator
- Created bilingual JS scaffold with translations for 8 keys in both ES and EN, applyLanguage(), mobile nav toggle with auto-close, and localStorage persistence

## Task Commits

Each task was committed atomically:

1. **Task 1: Create project file structure and design system scaffold** - `185c28e` (chore)
2. **Task 2: Build fixed navigation and hero section** - `40171f0` (feat)
3. **Task 3: Checkpoint: Verify scaffold and hero visual rendering** - PENDING (human-verify)

## Files Created/Modified

- `index.html` - Full HTML5 shell: Tailwind v4 CDN, @theme block, fixed nav, hero section, 5 section placeholders, defer script link
- `css/styles.css` - Custom overrides placeholder with comment header
- `js/main.js` - Bilingual translations object, applyLanguage(), mobile nav toggle, localStorage init
- `images/hero/.gitkeep` - Hero image directory placeholder
- `images/founders/.gitkeep` - Founders image directory placeholder
- `images/school/.gitkeep` - School image directory placeholder

## Decisions Made

- Custom colors in @theme block (not tailwind.config.js) — Tailwind v4 CDN does not read external config files; @theme inside `<style type="text/tailwindcss">` is the v4 CDN pattern
- css/styles.css linked after the Tailwind CDN script so Tailwind initializes first
- Added hero.learnMore key to translations — required by secondary CTA "Conoce Nuestra Filosofia / Discover Our Philosophy" specified in Task 2 but missing from the interface spec

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Added hero.learnMore translation key**
- **Found during:** Task 2 (Build fixed navigation and hero section)
- **Issue:** Task 2 spec required a secondary CTA with data-i18n="hero.learnMore" but the interfaces block did not list this key in the translations
- **Fix:** Added hero.learnMore to both es and en translation objects in js/main.js (ES: "Conoce Nuestra Filosofia", EN: "Discover Our Philosophy")
- **Files modified:** js/main.js
- **Verification:** 12 data-i18n attributes in index.html; applyLanguage() covers all keys
- **Committed in:** 185c28e (Task 1 commit — js/main.js)

---

**Total deviations:** 1 auto-fixed (1 missing critical translation key)
**Impact on plan:** Essential for correctness — the secondary CTA would display blank text without this key. No scope creep.

## Issues Encountered

None — plan executed cleanly. Tailwind v4 CDN @theme pattern worked as expected.

## User Setup Required

None — no external service configuration required for this scaffold.

## Next Phase Readiness

- Plan 02 (content sections) can proceed once checkpoint is approved
- Hero image (images/hero/hero-placeholder.jpg or real photo) can be dropped into images/hero/ at any time
- BOOKING_URL_PENDING must be replaced when client provides booking platform URL
- lang-toggle button (#lang-toggle) is rendered but hidden — Phase 2 will unhide and wire it

---
*Phase: 01-core-site*
*Completed: 2026-03-05*
