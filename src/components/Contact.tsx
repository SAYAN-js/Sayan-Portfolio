"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle"
  );

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      setCopyState("failed");
      window.setTimeout(() => setCopyState("idle"), 1500);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      name ? `Portfolio message from ${name}` : "Portfolio contact"
    );
    const body = encodeURIComponent(
      [
        name && `Name: ${name}`,
        email && `Reply-to: ${email}`,
        "",
        message || "(No message)",
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <FadeInSection
      id="contact"
      aria-labelledby="contact-heading"
      className="section-frame page-gutter"
    >
      <div className="section-inner-contact">
        <div className="section-heading-wrap space-y-4">
          <h2 id="contact-heading" className="section-label">
            Contact
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg font-medium leading-8 tracking-tight text-zinc-100 sm:text-xl">
            Have an internship, SDE opportunity, or project conversation? Send
            a concise note and I will follow up.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="glass-panel-strong flex h-full min-h-0 flex-col justify-between rounded-2xl p-6 sm:p-8">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Direct
            </h3>
            <dl className="mt-8 space-y-6 text-sm sm:text-base">
              <div>
                <dt className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Name
                </dt>
                <dd className="text-lg font-semibold tracking-tight text-zinc-50">
                  {siteConfig.name}
                </dd>
              </div>
              <div>
                <dt className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Email
                </dt>
                <dd className="break-all">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-violet-300 underline-offset-4 transition hover:text-violet-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Phone
                </dt>
                <dd>
                  <a
                    href={siteConfig.phoneHref}
                    className="font-medium text-violet-300 underline-offset-4 transition hover:text-violet-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                  >
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-glass w-full rounded-xl py-3 text-[13px]"
              >
                {copyState === "copied"
                  ? "Email Copied"
                  : copyState === "failed"
                    ? "Copy Failed"
                    : "Copy Email"}
              </button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-primary w-full rounded-xl py-3 text-[13px]"
              >
                Open Email App
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=Portfolio follow-up`}
                className="btn-glass w-full rounded-xl py-3 text-[13px]"
              >
                Schedule a Call
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=Project discussion`}
                className="btn-glass w-full rounded-xl py-3 text-[13px]"
              >
                Discuss a Project
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-panel-strong flex h-full min-h-0 flex-col rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-1 flex-col gap-5 sm:gap-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input-glass w-full px-4 py-3.5 text-base text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-violet-400/45 focus:ring-2 focus:ring-violet-500/20 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-glass w-full px-4 py-3.5 text-base text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-violet-400/45 focus:ring-2 focus:ring-violet-500/20 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="input-glass min-h-[8rem] w-full flex-1 resize-y px-4 py-3.5 text-base text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-violet-400/45 focus:ring-2 focus:ring-violet-500/20 sm:min-h-[9rem] sm:text-sm"
                  placeholder="Tell me about your project or idea"
                />
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="btn-primary mt-8 h-12 w-full sm:w-auto sm:self-start sm:px-10"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </FadeInSection>
  );
}
