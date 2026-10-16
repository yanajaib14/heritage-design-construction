import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Financing",
  description: "Financing options for kitchen, bathroom and whole-home remodels with Heritage Design & Construction.",
};

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources · Financing"
        title={<>Flexible ways <em>to invest.</em></>}
        lede="Your home is worth doing right. Ask us about financing options when you book your consultation."
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Financing", href: "/resources/financing" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Ask about financing →</Link>
      </PageHero>

      <section className="band bg-off on-light">
        <div className="wrap pintro">
          <div className="left" style={{ display: "grid", gap: 22 }}>
            <div className="eyebrow">Financing partner</div>
            <h2 className="h2">Plan your project <em>with confidence.</em></h2>
          </div>
          <div className="prose">
            <p className="tbd" style={{ whiteSpace: "normal", justifySelf: "start" }}>[Financing partner name and logo]</p>
            <p className="tbd" style={{ whiteSpace: "normal", justifySelf: "start" }}>[Terms overview: what can be financed, how to apply, approval time]</p>
            <p className="tbd" style={{ whiteSpace: "normal", justifySelf: "start" }}>[Apply link]</p>
            <p>Financing is subject to credit approval. Questions? Call <a href="tel:+13605573444">(360) 557-3444</a>.</p>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
