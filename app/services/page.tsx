import { Metadata } from "next";
import { BriefcaseBusiness, Building2, FileBadge2, ShieldCheck, Waypoints } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Price Consulting, LLC federal consulting services including strategic advisory, modernization, and mission support."
};

const capabilityDomains = [
  {
    title: "Mission Strategy and Portfolio Governance",
    body: "Strategic planning, prioritization models, and governance mechanisms for mission portfolios requiring executive confidence and traceability.",
    scope: "Strategy roadmaps, governance charters, decision memos",
    icon: Building2
  },
  {
    title: "Program Modernization and Delivery Assurance",
    body: "Modernization sequencing, dependency control, and operational risk management designed for complex enterprise environments.",
    scope: "Transformation sequencing, milestone controls, dependency triage",
    icon: Waypoints
  },
  {
    title: "Acquisition Integration and PMO Support",
    body: "Acquisition lifecycle support aligned with mission execution needs, from requirements definition through transition planning.",
    scope: "Requirements support, solicitation alignment, PMO operations",
    icon: BriefcaseBusiness
  },
  {
    title: "Compliance-Informed Mission Support",
    body: "Execution support informed by federal security and compliance expectations across cross-functional delivery teams.",
    scope: "Framework mapping, operational controls, executive reporting",
    icon: ShieldCheck
  }
];

const engagementDossiers = [
  {
    title: "Federal Program Office Dossier",
    engagementType: "Strategic advisory and program governance",
    deliveryModel: "Embedded advisory lead with periodic executive workshops",
    supportedClients: "Program executive offices and mission directorates",
    typicalScope: "Governance resets, modernization prioritization, delivery oversight"
  },
  {
    title: "Prime and Integrator Dossier",
    engagementType: "Capture-through-delivery operational alignment",
    deliveryModel: "Hybrid advisory cell coordinating business and delivery functions",
    supportedClients: "Prime contractors, IT integrators, and GovCon delivery teams",
    typicalScope: "Acquisition strategy support, delivery model hardening, PMO enablement"
  }
];

const credentials = ["FAR / DFARS", "FedRAMP", "CMMC", "NIST 800-53 / 800-171", "Enterprise IT Programs"];

export default function ServicesPage() {
  return (
    <section className="section-wrap py-16 md:py-24">
      <p className="kicker">Advisory Capability Matrix</p>
      <h1 className="section-title mt-3">Mission support domains structured for federal delivery realities.</h1>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {capabilityDomains.map((domain) => (
          <article key={domain.title} className="intel-panel p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/80">Operational Domain</p>
              <domain.icon className="h-5 w-5 text-teal" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{domain.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate">{domain.body}</p>
            <p className="mt-4 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.16em] text-slate">
              Typical Scope: {domain.scope}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 intel-panel px-7 shadow-panel">
        {engagementDossiers.map((dossier) => (
          <article key={dossier.title} className="brief-row last:border-b-0">
            <h2 className="text-lg font-semibold text-white md:text-xl">{dossier.title}</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate md:grid-cols-2 md:gap-6">
              <p>
                <span className="font-semibold uppercase tracking-[0.12em] text-teal/80">Engagement Type</span>
                <br />
                {dossier.engagementType}
              </p>
              <p>
                <span className="font-semibold uppercase tracking-[0.12em] text-teal/80">Delivery Model</span>
                <br />
                {dossier.deliveryModel}
              </p>
              <p>
                <span className="font-semibold uppercase tracking-[0.12em] text-teal/80">Supported Clients</span>
                <br />
                {dossier.supportedClients}
              </p>
              <p>
                <span className="font-semibold uppercase tracking-[0.12em] text-teal/80">Typical Scope</span>
                <br />
                {dossier.typicalScope}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        {credentials.map((credential) => (
          <span
            key={credential}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-navy/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
          >
            <FileBadge2 className="h-4 w-4 text-teal" />
            {credential}
          </span>
        ))}
      </div>
    </section>
  );
}