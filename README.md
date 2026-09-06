# Cinematic Portfolio OS

A cinematic interactive portfolio concept built with React, Vite, TypeScript, Three.js and React Three Fiber.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy

The generated `dist/` folder can be deployed to Vercel, Netlify, EdgeOne Pages, or another static host.

## Customize

Edit project data and text in `src/main.tsx`. Visual styling is in `src/styles.css`.

### Notes

- The contact form is a frontend demo and currently shows an AJAX-like success state without sending to a server.
- Replace the form submit handler with your preferred API endpoint before production.
- Three.js scene uses low geometry/detail and capped DPR for better mobile performance.
