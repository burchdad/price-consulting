"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Capability = {
  id: string;
  title: string;
  description: string;
  impact: string;
  label: string;
};

const capabilities: Capability[] = [
  {
    id: "01",
    label: "Advisory Domain 01",
    title: "Mission Strategy and Governance",
    description:
      "Executive-level strategy alignment, governance cadence design, and portfolio decision support for high-visibility programs.",
    impact:
      "Reduce strategic drift, sharpen decision traceability, and sustain leadership confidence across competing program priorities."
  },
  {
    id: "02",
    label: "Advisory Domain 02",
    title: "Modernization and Delivery Control",
    description:
      "Transformation sequencing, dependency management, and delivery risk controls for enterprise modernization portfolios.",
    impact:
      "Compress delivery timelines, cut schedule variance, and give stakeholders a credible and defensible modernization posture."
  },
  {
    id: "03",
    label: "Advisory Domain 03",
    title: "Acquisition and Mission Integration",
    description:
      "Acquisition alignment, PMO operating structure, and mission partner integration across prime and government teams.",
    impact:
      "Reduce procurement delays, strengthen awardability, and improve downstream execution outcomes before money is obligated."
  },
  {
    id: "04",
    label: "Advisory Domain 04",
    title: "Cyber and Compliance Readiness",
    description:
      "Compliance-informed execution support aligned to federal security frameworks and audit-ready operating practices.",
    impact:
      "Harden delivery posture against compliance failures and enable controlled, audit-ready program execution under scrutiny."
  }
];

export default function CapabilityConsole() {
  const [active, setActive] = useState(0);
  const selected = capabilities[active];

  return (
    <div className="mt-10 overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(8,20,32,0.94),rgba(6,16,26,0.92))]">
      <div className="block md:hidden">
        {capabilities.map((capability, index) => (
          <MobileCapabilityRow
            key={capability.id}
            capability={capability}
            open={active === index}
            onToggle={() => setActive(active === index ? -1 : index)}
            index={index}
          />
        ))}
      </div>

      <div className="hidden md:grid md:grid-cols-[330px_1fr]">
        <div className="border-r border-white/10 bg-[rgba(3,12,20,0.45)]">
          <div className="border-b border-white/10 px-6 py-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-teal/55">Command Domain Index</p>
          </div>
          {capabilities.map((capability, index) => (
            <button
              key={capability.id}
              onClick={() => setActive(index)}
              className="group relative w-full border-b border-white/10 px-6 py-5 text-left transition-colors last:border-b-0"
              style={{ background: active === index ? "rgba(20,184,166,0.08)" : "transparent" }}
            >
              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-[2px] rounded-r-sm transition-all duration-200"
                style={{
                  background: "rgba(20,184,166,0.95)",
                  opacity: active === index ? 1 : 0,
                  transform: active === index ? "scaleY(1)" : "scaleY(0.35)"
                }}
              />
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: active === index ? "rgba(20,184,166,1)" : "rgba(20,184,166,0.4)" }}
              >
                [{capability.id}] {capability.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-white/90 transition-colors group-hover:text-white">
                {capability.title}
              </p>
              <span className="absolute right-4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-teal/55 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </div>

        <div className="relative min-h-[430px] overflow-hidden">
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/35 to-transparent"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 1.4 }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="grid h-full md:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="p-8 md:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal/75">{selected.label}</p>
                <h3 className="mt-4 max-w-2xl font-serif text-3xl font-semibold uppercase leading-[1.05] tracking-[0.02em] text-white md:text-5xl">
                  {selected.title}
                </h3>
                <p className="mt-6 max-w-xl text-sm leading-7 text-slate md:text-base md:leading-8">
                  {selected.description}
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/70">Why It Matters</p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate/90 md:text-base md:leading-8">{selected.impact}</p>
                </div>
              </div>
              <div className="border-t border-white/10 p-7 md:border-l md:border-t-0 md:p-8">
                <CapabilityVisual variant={active} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function MobileCapabilityRow({
  capability,
  open,
  onToggle,
  index
}: {
  capability: Capability;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        style={{ background: open ? "rgba(20,184,166,0.07)" : "transparent" }}
      >
        <span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/65">[{capability.id}]</span>
          <span className="mt-2 block text-sm font-semibold text-white">{capability.title}</span>
        </span>
        <span
          className="text-xs text-teal/70 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-sm leading-7 text-slate">{capability.description}</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/70">Why It Matters</p>
                <p className="mt-2 text-sm leading-7 text-slate/90">{capability.impact}</p>
              </div>
              <div className="mt-5 h-[170px]">
                <CapabilityVisual variant={index} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CapabilityVisual({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <div className="relative h-full overflow-hidden rounded-md border border-white/10 bg-[rgba(3,12,20,0.56)] p-4">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-45" />
        <div className="relative grid h-full place-items-center">
          <svg className="h-full w-full" viewBox="0 0 120 90" aria-hidden="true">
            <motion.circle cx="18" cy="20" r="4" fill="rgba(20,184,166,0.95)" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.4, repeat: Infinity }} />
            <motion.circle cx="54" cy="38" r="4" fill="rgba(20,184,166,0.85)" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.1, repeat: Infinity, delay: 0.2 }} />
            <motion.circle cx="94" cy="22" r="4" fill="rgba(20,184,166,0.9)" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.9, repeat: Infinity, delay: 0.4 }} />
            <motion.circle cx="86" cy="66" r="4" fill="rgba(20,184,166,0.8)" animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }} />
            <motion.path d="M18 20 L54 38 L94 22 L86 66" stroke="rgba(20,184,166,0.65)" strokeWidth="1.6" fill="none" strokeDasharray="160" initial={{ strokeDashoffset: 160 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === 1) {
    return (
      <div className="relative h-full overflow-hidden rounded-md border border-white/10 bg-[rgba(3,12,20,0.56)] p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(20,184,166,0.16),transparent_35%)]" />
        <svg className="relative h-full w-full" viewBox="0 0 120 90" aria-hidden="true">
          <motion.polyline
            points="8,76 28,64 48,60 66,46 84,38 110,18"
            fill="none"
            stroke="rgba(20,184,166,0.82)"
            strokeWidth="2"
            strokeDasharray="180"
            initial={{ strokeDashoffset: 180 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          {["8,76", "28,64", "48,60", "66,46", "84,38", "110,18"].map((node, idx) => {
            const [cx, cy] = node.split(",");
            return (
              <motion.circle
                key={node}
                cx={cx}
                cy={cy}
                r="2.2"
                fill="rgba(20,184,166,0.95)"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.24, delay: idx * 0.09 }}
              />
            );
          })}
        </svg>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className="relative h-full overflow-hidden rounded-md border border-white/10 bg-[rgba(3,12,20,0.56)] p-4">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:18px_18px] opacity-35" />
        <div className="relative grid h-full grid-cols-7 items-end gap-2">
          {[26, 34, 48, 55, 69, 73, 82].map((height, i) => (
            <motion.span
              key={height}
              className="rounded-t-sm border border-teal/35 bg-gradient-to-t from-teal/20 via-teal/35 to-teal/70"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden rounded-md border border-white/10 bg-[rgba(3,12,20,0.56)] p-4">
      <div className="relative grid h-full place-items-center">
        <svg className="h-[190px] w-[190px]" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="46" stroke="rgba(148,163,184,0.2)" strokeWidth="8" fill="none" />
          <motion.circle
            cx="60"
            cy="60"
            r="46"
            stroke="rgba(20,184,166,0.9)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="289"
            initial={{ strokeDashoffset: 289 }}
            animate={{ strokeDashoffset: 289 * 0.16 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <p className="absolute text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/70">Compliance Posture</p>
      </div>
    </div>
  );
}
