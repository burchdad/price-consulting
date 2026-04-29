"use client";

import { motion } from "framer-motion";

type MetricItem = {
  label: string;
  value: string;
};

type Props = {
  items: MetricItem[];
};

export default function MetricsBand({ items }: Props) {
  return (
    <section className="border-y border-navy/10 bg-[#F3F6F8] py-12 md:py-16">
      <div className="section-wrap grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="rounded-[1.5rem] border border-navy/10 bg-white px-6 py-7 shadow-panel"
          >
            <p className="font-serif text-5xl font-semibold text-navy">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}