# PRD - G.J. Interiors Design Studio Website

## Original Problem Statement
G.J.INTERIORS DESIGN STUDIO make a website with anemation

## Confirmed User Choices
- Goal: Both inquiries + portfolio
- Visual style: Bold modern (dark, cinematic)
- Sections: Full business website
- Motion: High-impact cinematic animations

## Architecture Decisions
- Frontend: React single-page marketing site with modular section components.
- Styling: Tailwind + custom cinematic CSS effects + custom typography (Playfair Display + Manrope).
- Motion: Framer Motion for staggered reveal and hero entrance animations.
- Backend: FastAPI with MongoDB persistence for inquiry submissions.
- API Contract: `POST /api/inquiries` and `GET /api/inquiries` using Pydantic models and Mongo-safe serialization (excluding `_id`).

## What Has Been Implemented
- Cinematic one-page website with sections: Hero, About, Services, Portfolio (bento layout), Process, Testimonials, Contact, Footer.
- Sticky animated navbar with smooth scrolling to section anchors.
- High-impact visual treatment: atmospheric overlays, grain, glow layers, sharp-edge premium UI patterns.
- Fully functional inquiry form integrated to backend API and MongoDB.
- New inquiry backend endpoints with validation (`EmailStr`) and timestamp handling.
- Added comprehensive `data-testid` attributes on interactive and key user-facing elements.
- Installed and used `framer-motion`; reused existing `lucide-react` icons.
- Automated backend and frontend validation completed successfully.
- Added Instagram handle/link in Contact section and Footer: `@g.j._interiors_design_studio`.
- Updated portfolio messaging to align with Instagram-driven project showcase direction and added direct profile CTA.
- Added logo-ready structure in Navbar and Footer (`logoUrl` config) so uploaded logo can be plugged in instantly.
- Replaced contact details with provided business info (phone, email, full Navsari address) and added WhatsApp click-to-chat link.
- Fixed Instagram link behavior by using canonical URL with trailing slash and direct navigation (verified click flow reaches Instagram login/profile path).
- Added dedicated floating Instagram icon button at right-center for better social engagement and tested click navigation.
- Integrated SendGrid email notification workflow: every new inquiry now sends an email alert to `g.j.interiornavsari@gmail.com` while still saving inquiry data in MongoDB even if email fails.

## Prioritized Backlog
### P0
- Add admin-safe inquiry dashboard for studio team to review incoming leads.
- Add spam protection/rate limiting to inquiry form endpoint.
- Connect final uploaded brand logo asset to `brandConfig.logoUrl`.

### P1
- Add project detail modal pages with before/after storytelling.
- Add WhatsApp quick-contact CTA and calendar booking embed.

### P2
- Add CMS-like editable content blocks for non-technical updates.
- Add multilingual support and SEO metadata enhancements.

## Next Tasks
1. Build a lightweight inquiry management view for internal team use.
2. Add advanced form validation UX (inline errors, field-level feedback).
3. Add conversion analytics events for CTA clicks and form completion.
