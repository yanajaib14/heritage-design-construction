"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Photo = { img: string; alt: string };
type Filter = "all" | "kitchen" | "bath";

const kind = (p: Photo): Filter => (/kitchen/i.test(p.alt) ? "kitchen" : "bath");
// "A navy kitchen with..." reads as a caption once the leading article is dropped
const caption = (alt: string) => alt.replace(/^(a|an|the)\s+/i, "").replace(/^./, (c) => c.toUpperCase());

// Homepage gallery of finished projects: an editorial grid with a kitchen / bathroom filter.
// Any photo opens full size in a viewer with arrows, keyboard and a thumbnail strip.
export default function ProjectGallery({ photos }: { photos: Photo[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [cur, setCur] = useState<number | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const shown = photos.filter((p) => filter === "all" || kind(p) === filter);
  const count = (f: Filter) => (f === "all" ? photos.length : photos.filter((p) => kind(p) === f).length);

  const open = (i: number) => {
    setCur(i);
    dlg.current?.showModal?.();
  };
  const step = useCallback((d: number) => setCur((c) => (c === null ? c : (c + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    const onClose = () => setCur(null);
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  const p = cur === null ? null : shown[cur];
  return (
    <div className="pg">
      <div className="pg-bar">
        <h3>More finished projects</h3>
        <div className="pg-filters" role="group" aria-label="Filter projects">
          {([["all", "All"], ["kitchen", "Kitchens"], ["bath", "Bathrooms"]] as [Filter, string][]).map(([f, l]) => (
            <button key={f} type="button" className={filter === f ? "on" : undefined} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {l}<sup>{count(f)}</sup>
            </button>
          ))}
        </div>
      </div>
      <ul className={`pg-grid pg-${filter}`}>
        {shown.map((g, i) => (
          <li key={g.img}>
            <button type="button" onClick={() => open(i)} aria-label={`View larger: ${g.alt}`}>
              <Image src={g.img} alt={g.alt} fill sizes="(max-width: 860px) 50vw, 33vw" />
              <span className="pg-cap" aria-hidden="true">
                <small>{kind(g) === "kitchen" ? "Kitchen" : "Bathroom"} · {String(i + 1).padStart(2, "0")}</small>
                <b>{caption(g.alt)}</b>
              </span>
              <span className="pg-zoom" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dlg}
        className="pg-view"
        aria-label="Project photo"
        onClick={(e) => { if (e.target === e.currentTarget) dlg.current?.close(); }}
        onKeyDown={(e) => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); }}
      >
        {p && (
          <>
            <figure className="pg-big">
              <Image key={p.img} src={p.img} alt={p.alt} fill sizes="94vw" />
            </figure>
            <div className="pg-meta">
              <span>{String((cur ?? 0) + 1).padStart(2, "0")} / {String(shown.length).padStart(2, "0")}</span>
              <b>{caption(p.alt)}</b>
            </div>
            <ol className="pg-strip">
              {shown.map((g, i) => (
                <li key={g.img} className={i === cur ? "on" : undefined}>
                  <button type="button" onClick={() => setCur(i)} aria-label={`Photo ${i + 1}`} aria-current={i === cur}>
                    <Image src={g.img} alt="" fill sizes="96px" />
                  </button>
                </li>
              ))}
            </ol>
          </>
        )}
        <button type="button" className="pg-x" aria-label="Close" onClick={() => dlg.current?.close()}>×</button>
        <button type="button" className="pg-prev" aria-label="Previous photo" onClick={() => step(-1)}>←</button>
        <button type="button" className="pg-next" aria-label="Next photo" onClick={() => step(1)}>→</button>
      </dialog>
    </div>
  );
}
