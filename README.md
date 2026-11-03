# Muhammad Alsharif — Personal Portfolio

A bilingual (Arabic / English), responsive, multi-page personal portfolio built with React, Vite, React Router (HashRouter for GitHub Pages compatibility), GSAP and Lucide icons.

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

## Deploy to GitHub Pages

This project is configured for the repository URL `https://asmaa-space.github.io/muhammed/` and uses hash-based routing (`/muhammed/#/en`, `/muhammed/#/ar`) so nested pages work on GitHub Pages without server rewrite configuration. If you rename the repository, update `base` in `vite.config.js` to match the new repository path.

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Select **GitHub Actions** as the build and deployment source (do not select Deploy from a branch for this Vite/React source project).
4. Add the workflow below as `.github/workflows/deploy.yml` if you want automatic deployment.

For a custom domain, configure the domain in GitHub Pages and add the required DNS records.

## Content editing

Most profile copy and project information lives in `src/data/content.js`. Update the `profile`, `projects`, `timeline`, and `skills` objects there.

### Important content accuracy note

This starter uses only a small set of details supplied for the project. Some project roles, dates, tools, outcomes and contact information are intentionally marked as requiring confirmation or are omitted. Do not publish unverified achievements, employment dates, email addresses or numerical results.

## Replace the portrait

Replace `public/images/muhammad-profile.png` with the approved portrait, keeping the same filename.

## Contact form

The contact form uses a `mailto:` fallback. Set `profile.email` in `src/data/content.js` to a real, approved email address before publishing. For a server-backed form, connect a service such as Formspree or your own API and replace the `handleSubmit` function in `src/pages/Contact.jsx`.

## Features

- Arabic / English language switcher with RTL / LTR layout.
- Multi-page routing.
- Responsive navigation and layouts.
- Animated hero and scroll reveals.
- Interactive discipline doors.
- Project detail pages.
- Interactive career timeline.
- 3D ability card with mouse / touch-friendly flip interaction.
- Accessible buttons, keyboard-friendly navigation and reduced-motion support.
- Responsive layouts from 320px to large desktop screens.
