import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Steps, Gallery } from "@/components/ui/Blocks";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/services/construction-services/commercial-construction/tenant-improvements-ti" },
  title: "Tenant Improvements (TI)",
  description: "Tenant improvements in the South Sound for tenants, landlords and brokers, designed, supplied and built by one Lacey, WA team.",
};

export default function TiPage() {
  return (
    <>
      <PageHero
        eyebrow="Tenant improvements"
        title={<>Spaces ready <em>for business.</em></>}
        lede="Tenant improvement build-outs for tenants, landlords and brokers, with design, materials and construction under one roof."
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Construction", href: "/services/construction-services" },
          { label: "Commercial", href: "/services/construction-services/commercial-construction" },
          { label: "Tenant Improvements", href: "/services/construction-services/commercial-construction/tenant-improvements-ti" },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Discuss your TI project →</Link>
      </PageHero>
      <Cards
        eyebrow="Who we work with"
        title={<>Built for <em>everyone at the table.</em></>}
        cards={[
          { icon: "key", title: "Tenants", text: "A space that fits how your business works, designed and built under one contract." },
          { icon: "building", title: "Landlords", text: "Build-outs that make your space ready to lease and ready to move in." },
          { icon: "chat", title: "Brokers", text: "A single design-build partner to bring into your clients' deals." },
        ]}
      />
      <Steps
        eyebrow="How a TI project runs"
        title={<>Clear steps, <em>one team.</em></>}
        steps={[
          { title: "Walkthrough & design", text: "We review the space and plan the build-out." },
          { title: "Pricing & selections", text: "[Describe how you quote and select materials.]" },
          { title: "Build-out", text: "Our team builds the space. [Typical timeline to confirm.]" },
        ]}
      />
      <Gallery eyebrow="Projects" title={<>Recent <em>build-outs.</em></>} labels={["Empty suite before the build-out", "Framing and finishes in progress", "Finished suite, ready to open"]} />
      <Faq
        title={<>TI <em>questions.</em></>}
        items={[
          { q: "Do you work directly with landlords and brokers?", a: "Yes. We work with tenants, landlords and brokers on tenant improvement projects." },
          { q: "How long does a typical build-out take?", a: "[Typical timeline to confirm.]" },
        ]}
      />
      <Contact title={<>Let’s talk about <em>your space.</em></>} />
    </>
  );
}
