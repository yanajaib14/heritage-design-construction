import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact/schedule-consultation" },
  title: "Schedule a Consultation",
  description: "Pick a time for your consultation with Heritage Design & Construction, in your home or at our Lacey showroom.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule a consultation"
        title={<>Pick a time <em>that works.</em></>}
        lede="Choose a time for your consultation, in your home or at our Lacey showroom."
        crumbs={[{ label: "Contact", href: "/contact" }, { label: "Schedule", href: "/contact/schedule-consultation" }]}
      >
        <a className="btn btn-chrome" href={SITE.tel}>Call {SITE.phone}</a>
        <Link className="btn" href="/contact/consultation-request">Send a request instead</Link>
      </PageHero>
      <section className="band bg-off on-light">
        <div className="wrap">
          <div className="ph" style={{ minHeight: 520 }}>[Online scheduling tool goes here]</div>
        </div>
      </section>
    </>
  );
}
