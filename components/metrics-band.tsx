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
  const [displayValue, setDisplayValue] = useState(value.includes("%") || value.includes("+") ? "0" : value);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const numeric = Number.parseInt(value.replace(/[^0-9]/g, ""), 10);

    if (Number.isNaN(numeric)) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, numeric, {
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
    <p ref={ref} className="font-serif text-5xl font-semibold tracking-tight text-white">
      {displayValue}
    </p>
  );
}

export default function MetricsBand({ items }: Props) {
  return (
    <section className="border-y border-white/10 bg-steel/70 py-12 md:py-16">
      <div className="section-wrap grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="intel-panel px-6 py-7 shadow-panel"
          >
            <AnimatedValue value={item.value} />
            <p className="mt-3 text-sm leading-6 text-slate">{item.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate/85">{item.microcopy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}