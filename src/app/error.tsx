"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050508] px-5 py-24 text-zinc-50">
      <section className="mx-auto max-w-xl text-center">
        <p className="section-label mb-4">Error</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Something Went Wrong
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-zinc-400">
          The portfolio could not finish loading. Please try again.
        </p>
        <button type="button" onClick={reset} className="btn-primary mt-8">
          Try Again
        </button>
      </section>
    </main>
  );
}
