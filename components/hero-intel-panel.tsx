"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;

    function tick(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      }
    }

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [target, duration]);

  return count;
}

export default function HeroIntelPanel() {
  const count = useCountUp(15, 1800);

  return (
    <div className="intel-panel group relative overflow-hidden p-8 md:min-h-[430px] md:p-10">
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_10%_20%,rgba(20,184,166,0.2),transparent_30%),radial-gradient(circle_at_82%_75%,rgba(248,250,252,0.05),transparent_26%)]" />

      {/* Hover-responsive lighting shift */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_78%_16%,rgba(20,184,166,0.22),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Fine grid overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"
        animate={{ backgroundPosition: ["0px 0px, 0px 0px", "22px 10px, 10px 22px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
      />

      {/* Scanning line */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
        style={{ position: "absolute" }}
      />

      {/* Live status indicator */}
      <div className="absolute right-5 top-5 flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60"
            style={{ animationDuration: "2s" }}
          />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal/80" />
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-teal/50">Active</span>
      </div>

      {/* Corner accent marks — tactical UI */}
      <span className="pointer-events-none absolute left-3 top-3 h-2 w-2 border-l border-t border-teal/25" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-2 w-2 border-b border-r border-teal/25" />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal/80">Operational Snapshot</p>
        <h2 className="mt-6 max-w-xl font-serif text-4xl font-semibold uppercase leading-[1] tracking-[0.03em] text-white md:text-5xl">
          Executive support built for sensitive environments.
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate">
          Advisory coverage spanning strategy, modernization controls, and stakeholder-aligned execution rhythm.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-md border border-white/10 bg-navy/60 p-4">
            <p className="font-serif text-3xl font-semibold text-white">
              {count}+
              <span className="ml-1 font-sans text-lg text-teal/70">yrs</span>
            </p>
            <p className="mt-2 text-xs leading-6 text-slate">Federal mission advisory</p>
          </div>
          <div className="rounded-md border border-white/10 bg-navy/60 p-4">
            <p className="font-serif text-3xl font-semibold text-white">
              50+
              <span className="ml-1 font-sans text-lg text-teal/70"></span>
            </p>
            <p className="mt-2 text-xs leading-6 text-slate">Agency initiatives supported</p>
          </div>
        </div>
      </div>
    </div>
  );
}
