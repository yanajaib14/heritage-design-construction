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
          <ol>
            {REASONS.map(([t, p], i) => (
              <li key={t}>
                <span className="rn">{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{t}</h3><p>{p}</p></div>
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
