import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Steps, Gallery, Intro, Tbd } from "@/components/ui/Blocks";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/services/remodeling-services/whole-home-remodeling" },
  title: "Whole-Home Remodeling",
  description: "Whole-home remodeling in the South Sound: layout, flow, finishes and structure designed as one and built by one Lacey, WA team.",
};

export default function WholeHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Whole-home remodeling"
        title={<>One vision, <em>every room.</em></>}
        lede="When a kitchen is only the start, we plan the whole home together: layout, flow, finishes and structure, designed as one and built by one team."
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Whole Home", href: "/services/remodeling-services/whole-home-remodeling" },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Plan your remodel →</Link>
      </PageHero>
      <Cards
        eyebrow="What we handle"
        title={<>The whole house, <em>planned together.</em></>}
        cards={[
          { icon: "home", title: "Open layouts", text: "Walls, flow and structural changes planned from the start." },
          { icon: "layers", title: "Kitchens, baths & living spaces", text: "Every room designed as part of one plan." },
          { icon: "store", title: "Consistent finishes", text: "Selections made together in our showroom so the home feels like one." },
        ]}
      />
      <Steps
        eyebrow="The process"
        title={<>One team, <em>start to finish.</em></>}
        steps={[
          { title: "Design", text: "Space planning and 3D renderings for the whole home." },
          { title: "Select", text: "Every finish chosen at Heritage Design Center." },
          { title: "Build", text: "One project manager from design to final walkthrough." },
        ]}
      />
      <Gallery eyebrow="Projects" title={<>Whole-home <em>transformations.</em></>} photos={[{ src: "/images/wh-open-plan.webp", alt: "An open kitchen and living space" }, { src: "/images/wh-kitchen.webp", alt: "A navy and white kitchen with a large island" }, { src: "/images/wh-bath.webp", alt: "A spa-style primary bathroom" }]} />
      <Intro eyebrow="Investment" title={<>Planning <em>your budget.</em></>}>
        <p><Tbd>[How you price whole-home projects.]</Tbd></p>
      </Intro>
      <Faq
        title={<>Whole-home <em>questions.</em></>}
        items={[
          { q: "Can I live at home during a whole-home remodel?", a: "[Answer to confirm.]" },
          { q: "How long does a whole-home remodel take?", a: "[Typical timeline to confirm.]" },
        ]}
      />
      <Contact title={<>Love where you live, <em>all over again.</em></>} />
    </>
  );
}
