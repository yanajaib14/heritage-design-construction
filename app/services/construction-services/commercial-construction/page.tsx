import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Steps, Gallery } from "@/components/ui/Blocks";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Commercial Construction",
  description: "Commercial construction in the South Sound from a Lacey, WA design-build team: design, materials and construction under one roof.",
};

const C = "/services/construction-services/commercial-construction";

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial construction"
        title={<>Commercial spaces, <em>built right.</em></>}
        lede="Design, materials and construction for commercial projects, from one team."
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Construction", href: "/services/construction-services" },
          { label: "Commercial", href: C },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Discuss your project →</Link>
        <Link className="btn" href={`${C}/tenant-improvements-ti`}>Tenant improvements</Link>
      </PageHero>
      <Cards
        eyebrow="What we build"
        title={<>Commercial <em>capabilities.</em></>}
        cards={[
          { icon: "building", title: "Tenant improvements", text: "Build-outs for tenants, landlords and brokers.", href: `${C}/tenant-improvements-ti`, cta: "Learn about TI" },
          { icon: "grid", title: "[Project type]", text: "[Describe another type of commercial work you take on.]" },
          { icon: "cube", title: "[Project type]", text: "[Describe another type of commercial work you take on.]" },
        ]}
      />
      <Steps
        eyebrow="How it works"
        title={<>Design, supply, build. <em>One team.</em></>}
        steps={[
          { title: "Design", text: "Space planning and design for your use." },
          { title: "Supply", text: "Materials from Heritage Design Center." },
          { title: "Build", text: "Construction managed and built by our own team." },
        ]}
      />
      <Gallery eyebrow="Projects" title={<>Commercial <em>work.</em></>} labels={["[Commercial project photo]", "[Commercial project photo]", "[Commercial project photo]"]} />
      <Faq
        title={<>Commercial <em>questions.</em></>}
        items={[
          { q: "Do you handle permits for commercial work?", a: "[Answer to confirm.]" },
          { q: "What size projects do you take on?", a: "[Answer to confirm.]" },
        ]}
      />
      <Contact variant="ink" title={<>Let’s talk about <em>your space.</em></>} />
    </>
  );
}
