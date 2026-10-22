import Image from "next/image";
import { REASONS } from "@/components/sections/Why";
import { Quotes } from "@/components/sections/Stories";
import { reviewsFor } from "@/lib/reviews";

// Homepage: why Heritage on the left, what clients say on the right.
export default function WhyReviews() {
  return (
    <section className="band bg-paper on-light wr" id="why">
      <div className="wrap wr-grid">
        <div className="wr-why">
          <div className="eyebrow">Why Heritage</div>
          <h2 className="h2">Not just a contractor. <em>A design-build house.</em></h2>
          <figure className="wr-fig">
            <Image src="/images/about-team.webp" alt="The Heritage team in the showroom" fill sizes="100vw" />
          </figure>
          <ol>
            {REASONS.map(([t, p]) => (
              <li key={t}>
                <h3>{t}</h3><p>{p}</p>
              </li>
            ))}
          </ol>
          <a className="link" href="/about">About us →</a>
        </div>
        <div className="wr-quotes">
          <Quotes list={reviewsFor().filter((r) => !r.placeholder)} />
        </div>
      </div>
    </section>
  );
}
