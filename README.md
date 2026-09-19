# Eqlara

Eqlara’s marketing site is a Vite + React application. Page features are deliberately separated so new work stays isolated and easy to maintain.

## Structure

- src/components/ — one component per page feature
- src/styles/index.css — global tokens, themes, layout, and component styles
- src/App.jsx — page composition and site-wide state
- api/interest.js — secure interest-form email delivery endpoint
- design.md — the source of truth for visual direction and theme changes

## Local development

    npm install
    npm run dev

## Interest form delivery

The interest form posts name, school email, major, and an optional PDF résumé to /api/interest. The endpoint emails the submission to minhqui2401@gmail.com.

Deploy to Vercel (or adapt the endpoint to another serverless provider), then configure the two variables in .env.example. Resend requires a verified sender address/domain; no mail credential is stored in this repository.

## Theme changes

Before changing colors, type, spacing, motion, or component visual behavior, update design.md in the same change. That document is the permanent design contract for the site.
