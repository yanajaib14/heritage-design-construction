import { RATING, reviewsFor, type Service } from "@/lib/reviews";

// One client review that matches the page's service (a [placeholder] slot until a matching one exists).
export default function PageReview({ tags }: { tags: Service[] }) {
  const r = reviewsFor(tags)[0];
  if (!r) return null;
  return (
    <section className="band bg-paper on-light">
      <figure className="wrap td-quote">
        <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
        <figcaption>{r.name} · {r.project}</figcaption>
      </figure>
    </section>
  );
}

// Google rating slot, shown near buttons until the real rating is in.
export function RatingSlot({ className = "" }: { className?: string }) {
  return (
    <p className={`rating ${className}`.trim()}>
      <span className="tbd">{RATING.stars}</span> <span aria-hidden="true">★</span> from <span className="tbd">{RATING.count}</span> Google reviews
    </p>
  );
}
