import { Metadata } from "next";
import AdvisoryWorkflow from "@/components/advisory-workflow";

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
    <>
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

      <section className="border-t intel-divider bg-steel/60 py-20 md:py-24">
        <div className="section-wrap">
          <p className="kicker">Advisory Lifecycle</p>
          <h2 className="section-title mt-3">Mission support chain — from need to sustained delivery.</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-[1fr_0.75fr] md:gap-16">
            <AdvisoryWorkflow />
            <div className="intel-panel p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/80">Engagement Philosophy</p>
              <p className="mt-5 text-sm leading-8 text-slate">
                Every phase of this lifecycle is designed to reduce downstream risk. We enter engagements with a defined
                operating posture, clear decision protocols, and a reporting rhythm calibrated to executive tempo.
              </p>
              <p className="mt-4 text-sm leading-8 text-slate">
                Advisory value is highest when integrated early. Program offices that engage at the mission need
                phase consistently outperform those seeking support only after acquisition problems emerge.
              </p>
              <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-6 text-slate/70">
                Advisory engagements are structured to be discrete, efficient, and aligned to the
                natural rhythm of federal program milestones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}