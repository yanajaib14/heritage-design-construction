import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Advice & Blog | Remodeling Resources",
  description: "Planning advice for kitchen, bathroom, whole-home and commercial projects from the Heritage Design & Construction team.",
};

const TOPICS = ["Kitchens", "Bathrooms", "Whole home", "Commercial", "Design"];
const POSTS = [
  { topic: "Kitchens" },
  { topic: "Bathrooms" },
  { topic: "Design" },
  { topic: "Kitchens" },
  { topic: "Whole home" },
  { topic: "Commercial" },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources · Advice"
        title={<>Planning <em>resources.</em></>}
        lede="Ideas and practical advice to help you plan your kitchen, bath or whole-home project."
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Advice / Blog", href: "/resources/advice-blog" }]}
      />

      <section className="band bg-paper on-light">
        <div className="wrap">
          <ul className="topics filters-row" aria-label="Topics">
            {TOPICS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="posts">
            {POSTS.map((p, i) => (
              <article key={i}>
                <div className="ph">Article image</div>
                <span className="num">{p.topic} · [X] min read</span>
                <h3>[Article title]</h3>
                <p>[One-sentence summary of the article.]</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact variant="ink" image="/images/pf-essential.webp" />
    </>
  );
}
