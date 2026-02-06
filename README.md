# MyNaughtyVault – App-Ready PWA (Enhanced)

This build is an installable **Progressive Web App** version of your site with:
- Offline caching + faster loads
- “Install App” buttons (Android/desktop prompt + iPhone instructions)
- 18+ age confirmation gate (stored only on the visitor’s device)
- Stronger Netlify security headers (CSP + HSTS + anti-framing, etc.)
- Cleaner structure: CSS/JS split into separate files for performance and maintainability

## Deploy (GitHub → Netlify → Namecheap)
1. Create a GitHub repo (public or private).
2. Upload **everything in this folder** to the repo root.
3. In Netlify: **Add new site → Import from GitHub** → choose the repo.
   - Build command: *(none)*
   - Publish directory: `.`
4. In Netlify → Domain settings → Add your domain.
5. In Namecheap → point DNS to Netlify (Netlify will show the exact records).

## Install on phone
- **Android (Chrome):** open the site → you’ll see *Install App* (or Chrome menu → Install app).
- **iPhone (Safari):** Share icon → *Add to Home Screen*.

## Admin Panel (local-only)
Your “Bethany Admin • Quick Controls” panel still exists, but now it is **PIN-gated**:
- First time you open it (Ctrl+. or 5 footer taps), it will ask you to **set a PIN**.
- After that, it will prompt for the PIN each session.

## Files
- `index.html` – site layout/content
- `styles.css` – site styles
- `app.js` – site logic
- `manifest.webmanifest` – PWA metadata
- `service-worker.js` – offline caching
- icons + favicons
- `netlify.toml` – redirects + security/caching headers
