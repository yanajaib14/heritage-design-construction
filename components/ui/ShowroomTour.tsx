"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Stop = { t: string; p: string; src: string; alt: string };

// A walk through the Lacey showroom: one large photo, numbered stops beside it.
// It moves on by itself until the visitor picks a stop.
export default function ShowroomTour({ stops, tourUrl }: { stops: Stop[]; tourUrl?: string }) {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const [open3d, setOpen3d] = useState(false);

  useEffect(() => {
    if (!auto || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % stops.length), 5000);
    return () => clearInterval(id);
  }, [auto, stops.length]);

  const go = (n: number) => {
    setAuto(false);
    setI((n + stops.length) % stops.length);
  };

  return (
    <div className="tour">
      <div className="tour-stage">
        {open3d && tourUrl ? (
          <iframe src={tourUrl} title="3D tour of the Heritage showroom" allow="fullscreen; xr-spatial-tracking" allowFullScreen />
        ) : (
          stops.map((s, n) => (
            <figure key={s.src} className={n === i ? "on" : undefined} aria-hidden={n !== i}>
              <Image src={s.src} alt={s.alt} fill sizes="(max-width: 860px) 100vw, 62vw" />
            </figure>
          ))
        )}
        <div className="tour-bar">
          <span>{String(i + 1).padStart(2, "0")} / {String(stops.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => go(i - 1)} aria-label="Previous stop">←</button>
          <button type="button" onClick={() => go(i + 1)} aria-label="Next stop">→</button>
        </div>
        {auto && !open3d && <i className="tour-progress" key={i} aria-hidden="true"></i>}
      </div>
      <ol className="tour-stops">
        {stops.map((s, n) => (
          <li key={s.t} className={n === i ? "on" : undefined}>
            <button type="button" onClick={() => { setOpen3d(false); go(n); }} aria-current={n === i}>
              <span>{String(n + 1).padStart(2, "0")}</span>
              <b>{s.t}</b>
            </button>
            <p>{s.p}</p>
          </li>
        ))}
      </ol>
      <div className="tour-3d">
        {tourUrl ? (
          <button type="button" className="btn" onClick={() => setOpen3d((o) => !o)}>{open3d ? "Back to the photo tour" : "Step inside: 3D tour →"}</button>
        ) : (
          <span className="tbd">[Add the 3D virtual tour link (for example Matterport) and it opens here.]</span>
        )}
      </div>
    </div>
  );
}
