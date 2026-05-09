import { CursorLight } from "./motion/CursorLight";

export function PageBackdrop() {
  return (
    <>
      <CursorLight />
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[#050508]" />
        
        {/* Refined depth gradients */}
        <div className="absolute -top-[30%] left-1/2 h-[min(100vh,1000px)] w-[min(150vw,1600px)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(124,58,237,0.18),transparent_70%)]" />
        
        <div className="absolute -bottom-[15%] right-[-10%] h-[min(80vh,800px)] w-[min(100vw,1000px)] rounded-[100%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.07),transparent_70%)] opacity-80" />
        
        <div className="absolute left-[-25%] top-[35%] h-[65vh] w-[65vw] max-w-[720px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),transparent_75%)]" />

        {/* Texture/Grain Overlay (Optional but premium) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_50%,rgba(5,5,8,0.95)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(5,5,8,0.7)_0%,transparent_100%)]" />
      </div>
    </>
  );
}
