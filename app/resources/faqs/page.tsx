import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/faqs" },
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
        q: "Why can a 10-Day kitchen be finished in 10 business days?",
        a: ["We pre-order and stage every material before day one, so there's no waiting on deliveries. A dedicated crew works on your kitchen every day, following a set plan that removes the downtime of a traditional remodel."],
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
      {
        q: "Do I need a permit for my kitchen remodel?",
        a: ["It depends on the scope. Standard cabinet and countertop replacements typically don't require permits. Structural changes, moving plumbing or adding electrical circuits may. We assess this during your consultation."],
      },
      {
        q: "What countertop materials do you recommend?",
        a: ["We often recommend quartz, which offers the look of natural stone with excellent durability and low maintenance. We can also source granite, marble and other materials to suit your style and budget."],
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
      {
        q: "Can you convert my bathtub into a walk-in shower?",
        a: ["Yes. Tub-to-shower conversions are one of our most popular bath upgrades. We handle the plumbing adjustments, waterproofing, tile or wall systems and fixture installation."],
      },
      {
        q: "What is the best flooring for a bathroom?",
        a: ["Porcelain tile is our top choice for bathroom floors: water-resistant, durable and available in countless styles. Luxury vinyl plank (LVP) is another excellent option that feels warmer underfoot and is fully waterproof."],
      },
      {
        q: "How do I make a small bathroom feel bigger?",
        a: ["Large-format tiles with fewer grout lines, frameless glass shower enclosures, floating vanities and well-placed lighting all make a small bathroom feel more open. We design with these in mind."],
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
        a: ["Yes. Every project comes with a 5-year warranty on our workmanship, and manufacturers' material warranties are passed through to you."],
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
        q: "Do you handle both design and installation?",
        a: ["Yes. We are a full design-build firm. From your consultation and 3D design through selections in our showroom and final installation, one team manages your whole project."],
      },
      {
        q: "What happens if something goes wrong during the remodel?",
        a: ["We address issues right away and openly. We keep you informed throughout, and our 5-year workmanship warranty backs every installation."],
      },
      {
        q: "How do I get started?",
        a: ["Book a free consultation. We'll look at your space, talk through your goals and give you a clear quote, typically within a few days of the visit."],
      },
      {
        q: "Can I stay in my home during a remodel?",
        a: ["Yes, most homeowners stay home during their remodel. We work efficiently to keep disruption low and keep the work area clean and safe. The room being remodeled will be unavailable while we work."],
      },
      {
        q: "Do you offer financing?",
        a: ["Yes. Our preferred lender is GreenSky, with monthly payment plans and promotional options for qualified homeowners. Home equity lines, cash-out refinancing and renovation loans are other common ways to fund a remodel. See our financing page for details."],
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
        image="/images/pf-essential.webp"
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

      <Contact title={<>Still have questions? <em>Let’s talk.</em></>} />

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
