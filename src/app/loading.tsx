export default function Loading() {
  return (
    <main className="min-h-screen bg-[#050508] px-5 py-24 text-zinc-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="h-4 w-28 animate-pulse rounded-full bg-white/10" />
        <div className="mt-8 h-16 max-w-2xl animate-pulse rounded-2xl bg-white/10" />
        <div className="mt-4 h-6 max-w-xl animate-pulse rounded-full bg-white/[0.07]" />
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="h-44 animate-pulse rounded-2xl border border-white/10 bg-white/[0.04]" />
          <div className="h-44 animate-pulse rounded-2xl border border-white/10 bg-white/[0.04]" />
          <div className="h-44 animate-pulse rounded-2xl border border-white/10 bg-white/[0.04]" />
        </div>
      </div>
    </main>
  );
}
