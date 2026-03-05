---
phase: 1
slug: core-site
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-05
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — static HTML site; validation is manual checklist + browser tooling |
| **Config file** | none |
| **Quick run command** | `open index.html` (visual inspect in browser) |
| **Full suite command** | `python3 -m http.server 8080` then run manual checklist below |
| **Estimated runtime** | ~5 minutes |

---

## Sampling Rate

- **After every task commit:** Open `index.html` and visually verify the changed section
- **After every plan wave:** Run full checklist (all grep commands + visual audit)
- **Before `/gsd:verify-work`:** Full checklist must be green
- **Max feedback latency:** ~5 minutes

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | DSGN-01 | visual | `grep -i "bg-blue\|bg-purple\|bg-red" index.html` (expect 0) | Wave 0 | ⬜ pending |
| 1-01-02 | 01 | 1 | HERO-01 | smoke | `open index.html` — hero visible on load | Wave 0 | ⬜ pending |
| 1-02-01 | 02 | 1 | CONT-01 | content | `grep -i "doma racional" index.html && grep -i "Álvaro" index.html` | Wave 0 | ⬜ pending |
| 1-02-02 | 02 | 1 | CONT-02 | content | `grep -i "about\|nosotros" index.html` | Wave 0 | ⬜ pending |
| 1-02-03 | 02 | 1 | CONT-03 | content | `grep -c "data-service" index.html` (expect 6); `grep -i "therap\|terapi" index.html` (expect 0) | Wave 0 | ⬜ pending |
| 1-02-04 | 02 | 1 | CTCT-01 | smoke | `grep "689-339-6132" index.html && grep "ac.aballo" index.html` | Wave 0 | ⬜ pending |
| 1-02-05 | 02 | 1 | CTCT-02 | smoke | `grep -i "booking" index.html` | Wave 0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `index.html` — main HTML file with all sections scaffolded
- [ ] Tailwind v4 CDN script included (`@tailwindcss/browser@4`)
- [ ] `data-i18n` attributes on all visible strings (bilingual scaffold for Phase 2)

*Wave 0 creates the file; all grep-based verifications target `index.html`.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Hero photo visible and fills viewport | HERO-01 | Visual — image render can't be grepped | Open in browser, confirm hero image loads and covers hero area |
| Earthy color palette applied throughout | DSGN-01 | Visual — subjective design check | Confirm earth tones, no default Tailwind blue/purple; check buttons, backgrounds, headings |
| WCAG contrast on text/background pairs | DSGN-01 | Accessibility — requires browser tooling | Use DevTools → Accessibility panel or axe extension; confirm 4.5:1 on body text |
| Booking CTA opens correct URL | CTCT-02 | URL unknown (client deliverable) | Confirm href is set (not "#") when URL is provided; placeholder TODO comment visible in code |
| `data-i18n` on every visible string | I18N-01 prep | Count check only — content accuracy requires review | `grep -c "data-i18n" index.html` then scan manually for any hardcoded visible text without attribute |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 5 minutes
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
