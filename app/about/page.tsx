import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Price Consulting, LLC partners with federal organizations to improve mission delivery."
};

export default function AboutPage() {
  return (
    <section className="section-wrap py-16 md:py-24">
      <p className="kicker">About</p>
      <h1 className="section-title mt-3">A trusted advisory partner in federal transformation.</h1>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-sm leading-8 text-slate md:text-base">
          <p>
            Price Consulting, LLC was founded to help federal organizations turn strategic intent into accountable
            execution. Our team combines advisory depth with practical delivery experience across agency operations,
            modernization initiatives, and mission support services.
          </p>
          <p>
            We collaborate closely with executive leaders, program managers, and stakeholder teams to establish clear
            priorities, improve governance, and drive measurable progress in high-visibility federal environments.
          </p>
          <p>
            Our operating model is built around precision, responsiveness, and trust, ensuring every engagement is
            tailored to agency context, acquisition realities, and mission urgency.
          </p>
        </div>

        <div className="intel-panel px-6 py-2 shadow-panel">
          <h2 className="pt-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal/80">Briefing Notes</h2>
          <div className="mt-2">
            <div className="brief-row">
              <p className="text-sm leading-7 text-slate">Mission-first strategy with disciplined execution oversight.</p>
            </div>
            <div className="brief-row">
              <p className="text-sm leading-7 text-slate">Cross-functional advisory integrating leadership, operations, and delivery.</p>
            </div>
            <div className="brief-row">
              <p className="text-sm leading-7 text-slate">Transparent performance metrics and outcome-oriented decision support.</p>
            </div>
            <div className="py-5">
              <p className="text-sm leading-7 text-slate">Commitment to professional excellence and long-term agency value.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}