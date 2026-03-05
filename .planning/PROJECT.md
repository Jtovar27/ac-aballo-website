# AC.aballo Equestrian School Website

## What This Is

A bilingual (English/Spanish) marketing website for AC.aballo, an equestrian school and emotional connection center in Florida. Founded in 2020 by Álvaro Rodríguez Colmenares (45+ years experience, Doma Racional specialist) and Luisana Gallardo Flores, the site communicates the school's philosophy of human development through horses — not just riding — and drives visitors to book or contact the school. Audience: families, children from 11 months, adults, and people with special conditions seeking conscious connection with horses.

## Core Value

A prospective student or family visits the site and immediately understands the school's philosophy and offerings, then takes action — booking a session or reaching out via phone/Instagram.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Hero section with horse photography and a clear headline/tagline
- [ ] Natural Horsemanship philosophy section (core brand identity, own section)
- [ ] About section explaining the school and its approach
- [ ] Services section with 6 cards: Clases de Equitación, Horsemanship & Doma Racional, Interacciones con Caballos, Programas para Niños y Personas con Condición, Cabalgatas, Eventos y Experiencias Especiales
- [ ] Photo gallery showcasing the school and horses
- [ ] Contact section with phone (689-339-6132) and Instagram (@ac.aballo)
- [ ] Booking CTA linking to external booking platform
- [ ] Bilingual EN/ES language toggle
- [ ] Earthy, elegant design: earth tones, soft greens, browns, gold/light blue accents

### Out of Scope

- Backend/database — static site only, no server-side code
- Custom booking system — external platform link only
- User accounts or login — not needed for v1
- Blog or news section — defer to later
- Online payments — handled by external booking platform
- Mobile app — web only

## Context

- Stack: HTML + Tailwind CSS + vanilla JS (no build step, deployable to GitHub Pages or Netlify)
- Real photos of the school and horses are available to use
- Contact: Phone 689-339-6132, Instagram @ac.aballo
- Design tone: calm, natural, earthy, trustworthy, elegant, warm
- Color palette: earth tones, soft greens, browns, gold accents, light blue accents

## Constraints

- **Tech stack**: HTML + Tailwind CSS + vanilla JS — no framework, no build step required
- **Hosting**: Must work on static hosts (GitHub Pages, Netlify, etc.)
- **Language**: Bilingual EN/ES — JS toggle, no server-side i18n
- **Photos**: Real assets available; gallery must handle multiple images gracefully

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| HTML + Tailwind over React | Simpler to host, no build step, sufficient for static marketing site | — Pending |
| External booking tool (not custom) | Avoids backend complexity for v1 | — Pending |
| Bilingual via JS toggle | Static site constraint; toggle is simplest approach without a framework | — Pending |
| Natural Horsemanship as own section | Core brand differentiator, not just a footnote | — Pending |

---
*Last updated: 2026-03-05 after initialization*
