import { reviewsFor, type Service } from "@/lib/reviews";

// Client reviews matching the page's services, one at a time with previous/next.
export default function Stories({ tags, bg = "paper" }: { tags?: Service[]; bg?: "paper" | "off" }) {
  const list = reviewsFor(tags).slice(0, 4);
  return (
    <section className={`band bg-${bg} on-light`} id="stories">
      <div className="wrap stories">
        <div className="left">
          <div className="eyebrow">Client stories</div>
          <h2 className="h2">Trusted by <em>our clients.</em></h2>
        </div>
        <Quotes list={list} />
      </div>
    </section>
  );
}

export function Quotes({ list }: { list: ReturnType<typeof reviewsFor> }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="rq" aria-live="polite">
      <div className="mk" aria-hidden="true">“</div>
      {list.map((r, i) => (
        <figure key={r.quote} className={i ? "" : "on"} hidden={i > 0}>
          <blockquote>{r.quote}</blockquote>
          <figcaption>{r.name} · {r.project}</figcaption>
        </figure>
      ))}
      {list.length > 1 && (
        <div className="pager">
          <button type="button" className="rq-prev" aria-label="Previous review">←</button>
          <span className="rq-n">{pad(1)} / {pad(list.length)}</span>
          <button type="button" className="rq-next" aria-label="Next review">→</button>
        </div>
      )}
    </div>
  );
}
