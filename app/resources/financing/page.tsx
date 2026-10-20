import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Financing options for kitchen, bathroom and whole-home remodels with Heritage Design & Construction, including our preferred lender GreenSky.",
};

const OPTIONS = [
  {
    t: "Home equity line of credit (HELOC)",
    p: "Borrow against the equity in your home with a flexible line of credit. Draw funds as needed during the draw period, typically 10 years, and pay interest only on what you use. Popular for its flexibility and often lower rates.",
  },
  {
    t: "Cash-out refinance",
    p: "Refinance your mortgage for more than you owe and take the difference in cash. A good fit if you have significant equity and can secure a favorable rate.",
  },
  {
    t: "Renovation or construction loan",
    p: "Built for home improvement. Funds are based on your home's value after the renovation, so you don't need substantial existing equity. Terms can be stricter, so compare carefully.",
  },
  {
    t: "Other options",
    p: "Personal loans with no home equity required, promotional 0% APR credit cards for smaller updates, retirement savings or private loans. A financial advisor can help you find the right fit.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources · Financing"
        title={<>Financing <em>your remodel.</em></>}
        lede="A remodel is a significant investment. With the right financing, it can be more affordable than you think."
        image="/images/hero-showroom.webp"
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Financing", href: "/resources/financing" }]}
      >
        <a className="btn btn-chrome" href="tel:+18669360602">Call GreenSky</a>
        <Link className="btn" href="/contact">Ask about financing</Link>
      </PageHero>

      <div className="td-snap fin-lender">
        <div className="wrap">
          <div>
            <span>Preferred lender</span>
            <strong>GreenSky</strong>
          </div>
          <div>
            <span>Call GreenSky</span>
            <a href="tel:+18669360602">866-936-0602</a>
          </div>
          <div>
            <span>Available for</span>
            <p>Monthly payment plans and promotional options for qualified homeowners.</p>
          </div>
        </div>
      </div>

      <section className="band bg-off on-light">
        <div className="wrap reasons">
          <div className="reasons-lead">
            <div className="eyebrow">Financing options</div>
            <h2 className="h2">Home renovation <em>financing.</em></h2>
            <p className="td-note">The most common ways homeowners fund a remodel. We&apos;re happy to talk through them at your consultation.</p>
            <figure className="reasons-fig">
              <div className="fig-clip"><img src="/images/showroom.webp" alt="Material samples at Heritage Design Center" loading="lazy" /></div>
            </figure>
          </div>
          <ol className="reasons-list fin-list">
            {OPTIONS.map((o, i) => (
              <li key={o.t}>
                <span className="rn">{String(i + 1).padStart(2, "0")}</span>
                <h3>{o.t}</h3>
                <p>{o.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band bg-paper on-light fin-note">
        <div className="wrap">
          <p className="td-fine">
            Financial disclaimer: this page is general information, not financial advice. Please consult a qualified financial advisor before making financial decisions. Financing is subject to credit approval. Heritage Design &amp; Construction does not endorse any financial product or lender other than our preferred partner.
          </p>
        </div>
      </section>

      <Contact variant="ink" image="/images/pf-forest.webp" title={<>Let’s plan a project <em>that fits.</em></>} />
    </>
  );
}
