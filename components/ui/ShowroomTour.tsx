"use client";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

type Stop = { t: string; p: string; src: string; alt: string };

// A walk through the Lacey showroom: one large photo, numbered stops beside it.
// It moves on by itself until the visitor picks a stop.
type Mode = "3d" | "video" | "photos";

// tourUrl: a 3D walk-through embed (for example Matterport). tourVideo: an .mp4 path or a YouTube/Vimeo embed link.
// Until they exist, their tabs show a placeholder over a dimmed showroom photo.
export default function ShowroomTour({ stops, tourUrl, tourVideo }: { stops: Stop[]; tourUrl?: string; tourVideo?: string }) {
  const [i, setI] = useState(0);
  const [mode, setMode] = useState<Mode>(tourUrl ? "3d" : "photos");
  const [auto, setAuto] = useState(!tourUrl);
  const open3d = mode !== "photos";

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
      <div className="tour-tabs" role="tablist" aria-label="Ways to tour the showroom">
        {([["3d", "3D walk-through"], ["video", "Video tour"], ["photos", "Photo tour"]] as [Mode, string][]).map(([m, l]) => (
          <button key={m} type="button" role="tab" aria-selected={mode === m} className={mode === m ? "on" : undefined} onClick={() => { setMode(m); setAuto(false); }}>{l}</button>
        ))}
      </div>
      <div className="tour-stage">
        {mode === "3d" && (tourUrl ? (
          <iframe src={tourUrl} title="3D walk-through of the Heritage showroom" allow="fullscreen; xr-spatial-tracking" allowFullScreen />
        ) : (
          <Soon img={stops[0].src} label="3D walk-through">[The 3D walk-through from the professional shoot goes here. Visitors will move room to room through the showroom.]</Soon>
        ))}
        {mode === "video" && (tourVideo ? (
          /\.mp4($|\?)/.test(tourVideo) ? (
            <video src={tourVideo} controls playsInline poster={stops[0].src} />
          ) : (
            <iframe src={tourVideo} title="Video tour of the Heritage showroom" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          )
        ) : (
          <Soon img={stops[3].src} label="Video tour">[The showroom video from the professional shoot goes here.]</Soon>
        ))}
        {mode === "photos" && (
          stops.map((s, n) => (
            <figure key={s.src} className={n === i ? "on" : undefined} aria-hidden={n !== i}>
              <Image src={s.src} alt={s.alt} fill sizes="(max-width: 860px) 100vw, 62vw" />
            </figure>
          ))
        )}
        {mode === "photos" && <div className="tour-bar">
          <span>{String(i + 1).padStart(2, "0")} / {String(stops.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => go(i - 1)} aria-label="Previous stop">←</button>
          <button type="button" onClick={() => go(i + 1)} aria-label="Next stop">→</button>
        </div>}
        {auto && !open3d && <i className="tour-progress" key={i} aria-hidden="true"></i>}
      </div>
      <ol className="tour-stops">
        {stops.map((s, n) => (
          <li key={s.t} className={n === i ? "on" : undefined}>
            <button type="button" onClick={() => { setMode("photos"); go(n); }} aria-current={n === i}>
              <span>{String(n + 1).padStart(2, "0")}</span>
              <b>{s.t}</b>
            </button>
            <p>{s.p}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Soon({ img, label, children }: { img: string; label: string; children: React.ReactNode }) {
  return (
    <div className="tour-soon">
      <Image src={img} alt="" fill sizes="(max-width: 860px) 100vw, 62vw" />
      <div>
        <span className="tour-play" aria-hidden="true">▶</span>
        <b>{label}</b>
        <span className="tbd">{children}</span>
      </div>
    </div>
  );
}
