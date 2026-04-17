# Speaking Mirror - Marketing Agency Website

## Original Problem Statement
Build a website for "Speaking Mirror" marketing agency, based in Kolkata with branches in Mumbai & Dubai. The site should be cinematic, colorful, and super minimalistic artistic with animations, using an orange/yellow color palette.

## Pages
- Home, Our Story, Capabilities, The Work, Brands, Contact

## Capabilities/Services
Social Media, SEO, Content Creation, Performance Marketing, Brand Strategy, Influencer Marketing, Branding

## Key Stats
- 500+ Brands, 1000+ Campaigns, 10+ Awards, 98% Satisfaction

## Contact Info
- Email: team@speakingmirror.in
- Phone: +91 9830471770
- Business Hours: Mon - Fri, 10:30 AM - 7:30 PM
- Kolkata: Suites 202 & 203, Jasmine Towers, 31 Shakespeare Sarani, Kolkata - 700017
- Mumbai: Medina Heights, Sherly Rajan Road, Bandra (W), Mumbai - 400050
- Dubai: Villa 14, Aldea Courtyard 12, Area: Wadi Al Safa 5, The Villas, Dubai

## What's Been Implemented
1. Full 6-page frontend (Home, Our Story, Capabilities, The Work, Brands, Contact)
2. Orange/yellow brand palette with floating geometric shape animations on all hero sections
3. Race intro animation (RaceIntro.jsx) with skip button
4. Contact form backend API (POST /api/contact) saving to MongoDB
5. New SM.png logo on header and footer
6. 15 real team members with tuned image cropping
7. 8 real office images in carousel with auto-scroll + manual arrows
8. 6 real portfolio projects with detail pages:
    - Atharv Healthcare (Branding)
    - The Hungry Guests (Content Creation) — YouTube embeds
    - India Restaurant (Influencer Marketing) — Instagram reel previews
    - Zuhni Ethnic (Social Media)
    - Synapse Conclave / Lucid Lines Productions (Performance Marketing)
    - Confidential Client (SEO & Reputation Management) — full case study
9. 6 real client testimonials in horizontal scroll
10. 14 real brand logos in auto-scrolling marquee
11. Industries We Serve: 8 pill tags including Food & Beverage, Corporate & Industrial Houses
12. Why Brands Choose Us: 6 cards including Flexibility, Turnaround Time
13. Our Values: 6 values including Flexibility, Turnaround Time
14. Capabilities page: single dark grid section, 7th box centered
15. Homepage "What We Do": minimal dark pill tags
16. Homepage Featured Work: Synapse Conclave, Zuhni Ethnic, The Hungry Guests
17. FAQs: 6-month to year-long retainers, pricing dependent on services
18. Floating geometric shapes animation component (FloatingIcons.jsx)
19. WorkDetail pages support: case study sections, insight quotes, ongoing work, YouTube embeds, Instagram reel previews

## Tech Stack
- Frontend: React, TailwindCSS, lucide-react, Shadcn UI, axios
- Backend: FastAPI, Motor (async MongoDB), Pydantic
- Database: MongoDB

## API Endpoints
- GET /api/ - Health check
- POST /api/contact - Submit contact form (saves to MongoDB)
- POST /api/status - Create/get status checks

## Pending / Backlog
- P0: Resend email integration (user to provide API key)
- P2: Content management CRUD APIs (Admin Panel)
- P2: SEO meta tags & Open Graph configurations
- P2: Floating WhatsApp chat button
- P2: Refactor Home.jsx into smaller components (~590 lines)

## Architecture
```
/app
├── backend/
│   ├── server.py
│   ├── tests/test_api.py
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/ (Header, Footer, ParticleBackground, RaceIntro, FloatingIcons, ui/)
│   │   ├── pages/ (Home, OurStory, Capabilities, TheWork, WorkDetail, Brands, Contact)
│   │   ├── data/mock.js
│   │   ├── App.js, App.css, index.css
│   └── .env
├── memory/PRD.md
└── test_reports/iteration_1.json
```
