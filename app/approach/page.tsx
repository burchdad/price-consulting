import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approach",
  description: "Understand the engagement approach Price Consulting, LLC uses to deliver measurable federal outcomes."
};

const phases = [
  {
    title: "Assess",
    detail:
      "Establish a shared understanding of mission drivers, stakeholder dynamics, and delivery constraints through a rapid but thorough discovery process."
  },
  {
    title: "Align",
    detail:
      "Translate strategic priorities into practical workstreams, governance cadences, and decision pathways that leadership can confidently execute."
  },
  {
    title: "Execute",
    detail:
      "Provide hands-on advisory and program support to drive implementation discipline, mitigate risk, and maintain stakeholder confidence."
  },
  {
    title: "Sustain",
    detail:
      "Institutionalize capabilities through performance routines, operating playbooks, and leadership-ready reporting that endures beyond the engagement."
  }
];

export default function ApproachPage() {
  return (
    <section className="section-wrap py-16 md:py-24">
      <p className="kicker">Approach</p>
      <h1 className="section-title mt-3">A structured method for high-complexity federal programs.</h1>

      <div className="mt-10 intel-panel px-7 shadow-panel">
        {phases.map((phase, index) => (
          <article key={phase.title} className="brief-row last:border-b-0">
            <div className="grid gap-3 md:grid-cols-[72px_180px_1fr] md:gap-6">
              <div className="text-sm font-semibold tracking-[0.18em] text-teal">0{index + 1}</div>
              <h2 className="text-lg font-semibold uppercase tracking-[0.03em] text-white">{phase.title}</h2>
              <p className="text-sm leading-7 text-slate">{phase.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}