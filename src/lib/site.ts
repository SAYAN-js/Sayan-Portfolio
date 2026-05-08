export const siteConfig = {
  name: "Sayan Chowdhury",
  shortName: "Sayan",
  role: "Software Engineer",
  availability: "Available for internship and SDE opportunities from July 2026",
  headline: "Software engineer building reliable full-stack products.",
  subheadline:
    "I turn practical ideas into fast, maintainable web applications with clean UI, typed code, and production-minded delivery.",
  email: "sc634230@gmail.com",
  phone: "+91 73630 40722",
  phoneHref: "tel:+917363040722",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Portfolio of Sayan Chowdhury, a software engineer building full-stack web applications with Next.js, TypeScript, React, and modern backend fundamentals.",
  keywords: [
    "Sayan Chowdhury",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Full-stack Developer",
    "Portfolio",
  ],
} as const;

export const navLinks = [
  { href: "#home", key: "home", label: "Home" },
  { href: "#projects", key: "projects", label: "Projects" },
  { href: "#contact", key: "contact", label: "Contact" },
] as const;

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "A recruiter-focused portfolio rebuilt as a polished production site with responsive sections, SEO metadata, route safety, and deployment checks.",
    status: "Shipped",
    focus: "Production UI",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    sourceLabel: "Current repository",
    proof: "Verified with lint, typecheck, production build, and local HTTP checks.",
    highlights: [
      "Built modular profile, timeline, skills, proof, projects, and contact sections.",
      "Added accessible navigation, reduced-motion support, metadata routes, and error states.",
      "Kept the build static, fast, and ready for Vercel or Netlify deployment.",
    ],
  },
  {
    title: "Calculator App",
    description:
      "An interactive calculator project focused on predictable input handling, operator sequencing, and clear error states for invalid operations.",
    status: "Completed",
    focus: "State logic",
    stack: ["React", "TypeScript", "CSS"],
    sourceLabel: "Code available on request",
    proof: "Built to practice edge-case handling and deterministic UI behavior.",
    highlights: [
      "Handled chained operations, reset behavior, keyboard-style flows, and divide-by-zero messaging.",
      "Kept the interface simple and fast for repeated daily use.",
      "Used the project to strengthen state modeling and UI edge-case handling.",
    ],
  },
  {
    title: "Task Manager",
    description:
      "A focused task management project for creating, completing, and filtering tasks while keeping the state model easy to extend.",
    status: "Completed",
    focus: "Product flows",
    stack: ["Next.js", "REST API", "MongoDB", "Auth patterns"],
    sourceLabel: "Code available on request",
    proof: "Structured around clear task lifecycle flows and extension-ready boundaries.",
    highlights: [
      "Structured task lifecycle flows for create, update, complete, and filtered views.",
      "Designed the architecture so persistence and authentication can be expanded cleanly.",
      "Practiced practical product thinking around fast capture and uncluttered planning.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js App Router", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["REST APIs", "Node.js basics", "MongoDB basics", "Auth flows"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "Vercel deployment", "ESLint", "TypeScript checks"],
  },
  {
    title: "Concepts",
    items: ["DSA fundamentals", "Performance optimization", "Clean architecture"],
  },
] as const;
