import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Intro, Steps, Tbd, Gallery } from "@/components/ui/Blocks";
import Why from "@/components/sections/Why";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Family owned since 2004, Heritage Design & Construction has completed 800+ remodeling projects across the South Sound.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={<>Since 2004, <em>built on trust.</em></>}
        lede="A family-owned team that has been designing and building South Sound homes for two decades."
        crumbs={[{ label: "About", href: "/about" }, { label: "Our Story", href: "/about/our-story" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a Consultation →</Link>
      </PageHero>
      <Intro eyebrow="Where we started" title={<>A family <em>business.</em></>}>
        <p>
          Heritage Design &amp; Construction has been remodeling homes across the South Sound since <strong>2004</strong>, with
          more than <strong>800 projects</strong> completed.
        </p>
        <p><Tbd>[Founder story: who started the company, why, and the first projects.]</Tbd></p>
        <p><Tbd>[Family photo or team photo.]</Tbd></p>
      </Intro>
      <Intro eyebrow="A new name" title={<>From 10 Day Kitchens <em>to Heritage.</em></>} bg="paper">
        <p>
          You may know us as <strong>10 Day Kitchens</strong>. As our clients asked for custom kitchens, whole-home remodels and
          commercial build-outs, we grew into a full design-build company. Heritage Design &amp; Construction is the name for
          everything we do today.
        </p>
        <p><Tbd>[Anything else you want to say about the rebrand.]</Tbd></p>
      </Intro>
      <Steps
        eyebrow="Milestones"
        title={<>Two decades <em>of building.</em></>}
        steps={[
          { title: "2004", text: "Family owned company founded." },
          { title: "[Year]", text: "[Milestone, e.g. showroom opens.]" },
          { title: "[Year]", text: "[Milestone, e.g. Heritage Design & Construction launches.]" },
        ]}
      />
      <Gallery eyebrow="Our team" title={<>The people <em>behind the work.</em></>} labels={["[Team photo · name, role]", "[Team photo · name, role]", "[Team photo · name, role]"]} />
      <Why />
      <Contact />
    </>
  );
}
