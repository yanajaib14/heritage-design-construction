"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Stop = { t: string; p: string; src: string; alt: string };

// Homepage teaser for the Lacey showroom tour. The stage drifts through the tour stops and pans with the
// pointer, like looking around the room; clicking it opens the full 3D / video / photo tour on the Lacey page.
export default function ShowroomPreview({ stops, href }: { stops: Stop[]; href: string }) {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const stage = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!auto || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % stops.length), 5200);
    return () => clearInterval(id);
  }, [auto, stops.length]);

  // look-around: the photo is a little larger than the frame and follows the pointer
  const look = (e: React.PointerEvent) => {
    const el = stage.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--lx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--ly", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const rest = () => {
    stage.current?.style.setProperty("--lx", "0");
    stage.current?.style.setProperty("--ly", "0");
  };

  const s = stops[i];
  return (
    <div className="spv">
      <Link ref={stage} className="spv-stage" href={href} onPointerMove={look} onPointerLeave={rest} aria-label="Open the 3D showroom tour on our Lacey showroom page">
        <div className="spv-pan" aria-hidden="true">
          {stops.map((st, n) => (
            <figure key={st.src} className={n === i ? "on" : undefined}>
              <Image src={st.src} alt="" fill sizes="(max-width: 860px) 100vw, 1240px" />
            </figure>
          ))}
        </div>
        <span className="spv-shade" aria-hidden="true"></span>
        <span className="spv-frame" aria-hidden="true"><i></i><i></i><i></i><i></i></span>

        <span className="spv-top">
          <span className="spv-live"><i aria-hidden="true"></i>Virtual showroom tour</span>
          <span className="spv-modes" aria-hidden="true"><b>3D walk-through</b><b>Video</b><b>Photo tour</b></span>
        </span>

        <span className="spv-play" aria-hidden="true">
          <span className="spv-ring"></span>
          <span className="spv-ring r2"></span>
          <span className="spv-btn"><svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg></span>
          <span className="spv-cta">Step inside the showroom</span>
        </span>

        <span className="spv-cap" aria-live="polite">
          <small>Stop {String(i + 1).padStart(2, "0")} / {String(stops.length).padStart(2, "0")}</small>
          <b>{s.t}</b>
          <span>{s.p}</span>
        </span>
        <span className="spv-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.4" /><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>
          Move to look around
        </span>
        {auto && <i className="spv-progress" key={i} aria-hidden="true"></i>}
      </Link>

      <ol className="spv-stops" aria-label="Tour stops">
        {stops.map((st, n) => (
          <li key={st.t} className={n === i ? "on" : undefined}>
            <button type="button" onClick={() => { setAuto(false); setI(n); }} aria-current={n === i} aria-label={`Preview stop ${n + 1}: ${st.t}`}>
              <span className="spv-thumb"><Image src={st.src} alt="" fill sizes="200px" /></span>
              <span className="spv-n">{String(n + 1).padStart(2, "0")}</span>
              <b>{st.t}</b>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
