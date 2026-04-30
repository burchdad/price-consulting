"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Mission Need Assessment",
    context: "Intake",
    detail:
      "Scope the operational problem, align stakeholder expectations, and establish a defensible requirements baseline."
  },
  {
    num: "02",
    title: "Acquisition Strategy Development",
    context: "Pre-Solicitation",
    detail:
      "Define procurement approach, contract vehicle strategy, evaluation framework, and source selection posture."
  },
  {
    num: "03",
    title: "Requirements Definition",
    context: "Requirements",
    detail:
      "Translate mission objectives into structured, auditable technical and performance requirements with traceability."
  },
  {
    num: "04",
    title: "Proposal Support and Award",
    context: "Award",
    detail:
      "Support evaluation readiness, source selection adjudication, and contractor onboarding and transition planning."
  },
  {
    num: "05",
    title: "Program Oversight and Sustainment",
    context: "Delivery",
    detail:
      "Sustain delivery momentum through governance cadence, risk controls, and executive-ready reporting."
  }
];

export default function AdvisoryWorkflow() {
  return (
    <div className="relative">
      {/* Vertical spine */}
      <div
        className="absolute left-5 top-10 h-[calc(100%-4rem)] w-px"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,184,166,0.55) 0%, rgba(20,184,166,0.12) 80%, transparent 100%)"
        }}
      />

      <div className="space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.36, delay: i * 0.09, ease: "easeOut" }}
            className="relative flex gap-6 pb-7 last:pb-0"
          >
            {/* Node */}
            <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-teal/40 bg-[#050d18] text-[10px] font-bold tracking-[0.08em] text-teal">
              {step.num}
            </div>

            <div className="min-w-0 pt-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.13em] text-white">
                  {step.title}
                </h3>
                <span className="rounded border border-teal/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-teal/60">
                  {step.context}
                </span>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate">{step.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
