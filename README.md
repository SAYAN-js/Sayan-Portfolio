# Sayan Chowdhury — Developer Portfolio

A modern, production-ready personal portfolio built with **Next.js App Router**, **React**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

Designed for performance, accessibility, responsiveness, and smooth user experience.

---

## ✨ Features

* Fully responsive single-page portfolio
* Smooth scrolling navigation with mobile support
* Modern animated UI powered by Framer Motion
* Accessible design with keyboard navigation support
* Hero, About, Journey, Skills, Projects, Proof Highlights, Contact, and Footer sections
* SEO-ready setup with:

  * Dynamic metadata
  * Open Graph image generation
  * Sitemap
  * Robots configuration
  * Canonical URLs
* Custom loading, error, and not-found states
* Centralized content management through `src/lib/site.ts`
* System font stack for faster performance and zero external font dependency
* Mailto-based contact workflow with:

  * Email actions
  * Copy email functionality
  * Resume request
  * Call request
  * Project discussion actions

---

## 🛠 Tech Stack

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS v4
* Framer Motion
* ESLint with Next.js Core Web Vitals rules

---

## 📁 Project Structure

```bash
src/
│
├── app/
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── opengraph-image.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── motion/
│   │   ├── FadeInSection.tsx
│   │   └── MotionLink.tsx
│   │
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Journey.tsx
│   ├── Navbar.tsx
│   ├── PageBackdrop.tsx
│   ├── Projects.tsx
│   ├── ProofHighlights.tsx
│   ├── SiteFooter.tsx
│   └── Skills.tsx
│
└── lib/
    └── site.ts
```

---

## ⚙️ Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, replace it with your deployed domain:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This is used for:

* SEO metadata
* Canonical URLs
* Sitemap generation
* Robots configuration
* Open Graph metadata

---

## 🚀 Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## ✅ Quality Checks

Run type checking:

```bash
npm run typecheck
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

---

## 🌐 Deployment

### Recommended: Vercel

1. Push the project to GitHub
2. Import the repository into Vercel
3. Keep the framework preset as **Next.js**
4. Add the environment variable:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

5. Deploy

---

### Alternative: Netlify

1. Import the repository into Netlify
2. Set build command:

```bash
npm run build
```

3. Add the required environment variable
4. Deploy

---

## ⚠️ Current Limitations

* Public GitHub repository links for projects are not yet added
* Contact form currently uses `mailto:` instead of a backend email service
* GitHub Pages is not recommended for this setup because the project uses Next.js App Router

---

## 📌 Planned Improvements

* Add verified GitHub repositories and live project demos
* Replace `mailto:` workflow with a proper backend email solution
* Add analytics and performance monitoring
* Implement end-to-end testing
* Add CMS or markdown-powered project management
* Improve animations and micro-interactions further

---

## 👨‍💻 Author

**Sayan Chowdhury**
Aspiring Software Engineer • AI/ML Enthusiast • Full Stack Developer

Built with focus on clean UI, performance, and scalable architecture.
