import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Cards } from "@/components/ui/Blocks";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Resources",
  description: "FAQs, financing and planning advice for your remodel from Heritage Design & Construction.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Plan with <em>confidence.</em></>}
        lede="Answers, financing and advice to help you plan your project."
        crumbs={[{ label: "Resources", href: "/resources" }]}
      />
      <Cards
        eyebrow="Explore"
        title={<>Everything you need <em>to get started.</em></>}
        cards={[
          { icon: "chat", title: "FAQs", text: "Straight answers about our programs, showroom and process.", href: "/resources/faqs", cta: "Read FAQs" },
          { icon: "key", title: "Financing", text: "Flexible ways to invest in your home.", href: "/resources/financing", cta: "Explore financing" },
          { icon: "pencil", title: "Advice / Blog", text: "Ideas and practical advice for planning your project.", href: "/resources/advice-blog", cta: "Read the blog" },
        ]}
      />
      <Contact variant="ink" />
    </>
  );
}
