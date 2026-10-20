import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Steps, Tbd, Intro, Gallery } from "@/components/ui/Blocks";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/services/remodeling-services/kitchen-remodeling/cabinet-refacing" },
  title: "Cabinet Refacing",
  description: "Cabinet refacing in the South Sound: new doors, drawer fronts and finishes on your existing cabinet boxes, chosen in our Lacey showroom.",
};

export default function RefacingPage() {
  return (
    <>
      <PageHero
        eyebrow="Cabinet refacing"
        title={<>A new look, <em>same layout.</em></>}
        lede="New doors, drawer fronts and finishes on your existing cabinet boxes, for kitchens whose layout already works."
       
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Kitchens", href: "/services/remodeling-services/kitchen-remodeling" },
          { label: "Cabinet Refacing", href: "/services/remodeling-services/kitchen-remodeling/cabinet-refacing" },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Ask about refacing →</Link>
      </PageHero>
      <Cards
        eyebrow="What's included"
        title={<>Refresh what <em>you have.</em></>}
        cards={[
          { icon: "layers", title: "New doors", text: "Choose a new door style and finish." },
          { icon: "grid", title: "New drawer fronts", text: "Matching fronts across every drawer." },
          { icon: "key", title: "New finishes & hardware", text: "Colors and pulls selected in our showroom." },
        ]}
      />
      <Steps
        eyebrow="How it works"
        title={<>Simple <em>from start to finish.</em></>}
        steps={[
          { title: "Consultation", text: "We check your cabinet boxes and layout." },
          { title: "Selections", text: "Pick door styles, finishes and hardware at Heritage Design Center." },
          { title: "Installation", text: "Our team installs your new doors and fronts. [Typical timeline to confirm.]" },
        ]}
      />
      <Intro eyebrow="Investment" title={<>Refacing <em>pricing.</em></>} bg="paper">
        <p><Tbd>[Refacing pricing to confirm.]</Tbd></p>
      </Intro>
      <Gallery eyebrow="Before & after" title={<>Refaced <em>kitchens.</em></>} labels={["[Before / after photo]", "[Before / after photo]", "[Before / after photo]"]} />
      <Faq
        title={<>Refacing <em>questions.</em></>}
        items={[
          { q: "Is my kitchen a good fit for refacing?", a: "Refacing suits kitchens whose cabinet boxes are solid and whose layout already works. If you want to move things around, a custom remodel or the 10-Day Kitchen Program may fit better." },
          { q: "Can I change my countertops at the same time?", a: "[Answer to confirm.]" },
        ]}
      />
      <Contact title={<>New-look cabinets, <em>same great bones.</em></>} />
    </>
  );
}
