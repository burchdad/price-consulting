"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const caseBriefs = [
  {
    id: "01",
    title: "Portfolio Stabilization",
    mission: "Civilian mission support portfolio facing schedule slippage and fragmented reporting.",
    actions:
      "Established executive governance rhythm, re-baselined interdependent workstreams, and standardized decision briefing formats.",
    result: "Restored portfolio predictability with a 29% reduction in milestone variance within two quarters."
  },
  {
    id: "02",
    title: "Modernization Tempo Recovery",
    mission: "Enterprise modernization program delayed by cross-team dependency bottlenecks.",
    actions:
      "Introduced phased sequencing model, risk triage checkpoints, and integrated program management controls.",
    result: "Improved delivery velocity by 34% while increasing leadership confidence in release commitments."
  },
  {
    id: "03",
    title: "Acquisition Readiness Brief",
    mission: "Acquisition team required stronger requirements clarity prior to solicitation release.",
    actions:
      "Facilitated requirements alignment sessions, created executive-ready evaluation artifacts, and mapped decision criteria.",
    result: "Reduced pre-award clarification churn by 41% and accelerated solicitation readiness timeline."
  }
];

export default function CaseBriefsPanel() {
  const [active, setActive] = useState(0);
  const brief = caseBriefs[active];

  return (
    <div className="mt-10 overflow-hidden rounded-md border border-white/10 bg-[rgba(8,20,32,0.92)]">
      {/* Mobile: stacked tabs + collapsed detail */}
      <div className="block md:hidden">
        {caseBriefs.map((b, i) => (
          <div key={b.id} className="border-b border-white/10 last:border-b-0">
            <button
              onClick={() => setActive(active === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
              style={{
                background: active === i ? "rgba(20,184,166,0.06)" : "transparent"
              }}
            >
              <span className="flex items-center gap-3">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: active === i ? "rgba(20,184,166,1)" : "rgba(20,184,166,0.4)" }}
                >
                  [{b.id}]
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: active === i ? "#f8fafc" : "#94a3b8" }}
                >
                  {b.title}
                </span>
              </span>
              <span
                className="text-xs transition-transform duration-200"
                style={{
                  color: "rgba(20,184,166,0.5)",
                  transform: active === i ? "rotate(45deg)" : "rotate(0deg)"
                }}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {active === i && (
                <motion.div
                  key="mobile-detail"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.26, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <BriefDetail brief={b} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Desktop: split panel */}
      <div className="hidden md:grid md:grid-cols-[260px_1fr]">
        {/* Left selector */}
        <div className="border-r border-white/10">
          <div className="border-b border-white/10 px-6 py-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-teal/50">
              Case File Index
            </p>
          </div>
          {caseBriefs.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActive(i)}
              className="group relative flex w-full flex-col gap-1 border-b border-white/10 px-6 py-5 text-left transition-colors last:border-b-0"
              style={{
                background: active === i ? "rgba(20,184,166,0.07)" : "transparent"
              }}
            >
              {/* Active teal accent bar */}
              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-[2px] rounded-r-sm transition-all duration-200"
                style={{
                  background: "rgba(20,184,166,0.9)",
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "scaleY(1)" : "scaleY(0.3)"
                }}
              />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors"
                style={{ color: active === i ? "rgba(20,184,166,1)" : "rgba(20,184,166,0.38)" }}
              >
                [{b.id}]
              </span>
              <span
                className="text-sm font-semibold leading-snug transition-colors"
                style={{ color: active === i ? "#f8fafc" : "#94a3b8" }}
              >
                {b.title}
              </span>
              {/* Hover dot */}
              <span
                className="absolute right-4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-teal/50 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                style={{ opacity: active === i ? 0 : undefined }}
              />
            </button>
          ))}
        </div>

        {/* Right detail panel */}
        <div className="relative min-h-[340px] overflow-hidden">
          {/* Scanning line */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(20,184,166,0.18), transparent)" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <BriefDetail brief={brief} desktop />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function BriefDetail({
  brief,
  desktop = false
}: {
  brief: (typeof caseBriefs)[number];
  desktop?: boolean;
}) {
  return (
    <div className={desktop ? "px-10 py-9" : "px-6 pb-6"}>
      {/* Dossier header */}
      <div className={`flex items-center gap-3 ${desktop ? "" : "pt-1"}`}>
        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-teal/60">
          Anonymized Case Brief
        </p>
        <span className="h-px flex-1 bg-white/10" />
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/20">
          Ref [{brief.id}]
        </p>
      </div>
      <h3 className="mt-4 font-serif text-2xl font-semibold uppercase leading-tight tracking-[0.03em] text-white md:text-3xl">
        {brief.title}
      </h3>

      {/* Divider */}
      <div className="my-6 flex items-center gap-2">
        <span className="h-px w-5 bg-teal/40" />
        <span className="h-px flex-1 bg-white/08" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* Sections */}
      <div className="space-y-6">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-teal/70">
            Mission Context
          </p>
          <p className="text-sm leading-7 text-slate-400">{brief.mission}</p>
        </div>
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-teal/70">
            Advisory Actions
          </p>
          <p className="text-sm leading-7 text-slate-400">{brief.actions}</p>
        </div>
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-teal/70">
            Measured Result
          </p>
          <p className="text-sm leading-7 text-teal/90">{brief.result}</p>
        </div>
      </div>
    </div>
  );
}
