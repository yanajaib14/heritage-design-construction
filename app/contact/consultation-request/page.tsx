import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact/consultation-request" },
  title: "Consultation Request",
  description: "Request a consultation with Heritage Design & Construction, in your home or at our Lacey showroom.",
};

export default function ConsultationRequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation request"
        title={<>Tell us about <em>your project.</em></>}
        image="/images/sr-consult.webp"
        lede="Share a few details and our team will reach out to set up your consultation."
        crumbs={[{ label: "Contact", href: "/contact" }, { label: "Consultation Request", href: "/contact/consultation-request" }]}
      >
        <a className="btn btn-chrome" href={SITE.tel}>Call {SITE.phone}</a>
      </PageHero>
      <section className="band bg-off on-light">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
