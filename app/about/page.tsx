import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Price Consulting, LLC partners with federal organizations to improve mission delivery."
};

export default function AboutPage() {
  return (
    <section className="section-wrap py-16 md:py-24">
      <p className="kicker">About</p>
      <h1 className="section-title mt-3">A Trusted Partner in Federal Transformation</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
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

        <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-panel">
          <h2 className="text-xl font-semibold text-navy">What Defines Our Work</h2>
          <ul className="mt-4 space-y-4 text-sm leading-7 text-slate">
            <li>Mission-first strategy with disciplined execution oversight.</li>
            <li>Cross-functional advisory integrating leadership, operations, and delivery.</li>
            <li>Transparent performance metrics and outcome-oriented decision support.</li>
            <li>Commitment to professional excellence and long-term agency value.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}