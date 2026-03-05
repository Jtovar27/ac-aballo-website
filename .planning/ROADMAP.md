# Roadmap: AC.aballo Equestrian School Website

## Overview

This roadmap delivers a bilingual static marketing website for AC.aballo Equestrian School in two phases. Phase 1 builds and deploys the core site: scaffold, design system, and all primary content sections. Phase 2 completes the experience with the photo gallery and EN/ES language toggle. Both phases together satisfy every v1 requirement.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Core Site** - Scaffold and deploy the site with all primary content sections and design system (completed 2026-03-05)
- [ ] **Phase 2: Gallery + Bilingual** - Add photo gallery and EN/ES language toggle to complete v1

## Phase Details

### Phase 1: Core Site
**Goal**: A visitor can open the live site, read about the school's philosophy and services, and take action by booking or contacting the school
**Depends on**: Nothing (first phase)
**Requirements**: HERO-01, CONT-01, CONT-02, CONT-03, CTCT-01, CTCT-02, DSGN-01
**Success Criteria** (what must be TRUE):
  1. Visitor sees a hero section with horse photography and a headline/tagline immediately on load
  2. Visitor reads a dedicated Doma Racional / emotional connection philosophy section and an About section with founder stories
  3. Visitor sees a Services section with all 6 cards using official names (no "therapy" language)
  4. Visitor can find the school's phone number and Instagram handle in a Contact section
  5. Visitor can click a Booking CTA that opens the external booking platform, and the site uses the earthy/elegant color palette throughout
**Plans**: 2 plans

Plans:
- [ ] 01-01-PLAN.md — Project scaffold: Tailwind v4 @theme design system, fixed nav, full-viewport hero section, bilingual translations scaffold
- [ ] 01-02-PLAN.md — Content sections: Philosophy, About, 6 Services cards, Contact with phone/Instagram/booking CTA, Footer

### Phase 2: Gallery + Bilingual
**Goal**: A visitor can browse real photos of the school and switch the entire site between English and Spanish
**Depends on**: Phase 1
**Requirements**: CONT-04, I18N-01
**Success Criteria** (what must be TRUE):
  1. Visitor browses a photo gallery of real school/horse images that handles multiple images gracefully on all screen sizes
  2. Visitor clicks a language toggle and all site text switches between English and Spanish without a page reload
**Plans**: TBD

Plans:
- [ ] 02-01: Photo gallery — image grid/lightbox using real school photos
- [ ] 02-02: EN/ES toggle — JS-powered language switching across all content sections

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Core Site | 2/2 | Complete   | 2026-03-05 |
| 2. Gallery + Bilingual | 0/2 | Not started | - |
