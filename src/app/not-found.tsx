import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050508] px-5 py-24 text-zinc-50">
      <section className="mx-auto max-w-xl text-center">
        <p className="section-label mb-4">404</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-zinc-400">
          The page you are looking for does not exist in this portfolio.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back Home
        </Link>
      </section>
    </main>
  );
}
