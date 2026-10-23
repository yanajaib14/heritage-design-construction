import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Steps, Gallery } from "@/components/ui/Blocks";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/services/remodeling-services/home-additions-adu" },
  title: "Home Additions & ADU/DADU",
  description:
    "Home additions, ADUs and detached ADUs (DADUs) in the South Sound, designed, supplied and built by one Lacey, WA team.",
};

export default function AdditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Home additions & ADU/DADU"
        title={<>More room, <em>built to match.</em></>}
        image="/images/wh-open-plan.webp"
        lede="Additions, attached ADUs and detached DADUs, designed to fit your home and built by the same team from first sketch to final walkthrough."
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Home Additions & ADU/DADU", href: "/services/remodeling-services/home-additions-adu" },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Discuss your project →</Link>
      </PageHero>
      <Cards
        eyebrow="What we build"
        title={<>Ways to <em>add space.</em></>}
        cards={[
          { icon: "home", title: "Home additions", text: "A new room or wing that ties into your existing home." },
          { icon: "key", title: "ADU", text: "An attached accessory dwelling unit, such as a suite for family or a rental." },
          { icon: "cube", title: "DADU", text: "A detached accessory dwelling unit built on your lot." },
        ]}
      />
      <Steps
        eyebrow="How it works"
        title={<>Design, supply, build. <em>One team.</em></>}
        steps={[
          { title: "Design", text: "Plans for the layout, look and how the new space connects to your home." },
          { title: "Supply", text: "Cabinetry, tile, fixtures and finishes from Heritage Design Center." },
          { title: "Build", text: "Construction managed and built by our own team." },
        ]}
      />
      <Gallery eyebrow="Projects" title={<>Additions <em>and ADUs.</em></>} labels={["Finished home addition", "Attached ADU interior", "Detached DADU exterior"]} />
      <Faq
        title={<>Additions & ADU <em>questions.</em></>}
        items={[
          { q: "Do you handle permits for additions and ADUs?", a: "[Answer to confirm.]" },
          { q: "How long does an addition or ADU take?", a: "[Answer to confirm.]" },
        ]}
      />
      <Contact title={<>Let’s plan <em>your new space.</em></>} />
    </>
  );
}
