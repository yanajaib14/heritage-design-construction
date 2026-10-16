import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Tbd, Intro } from "@/components/ui/Blocks";
import TenDay from "@/components/sections/TenDay";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "10-Day Kitchen Program",
  description:
    "A complete new kitchen in the same layout, installed in 10 business days. Every cabinet, counter and finish is designed, selected and staged before day one.",
};

export default function TenDayPage() {
  return (
    <>
      <PageHero
        eyebrow="10-Day Kitchen Program"
        title={<>A new kitchen, <em>planned to the day.</em></>}
        lede="A planned, efficient program for kitchens that keep their footprint. Everything is designed, selected and staged before day one, then a dedicated crew installs on a fixed 10-day schedule."
        image="/images/pf-midnight.webp"
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Kitchens", href: "/services/remodeling-services/kitchen-remodeling" },
          { label: "10-Day Kitchen", href: "/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program" },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">See if your kitchen qualifies →</Link>
      </PageHero>
      <TenDay />
      <Cards
        eyebrow="Is it right for you?"
        title={<>Made for kitchens <em>that work.</em></>}
        cards={[
          { icon: "grid", title: "Same footprint", text: "Your layout stays, so the work can be planned to the day." },
          { icon: "store", title: "Selected in the showroom", text: "Cabinetry, counters and finishes chosen at Heritage Design Center before day one." },
          { icon: "clock", title: "A fixed schedule", text: "A dedicated crew installs on a day-by-day plan you see in advance." },
        ]}
      />
      <Intro eyebrow="Investment" title={<>Starting <em>around $45,000.</em></>} bg="paper">
        <p>10-Day Kitchen projects start at around $45,000. Your price depends on your kitchen&apos;s size and the cabinetry, stone and finishes you choose.</p>
        <p><Tbd>[What is included in the price.]</Tbd></p>
      </Intro>
      <Portfolio />
      <Faq
        title={<>10-Day <em>questions.</em></>}
        items={[
          { q: "Why can it be done in 10 business days?", a: "Because everything is designed, selected and staged before day one, and the layout stays the same, our crew can follow a fixed day-by-day schedule." },
          { q: "What if I want to change my layout?", a: "Layout changes are best handled as a custom kitchen remodel, which we also design and build." },
          { q: "Can I use my kitchen during the 10 days?", a: "[Answer to confirm.]" },
        ]}
      />
      <Contact />
    </>
  );
}
