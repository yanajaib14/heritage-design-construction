import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "FAQs | Remodeling Questions Answered",
  description:
    "Answers about the 10-Day Kitchen Program, Fast Bath, cabinet refacing, our Lacey showroom, warranty, licensing and the South Sound areas we serve.",
};

type QA = { q: string; a: string[] };

// Answers use only facts the owner has confirmed; [brackets] mark what is still to come.
const GROUPS: { title: string; items: QA[] }[] = [
  {
    title: "Kitchens",
    items: [
      {
        q: "What is the 10-Day Kitchen Program?",
        a: [
          "The 10-Day Kitchen Program is a planned, efficient way to remodel a kitchen that keeps its existing layout. Everything is designed, selected and staged before day one, and our crew then installs the new kitchen in 10 business days.",
          "It follows a set day-by-day schedule, from pack-out and demo on day one to the unveiling on day ten.",
        ],
      },
      {
        q: "How much does the 10-Day Kitchen Program cost?",
        a: ["10-Day Kitchen projects start at around $45,000. Your exact price depends on your kitchen's size and the cabinetry, stone and finishes you choose in our showroom."],
      },
      {
        q: "What is cabinet refacing?",
        a: [
          "Cabinet refacing gives your kitchen new doors, drawer fronts and finishes while keeping your existing cabinet boxes. It suits kitchens whose layout and cabinet boxes are still in good shape.",
          "Pricing: [refacing pricing to confirm].",
        ],
      },
      {
        q: "Should I choose a custom remodel, the 10-Day Program or refacing?",
        a: [
          "Choose a custom remodel if you want to change the layout, refacing if you only want a new look on solid cabinets, and the 10-Day Program for a complete new kitchen in the same footprint. A designer can help you decide during a consultation.",
        ],
      },
    ],
  },
  {
    title: "Bathrooms",
    items: [
      {
        q: "What is the Fast Bath Program?",
        a: [
          "Fast Bath is our quick, quality bathroom upgrade that keeps your existing layout and is completed in about 3 days. It covers tub-to-shower and shower-to-tub conversions, tub and shower replacements and surrounds, and vanity and fixture upgrades.",
        ],
      },
      {
        q: "How much does Fast Bath cost?",
        a: ["Fast Bath pricing: [starting price to confirm]. Our Bathroom AI Estimator will give you a ballpark price online once pricing is published."],
      },
      {
        q: "Do you do full custom bathroom remodels?",
        a: ["Yes. We design and build custom, high-end primary suites, hall baths and powder rooms, with every finish selected in our Lacey showroom."],
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        q: "Where is your showroom?",
        a: [
          "Our sister company's showroom, Heritage Design Center, is at 8695 Martin Way E #101, Lacey, WA 98516. It is open Monday to Friday, 9:00 to 5:30, and on Saturday by appointment.",
        ],
      },
      {
        q: "Are you licensed and insured?",
        a: ["Yes. Heritage Design & Construction is licensed and insured in Washington State. Contractor license: [# to confirm]."],
      },
      {
        q: "Do you offer a warranty?",
        a: ["Yes. Our work is backed by a 5-year warranty."],
      },
      {
        q: "What areas do you serve?",
        a: [
          "We are based in Lacey and serve twenty South Sound communities, including Olympia, Tumwater, Tacoma, Puyallup, Lakewood, Gig Harbor, Federal Way, Centralia, Yelm and Shelton.",
        ],
      },
      {
        q: "Do you take on commercial projects?",
        a: ["Yes. We handle commercial construction and tenant improvements for tenants, landlords and brokers."],
      },
      {
        q: "Can I stay in my home during a remodel?",
        a: ["[Answer to confirm with the owner.]"],
      },
      {
        q: "Do you offer financing?",
        a: ["[Financing partner and terms to confirm.]"],
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources · FAQs"
        title={<>Questions, <em>answered.</em></>}
        lede="Straight answers about our programs, our showroom and how we work. Don't see your question? Give us a call."
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "FAQs", href: "/resources/faqs" }]}
      >
        <a className="btn btn-chrome" href="tel:+13605573444">Call (360) 557-3444</a>
      </PageHero>

      <section className="band bg-off on-light">
        <div className="wrap">
          {GROUPS.map((g) => (
            <div className="faq-group" key={g.title}>
              <h2>{g.title}</h2>
              <div className="faq">
                {g.items.map((it) => (
                  <details key={it.q}>
                    <summary>{it.q}</summary>
                    <div className="ans">
                      {it.a.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
          <div className="btns" style={{ marginTop: 56 }}>
            <Link className="btn btn-ink" href="/contact">Ask us anything →</Link>
          </div>
        </div>
      </section>

      <Contact />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: GROUPS.flatMap((g) => g.items)
            .filter((it) => !it.a.join(" ").startsWith("["))
            .map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a.join(" ") },
            })),
        }}
      />
    </>
  );
}
