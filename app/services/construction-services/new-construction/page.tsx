import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Steps, Gallery } from "@/components/ui/Blocks";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/services/construction-services/new-construction" },
  title: "New Construction",
  description: "New construction in the South Sound from a Lacey, WA design-build team: design, materials and construction under one roof.",
};

export default function NewConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="New construction"
        title={<>Built new, <em>built right.</em></>}
        image="/images/wh-kitchen.webp"
        lede="New builds designed, supplied and built by one team, with every finish chosen in our Lacey showroom."
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Construction", href: "/services/construction-services" },
          { label: "New Construction", href: "/services/construction-services/new-construction" },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Discuss your project →</Link>
      </PageHero>
      <Cards
        eyebrow="What we build"
        title={<>New construction <em>projects.</em></>}
        cards={[
          { icon: "building", title: "[Project type]", text: "[Describe the new construction work you take on.]" },
          { icon: "grid", title: "[Project type]", text: "[Describe another type of new build.]" },
          { icon: "cube", title: "[Project type]", text: "[Describe another type of new build.]" },
        ]}
      />
      <Steps
        eyebrow="How it works"
        title={<>Design, supply, build. <em>One team.</em></>}
        steps={[
          { title: "Design", text: "Plans and design for your site and how you will use the space." },
          { title: "Supply", text: "Cabinetry, counters, tile, fixtures and hardware from Heritage Design Center." },
          { title: "Build", text: "Construction managed and built by our own team." },
        ]}
      />
      <Gallery eyebrow="Projects" title={<>New <em>builds.</em></>} labels={["Finished new home exterior", "New build interior", "Crew on a new construction site"]} />
      <Faq
        title={<>New construction <em>questions.</em></>}
        items={[
          { q: "Do you build on my lot?", a: "[Answer to confirm.]" },
          { q: "Do you handle permits and inspections?", a: "[Answer to confirm.]" },
        ]}
      />
      <Contact title={<>Let’s talk about <em>your build.</em></>} />
    </>
  );
}
