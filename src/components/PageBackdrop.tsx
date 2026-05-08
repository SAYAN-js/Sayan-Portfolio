export function PageBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute -top-[35%] left-1/2 h-[min(90vh,900px)] w-[min(140vw,1400px)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(124,58,237,0.22),transparent_65%)]" />
      <div className="absolute -bottom-[10%] right-[-15%] h-[min(70vh,700px)] w-[min(90vw,900px)] rounded-[100%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.09),transparent_65%)]" />
      <div className="absolute left-[-20%] top-[38%] h-[55vh] w-[55vw] max-w-[640px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_45%,rgba(5,5,8,0.92)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(5,5,8,0.65)_0%,transparent_100%)]" />
    </div>
  );
}
