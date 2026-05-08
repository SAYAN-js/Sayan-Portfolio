# Sayan Chowdhury Portfolio

Production-ready portfolio for Sayan Chowdhury, built with the Next.js App Router, React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Current Features

- Responsive one-page portfolio with hero, about, journey, skills, proof highlights, projects, contact, and footer sections.
- Accessible fixed navigation with smooth in-page links, mobile menu, keyboard escape handling, and skip-to-content link.
- Contact workflow with mailto form submission, copy-email fallback state, phone link, resume request, call request, and project discussion actions.
- Reduced-motion-aware section and button animations powered by Framer Motion.
- SEO basics with title templates, meta description, canonical URL, favicon, generated Open Graph image, robots route, and sitemap route.
- App Router safety screens for loading, not-found, and runtime error states.
- Centralized site, navigation, project, and skill data in `src/lib/site.ts`.
- No build-time Google Fonts network dependency; the UI uses fast system font stacks.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- ESLint flat config with Next.js core web vitals rules

## Folder Structure

```text
src/
  app/
    error.tsx
    favicon.ico
    globals.css
    layout.tsx
    loading.tsx
    not-found.tsx
    opengraph-image.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    motion/
      FadeInSection.tsx
      MotionLink.tsx
    About.tsx
    Contact.tsx
    Hero.tsx
    Journey.tsx
    Navbar.tsx
    PageBackdrop.tsx
    Projects.tsx
    ProofHighlights.tsx
    SiteFooter.tsx
    Skills.tsx
  lib/
    site.ts
```

## Environment Variables

Copy `.env.example` to `.env.local` for local development.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Set `NEXT_PUBLIC_SITE_URL` to the final production domain so canonical, robots, sitemap, and metadata URLs are correct.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

Vercel is the best fit for this Next.js app.

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Add `NEXT_PUBLIC_SITE_URL=https://your-production-domain.com`.
5. Deploy.

Netlify also supports this app through its Next.js runtime:

1. Import the repository in Netlify.
2. Use `npm run build` as the build command.
3. Add `NEXT_PUBLIC_SITE_URL=https://your-production-domain.com`.
4. Deploy.

## Known Limitations

- Project source links are not published in the UI because verified public repository URLs were not available in the workspace.
- The contact form uses the visitor's email client via `mailto:` instead of a server-side email API.
- GitHub Pages is not the recommended target because this project is a Next.js app. A static export could be added later if GitHub Pages becomes required.

## Future Improvements

- Add verified GitHub and live-demo URLs for each project.
- Replace the mailto workflow with a server action or API route backed by an email provider.
- Add analytics after deployment and use real performance or engagement metrics.
- Add end-to-end browser tests once a browser automation dependency is part of the project.
