"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={item.question} className="overflow-hidden rounded-xl border border-white/10 bg-card/80 backdrop-blur-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setActiveIndex(isOpen ? null : index)}
            >
              <span className="text-sm font-semibold text-white md:text-base">{item.question}</span>
              <ChevronDown className={`h-5 w-5 text-slate transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-5 pb-4 text-sm leading-7 text-slate">{item.answer}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}