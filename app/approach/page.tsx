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
      <h1 className="section-title mt-3">A Structured Method Designed for Federal Complexity</h1>

      <div className="mt-10 space-y-5">
        {phases.map((phase, index) => (
          <article key={phase.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-panel md:flex md:items-start md:gap-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
              {index + 1}
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="text-xl font-semibold text-navy">{phase.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate">{phase.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}