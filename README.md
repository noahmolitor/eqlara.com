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

## Deploying

The site is a static Vite build plus a serverless `/api/interest` function. Deploy on Vercel so that function is available in production.

1. Push the repo to GitHub (or another Git host Vercel can import).
2. In [Vercel](https://vercel.com), import the project. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
3. Add the environment variables from `.env.example` to the Vercel project (Production, and Preview if you want the form to work on preview URLs):

       RESEND_API_KEY
       RESEND_FROM_EMAIL

   `RESEND_FROM_EMAIL` must use a sender address or domain verified in Resend. No mail credential is stored in this repository.
4. Deploy. The production URL will serve the React app; POSTs to `/api/interest` are handled by `api/interest.js`.
5. Attach the custom domain **eqlara.com** (and `www` if you use it) in Vercel → Project → Settings → Domains. Point the DNS records Vercel shows at your registrar.

To publish a local build without Git:

    npx vercel

Production deploy:

    npx vercel --prod

The interest form returns 503 until both Resend variables are set. Static pages still deploy without them.

## Interest form delivery

The interest form posts name, school email, major, and an optional PDF résumé to /api/interest. The endpoint emails the submission to minhqui2401@gmail.com.

## Theme changes

Before changing colors, type, spacing, motion, or component visual behavior, update design.md in the same change. That document is the permanent design contract for the site.
