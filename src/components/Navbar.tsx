"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

const SECTION_ORDER: { id: string; navKey: (typeof navLinks)[number]["key"] }[] =
  [
    { id: "home", navKey: "home" },
    { id: "about", navKey: "home" },
    { id: "journey", navKey: "home" },
    { id: "skills", navKey: "home" },
    { id: "proof", navKey: "home" },
    { id: "projects", navKey: "projects" },
    { id: "contact", navKey: "contact" },
  ];

function getActiveFromScroll(): (typeof navLinks)[number]["key"] {
  if (typeof window === "undefined") return "home";

  const marker = window.scrollY + window.innerHeight * 0.32;
  let active: (typeof navLinks)[number]["key"] = "home";

  for (const { id, navKey } of SECTION_ORDER) {
    const el = document.getElementById(id);
    if (el && marker >= el.offsetTop) {
      active = navKey;
    }
  }

  return active;
}

function scrollToHash(href: string) {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [active, setActive] = useState<(typeof navLinks)[number]["key"]>(() =>
    getActiveFromScroll()
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const syncActive = useCallback(() => {
    setActive(getActiveFromScroll());
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(syncActive);
    window.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, [syncActive]);

  useEffect(() => {
    if (!menuOpen) return;

    function onPointerDown(e: MouseEvent) {
      const target = e.target as Node | null;
      if (target && !menuRef.current?.contains(target)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    e.preventDefault();
    scrollToHash(href);
    setMenuOpen(false);
    requestAnimationFrame(syncActive);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ${
        scrolled
          ? "border-white/[0.10] bg-[#050508]/82 shadow-[0_18px_48px_-28px_rgba(0,0,0,0.85)]"
          : "border-white/[0.06] bg-[#050508]/58"
      }`}
    >
      <nav
        className={`page-gutter relative mx-auto flex max-w-6xl items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
        aria-label="Main"
      >
        <Link
          href="#home"
          scroll={false}
          onClick={(e) => handleNavClick(e, "#home")}
          className="group inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-zinc-50 transition hover:text-white"
        >
          <span
            className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.7)] transition group-hover:bg-cyan-200"
            aria-hidden
          />
          {siteConfig.shortName}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex lg:gap-10">
          {navLinks.map(({ href, key, label }) => {
            const isActive = active === key;

            return (
              <li key={href}>
                <Link
                  href={href}
                  scroll={false}
                  onClick={(e) => handleNavClick(e, href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-1.5 py-2 font-mono text-[13px] font-medium tracking-wide transition ${
                    isActive
                      ? "text-violet-300"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {label}
                  {isActive ? (
                    <span
                      className="absolute inset-x-2 -bottom-0.5 h-px rounded-full bg-violet-300/70"
                      aria-hidden
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`mailto:${siteConfig.email}?subject=Resume request from portfolio`}
            className="btn-glass px-4 py-2.5 text-[13px]"
          >
            Resume
          </a>
          <Link
            href="#contact"
            scroll={false}
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary px-4 py-2.5 text-[13px]"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.02] text-zinc-100 transition hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div aria-hidden className="space-y-1">
            <div
              className={`h-[2px] w-5 rounded bg-zinc-200 transition ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <div
              className={`h-[2px] w-5 rounded bg-zinc-200 transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-[2px] w-5 rounded bg-zinc-200 transition ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {menuOpen ? (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="absolute left-5 right-5 top-full mt-3 rounded-2xl border border-white/[0.10] bg-[#050508]/94 p-2.5 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:left-6 sm:right-6 lg:hidden"
            role="dialog"
            aria-label="Navigation menu"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, key, label }) => {
                const isActive = active === key;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      scroll={false}
                      onClick={(e) => handleNavClick(e, href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 font-mono text-[13px] font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 ${
                        isActive
                          ? "bg-violet-500/10 text-violet-200"
                          : "text-zinc-300 hover:bg-white/[0.06] hover:text-zinc-100"
                      }`}
                    >
                      <span>{label}</span>
                      {isActive ? (
                        <span aria-hidden className="text-[11px] text-violet-300">
                          Active
                        </span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-2 grid grid-cols-1 gap-2 border-t border-white/10 pt-3">
              <a
                href={`mailto:${siteConfig.email}?subject=Resume request from portfolio`}
                className="btn-glass w-full rounded-xl py-3 text-[13px]"
              >
                Request Resume
              </a>
              <Link
                href="#contact"
                scroll={false}
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-primary w-full rounded-xl py-3 text-[13px]"
              >
                Contact Sayan
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
