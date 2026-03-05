---
phase: 01-core-site
plan: 02
subsystem: ui
tags: [html, tailwind, i18n, bilingual, single-page]

# Dependency graph
requires:
  - phase: 01-core-site plan 01
    provides: index.html scaffold with Hero and Nav, js/main.js with applyLanguage(), Tailwind v4 CDN @theme custom colors, placeholder sections for Philosophy/About/Services/Contact/Footer

provides:
  - Philosophy section with Doma Racional content, founder quotes (Álvaro and Luisana), lema filosófico blockquote, and key brand phrase
  - About section with school founding story (Florida, November 2020), family project identity, and 7 values badges
  - Services section with exactly 6 branded service cards (equitacion, horsemanship, interacciones, programas, cabalgatas, eventos) — zero therapy/terapia language
  - Contact section with phone tel:6893396132, Instagram @ac.aballo, and Booking CTA with BOOKING_URL_PENDING placeholder
  - Footer with brand name, tagline, nav links, and copyright
  - Expanded js/main.js translations covering all new section strings in ES and EN (63 data-i18n attributes total across site)

affects: [02-seo-launch, any phase consuming index.html content]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - data-service attribute on service cards for JS targeting and filtering
    - Earthy palette (earth-*, sage-*, gold-*) enforced throughout all new sections — no default Tailwind blue/purple/red
    - data-i18n keys namespaced by section (philosophy.*, about.*, services.{key}.*, contact.*, footer.*)

key-files:
  created: []
  modified:
    - index.html
    - js/main.js

key-decisions:
  - "Service cards use data-service attribute with short keys (equitacion, horsemanship, interacciones, programas, cabalgatas, eventos) for future JS targeting"
  - "Booking URL left as BOOKING_URL_PENDING with TODO comment — client deliverable, avoids backend dependency"
  - "Contact section uses dark bg-earth-900 background to create visual contrast and CTA prominence"
  - "Founder photo img tags include bg-earth-400 fallback class for missing images — graceful degradation"

patterns-established:
  - "Section structure: label (text-sm uppercase tracking-widest) → h2 (font-serif) → body content — consistent across Philosophy, About, Services, Contact"
  - "Service cards: bg-white rounded-2xl p-6 shadow-sm border border-earth-100 hover:shadow-md transition-shadow with data-service and data-i18n on name/desc"
  - "Contact links: flex items-center gap-3 text-gold-500 hover:text-gold-200 transition-colors pattern for interactive brand elements"

requirements-completed: [CONT-01, CONT-02, CONT-03, CTCT-01, CTCT-02]

# Metrics
duration: ~10min
completed: 2026-03-05
---

# Phase 1 Plan 02: Site Content Sections Summary

**Philosophy, About, 6-service grid, Contact with phone/Instagram/booking CTA, and Footer added to index.html with 63 data-i18n attributes for full bilingual coverage**

## Performance

- **Duration:** ~10 min
- **Started:** 2026-03-05T16:31:15Z
- **Completed:** 2026-03-05T16:37:55Z
- **Tasks:** 3 (2 auto + 1 checkpoint)
- **Files modified:** 2

## Accomplishments
- Built Philosophy section with Doma Racional copy, styled founder quotes for Álvaro and Luisana, lema filosófico blockquote, and key brand phrase
- Built About section with school founding story (Florida, November 2020), family identity, and 7 values badges
- Built Services section with exactly 6 branded service cards using official BRAND.md names — zero therapy/terapia occurrences
- Built Contact section with clickable phone and Instagram links plus gold Booking CTA with BOOKING_URL_PENDING placeholder
- Built Footer with brand name, tagline, nav links, and copyright
- Expanded js/main.js translations object with all new keys covering all 5 new sections in ES and EN

## Task Commits

Each task was committed atomically:

1. **Task 1: Build Philosophy, About, and Services sections** - `2f6a5ba` (feat)
2. **Task 2: Build Contact section, Booking CTA, and Footer** - `2f6a5ba` (feat — combined with Task 1)
3. **Task 3: Checkpoint — Verify complete site content and brand compliance** - `8599cef` (chore — human-approved)

**Plan metadata:** (docs commit follows)

## Files Created/Modified
- `index.html` - Added Philosophy, About, Services (6 cards), Contact, and Footer sections after the Hero; all visible strings have data-i18n attributes; earthy palette throughout
- `js/main.js` - Expanded translations.es and translations.en with all new section keys: philosophy.*, about.*, about.values.*, services.heading, services.subtitle, services.{key}.name, services.{key}.desc for 6 services, contact.*, footer.*

## Decisions Made
- Service cards use `data-service` attribute with short keys for future JS targeting or filtering without refactoring HTML
- Booking CTA uses `BOOKING_URL_PENDING` href with a prominent TODO comment — client will supply the booking platform URL before launch, so no backend work was needed
- Contact section uses `bg-earth-900` dark background to create visual section break and draw attention to CTA
- Founder photo `<img>` elements include `bg-earth-400` class as fallback color while actual photos are not yet provided

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Complete single-page site is ready for SEO metadata, Open Graph tags, and launch preparation
- Booking URL must be provided by client before go-live (currently BOOKING_URL_PENDING in Contact section)
- Founder photos (images/founders/alvaro.jpg and images/founders/luisana.jpg) not yet provided — bg-earth-400 fallback renders gracefully
- All 6 service cards, bilingual toggle, and contact links are fully functional

---
*Phase: 01-core-site*
*Completed: 2026-03-05*
