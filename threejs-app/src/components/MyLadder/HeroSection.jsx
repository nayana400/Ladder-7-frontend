import React, { useEffect, useRef } from "react";
import HeroSectionBackground from "./HeroSectionBackground";


export default function HeroSection() {
  const badgeRef   = useRef(null);
  const headingRef = useRef(null);
  const descRef    = useRef(null);
  const buttonsRef = useRef(null);
  useEffect(() => {
    const items = [
      { el: badgeRef.current,   delay: 0   },
      { el: headingRef.current, delay: 120 },
      { el: descRef.current,    delay: 240 },
      { el: buttonsRef.current, delay: 360 },
    ];

    items.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity   = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity    = "1";
        el.style.transform  = "translateY(0)";
      }, delay);
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#070b1a] via-[#0d0820] to-[#080c1e] flex items-center overflow-hidden px-6 py-20 md:px-10 font-sans">

      {/* ── Ambient glow blobs ── */}
      <div className="pointer-events-none absolute top-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-[5%] right-[5%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.10)_0%,transparent_70%)]" />

      {/* ── 3D Full Background ── */}
      <HeroSectionBackground />


      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col items-center text-center justify-center pointer-events-none">

        {/* Badge */}
        <div
          ref={badgeRef}
          className="mb-8 pointer-events-auto inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/35 bg-indigo-500/15 px-4 py-2 text-xs font-semibold tracking-widest text-indigo-300 backdrop-blur-sm"
        >
          <span className="text-[10px] text-indigo-400">✦</span>
          REACH YOUR PEAK
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="mb-8 pointer-events-auto text-[clamp(48px,8vw,80px)] font-extrabold leading-[1.05] tracking-tight text-white max-w-4xl drop-shadow-lg"
        >
          Climb Your Way to{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Success
          </span>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="mb-10 pointer-events-auto max-w-[600px] text-[16px] md:text-[18px] leading-[1.75] text-slate-300 drop-shadow-md"
        >
          A personalized career development program designed to help you reach
          your professional peaks through structured growth and global
          standards.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          <button
            className="rounded-[10px] bg-gradient-to-br from-indigo-600 to-violet-700 px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_4px_20px_rgba(99,102,241,0.3)] transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)] active:translate-y-0 cursor-pointer"
          >
            Get Started Today
          </button>

          <button
            className="rounded-[10px] border border-white/20 bg-black/20 backdrop-blur-md px-8 py-4 text-sm font-medium tracking-wide text-slate-200 transition-all duration-250 hover:border-white/40 hover:bg-white/[0.08] active:bg-white/[0.04] cursor-pointer"
          >
            View Demo
          </button>
        </div>

      </div>
    </section>
  );
}