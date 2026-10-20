import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Book a Consultation",
  description:
    "Book a consultation with Heritage Design & Construction in your home or at our Lacey showroom. Call (360) 557-3444 or visit 8695 Martin Way E #101, Lacey, WA.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s build <em>something exceptional.</em></>}
        lede="Book a consultation in your home or at our Lacey showroom. Tell us a little about your project and we'll take it from there."
        image="/images/hero-showroom.webp"
        crumbs={[{ label: "Contact", href: "/contact" }]}
        compact
      >
        <a className="btn btn-chrome" href={SITE.tel}>Call {SITE.phone}</a>
      </PageHero>

      <section className="band bg-off on-light" id="consultation-request">
        <div className="wrap contact-grid">
          <div style={{ display: "grid", gap: 28 }}>
            <div className="eyebrow">Consultation request</div>
            <h2 className="h2">Tell us about <em>your project.</em></h2>
            <ContactForm />
          </div>
          <div style={{ display: "grid", gap: 28 }}>
            <div className="eyebrow">Visit or call</div>
            <div className="info">
              <div><small>Call</small><a href={SITE.tel}>{SITE.phone}</a></div>
              <div><small>Showroom</small><span>{SITE.street}<br />{SITE.city}, {SITE.region} {SITE.zip}</span></div>
              <div><small>Hours</small><span>Mon–Fri 9:00–5:30<br />Saturday by appointment</span></div>
              <div><small>Email</small><span className="tbd">[Email]</span></div>
            </div>
            <div className="btns">
              <a className="btn btn-ink" href={SITE.directions} target="_blank" rel="noopener">Get directions ↗</a>
            </div>
            <Link className="btn" href="/contact/schedule-consultation">Schedule online →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
