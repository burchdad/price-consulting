"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type MetricItem = {
  label: string;
  value: string;
  microcopy: string;
};

type Props = {
  items: MetricItem[];
};

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const numeric = Number.parseInt(value.replace(/[^0-9]/g, ""), 10);

    if (Number.isNaN(numeric)) {
      setDisplayValue(value);
      return;
    }

    const start = Math.max(1, numeric - 8);

    const controls = animate(start, numeric, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (latest) => {
        const rounded = Math.round(latest);

        if (value.includes("%")) {
          setDisplayValue(`${rounded}%`);
          return;
        }

        if (value.includes("+")) {
          setDisplayValue(`${rounded}+`);
          return;
        }

        setDisplayValue(String(rounded));
      }
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <p ref={ref} className="font-serif text-6xl font-semibold leading-[0.9] tracking-tight text-white md:text-8xl">
      {displayValue}
    </p>
  );
}

export default function MetricsBand({ items }: Props) {
  return (
    <section className="border-y border-white/10 bg-steel/70 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8">
        <div className="mb-10 md:mb-14">
          <p className="kicker">Performance Signals</p>
          <h2 className="mt-3 max-w-4xl font-serif text-3xl font-semibold uppercase leading-tight tracking-[0.02em] text-white md:text-5xl">
            Editorial performance readout across mission advisory outcomes.
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {items.map((item, index) => (
            <MetricShowcaseRow key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricShowcaseRow({ item, index }: { item: MetricItem; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(120deg,rgba(8,20,32,0.94),rgba(6,16,26,0.9))]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.1),transparent_38%)]" />
      <div className="grid gap-0 md:grid-cols-2">
        <div className={`relative border-white/10 p-7 md:p-10 ${reverse ? "md:order-2 md:border-l" : "md:border-r"}`}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal/75">Case Metric 0{index + 1}</p>
          <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.06em] text-white md:text-xl">{item.label}</h3>
          <div className="mt-8">
            <AnimatedValue value={item.value} />
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate md:text-base md:leading-8">{item.microcopy}</p>
        </div>

        <div className={`relative min-h-[230px] p-6 md:min-h-[300px] md:p-8 ${reverse ? "md:order-1" : ""}`}>
          {index === 0 && <PortfolioBarsVisual />}
          {index === 1 && <AccelerationTrendVisual />}
          {index === 2 && <SatisfactionGaugeVisual />}
        </div>
      </div>
    </motion.article>
  );
}

function PortfolioBarsVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-md border border-white/10 bg-[rgba(3,12,20,0.55)] p-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:22px_22px] opacity-40" />
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/45 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
      />

      <div className="relative flex h-full items-end gap-3">
        {[42, 55, 62, 68, 74, 83].map((height, i) => (
          <motion.div
            key={height}
            initial={{ height: 0, opacity: 0.6 }}
            whileInView={{ height: `${height}%`, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.08 * i, ease: "easeOut" }}
            className="flex-1 rounded-t-sm border border-teal/30 bg-gradient-to-t from-teal/20 via-teal/35 to-teal/70"
          />
        ))}
      </div>
    </div>
  );
}

function AccelerationTrendVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-md border border-white/10 bg-[rgba(3,12,20,0.55)] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.16),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:26px_26px] opacity-35" />

      <svg className="relative h-full w-full" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
        <motion.polyline
          fill="none"
          stroke="rgba(20,184,166,0.75)"
          strokeWidth="2"
          points="4,52 18,46 32,44 46,38 62,28 74,26 90,12"
          strokeDasharray="160"
          initial={{ strokeDashoffset: 160 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        {["4,52", "18,46", "32,44", "46,38", "62,28", "74,26", "90,12"].map((point, i) => {
          const [cx, cy] = point.split(",");
          return (
            <motion.circle
              key={point}
              cx={cx}
              cy={cy}
              r="1.7"
              fill="rgba(20,184,166,0.95)"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.25, delay: 0.09 * i }}
            />
          );
        })}
      </svg>

      <div className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/65">Velocity Trend</div>
    </div>
  );
}

function SatisfactionGaugeVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-md border border-white/10 bg-[rgba(3,12,20,0.55)] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(20,184,166,0.14),transparent_45%)]" />

      <div className="relative flex h-full items-center justify-center">
        <svg className="h-[190px] w-[190px]" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="46" stroke="rgba(148,163,184,0.2)" strokeWidth="8" fill="none" />
          <motion.circle
            cx="60"
            cy="60"
            r="46"
            stroke="rgba(20,184,166,0.85)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="289"
            initial={{ strokeDashoffset: 289 }}
            whileInView={{ strokeDashoffset: 289 * 0.04 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            transform="rotate(-90 60 60)"
          />
        </svg>

        <motion.div
          className="absolute text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          <p className="font-serif text-3xl font-semibold text-white">96%</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal/70">Confidence</p>
        </motion.div>
      </div>
    </div>
  );
}