import Image from "next/image";
import { REASONS } from "@/components/sections/Why";
import { Quotes } from "@/components/sections/Stories";
import { reviewsFor } from "@/lib/reviews";

// Homepage: a framed team photo with a client review laid over it, beside the reasons to choose Heritage.
// On phones the pieces interleave: heading, photo, reasons, then the review.
export default function WhyReviews() {
  return (
    <section className="band bg-paper on-light wr" id="why">
      <div className="wrap wr-grid">
        <div className="wr-media">
          <figure className="wr-fig">
            <Image src="/images/about-team.webp" alt="The Heritage team in the showroom" fill sizes="(max-width: 860px) 100vw, 45vw" />
          </figure>
          <div className="wr-quotes">
            <Quotes list={reviewsFor().filter((r) => !r.placeholder)} />
          </div>
        </div>
        <div className="wr-why">
          <div className="eyebrow">Why Heritage</div>
          <h2 className="h2">Not just a contractor. <em>A design-build house.</em></h2>
          <ol>
            {REASONS.map(([t, p]) => (
              <li key={t}>
                <h3>{t}</h3><p>{p}</p>
              </li>
            ))}
          </ol>
          <a className="link" href="/about">About us →</a>
        </div>
      </div>
    </section>
  );
}
