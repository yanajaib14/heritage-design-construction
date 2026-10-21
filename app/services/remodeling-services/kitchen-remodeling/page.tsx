import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Steps, Tbd, Intro } from "@/components/ui/Blocks";
import Kitchens from "@/components/sections/Kitchens";
import KitchenOptions from "@/components/sections/KitchenOptions";
import Portfolio from "@/components/sections/Portfolio";
import Brands from "@/components/sections/Brands";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/services/remodeling-services/kitchen-remodeling" },
  title: "Kitchen Remodeling | Custom Kitchens in the South Sound",
  description:
    "Custom kitchen remodeling from Heritage Design & Construction in Lacey, WA: premium cabinetry, natural stone, layout changes and every selection made in our showroom.",
};

const K = "/services/remodeling-services/kitchen-remodeling";

export default function KitchenRemodelingPage() {
  return (
    <>
      <PageHero
        eyebrow="Kitchen remodeling"
        title={<>The kitchen, <em>elevated.</em></>}
        image="/images/kitchens.webp"
        lede="Fully custom kitchens designed around how you cook, gather and live, with premium cabinetry, natural stone and craftsmanship built to last for decades."
       
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Kitchen Remodeling", href: K },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Plan your kitchen →</Link>
      </PageHero>
      <Kitchens />
      <KitchenOptions />
      <Steps
        eyebrow="How a custom kitchen comes together"
        title={<>Design. Select. <em>Build.</em></>}
        steps={[
          { title: "Design", text: "Space planning and 3D renderings with your designer." },
          { title: "Select", text: "Cabinetry, stone, tile, fixtures and hardware chosen in our Lacey showroom." },
          { title: "Build", text: "Our own team builds the kitchen you approved." },
        ]}
      />
      <Cards
        eyebrow="Other ways to a new kitchen"
        title={<>Not every kitchen <em>needs a full gut.</em></>}
        bg="paper"
        cols={2}
        cards={[
          { icon: "clock", title: "10-Day Kitchen Program", text: "Same layout, new kitchen, installed in 10 business days.", href: `${K}/10-day-kitchen-program`, cta: "Explore the program" },
          { icon: "layers", title: "Cabinet Refacing", text: "New doors, drawer fronts and finishes on your existing cabinet boxes.", href: `${K}/cabinet-refacing`, cta: "Explore refacing" },
        ]}
      />
      <Brands />
      <Portfolio />
      <Intro eyebrow="Investment" title={<>What a custom kitchen <em>costs.</em></>}>
        <p><Tbd>[Typical custom kitchen price range, or a note that every quote is tailored.]</Tbd></p>
      </Intro>
      <Faq
        title={<>Kitchen <em>questions.</em></>}
        items={[
          { q: "Can you change my kitchen's layout?", a: "Yes. A custom kitchen remodel can include layout, lighting and structural changes, planned with your designer before construction begins." },
          { q: "Where do I choose my cabinets and counters?", a: "Every selection is made in person at Heritage Design Center, our sister showroom at 8695 Martin Way E #101 in Lacey." },
          { q: "How long does a custom kitchen take?", a: "[Typical timeline to confirm.]" },
        ]}
      />
      <Contact title={<>Your dream kitchen <em>starts here.</em></>} />
    </>
  );
}
