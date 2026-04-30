import Link from "next/link";
import { company, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050d18] text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="mb-10 flex flex-col gap-5 rounded-xl border border-white/10 bg-card/70 p-7 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal/80">Executive Access</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-[0.04em]">
              Need trusted support on a sensitive initiative?
            </h2>
          </div>
          <Link
            href="/contact"
            className="cta-primary"
          >
            Initiate Advisory Discussion
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <h2 className="text-lg font-semibold text-white">{company.name}</h2>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
              Strategic federal consulting for agencies and mission partners pursuing measurable public outcomes with
              executive-level rigor.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={company.capabilitiesStatementUrl}
                className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-teal hover:text-teal"
              >
                Access Capability Brief
              </a>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-teal hover:text-teal"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Navigate</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Connect</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li>
                {company.address.streetAddress}, {company.address.addressLocality}, {company.address.addressRegion}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>SAM and capability materials available upon request</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-card/50 p-6 md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal/80">Operational Trust Profile</p>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Headquarters / Region</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Washington, DC Metro Region
                <br />
                HQ: {company.address.streetAddress}, {company.address.addressLocality}, {company.address.addressRegion}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Certifications</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Small business certification details available upon request</li>
                <li>Security and compliance competency alignment maintained</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Registration / Classification</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>SAM registration: Active status documentation placeholder</li>
                <li>Set-Aside / Classification: Placeholder for NAICS and socioeconomic details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}