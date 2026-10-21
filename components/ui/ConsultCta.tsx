import type { ReactNode } from "react";
import QuickConsultForm from "@/components/ui/QuickConsultForm";
import { SITE } from "@/lib/site";

// Closing consultation block for the program pages: headline and three next steps on a dark band,
// a short booking form in a light card beside them.
export default function ConsultCta({
  id,
  title,
  text,
  steps,
  trust,
  program,
}: {
  id?: string;
  title: ReactNode;
  text: string;
  steps: { t: string; p: string }[];
  trust: string;
  program: string;
}) {
  return (
    <section className="cc" id={id}>
      <div className="wrap cc-grid">
        <div className="cc-copy">
          <div className="eyebrow">Ready to start planning?</div>
          <h2>{title}</h2>
          <p className="cc-lede">{text}</p>
          <ol className="cc-steps">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span>{i + 1}</span>
                <b>{s.t}</b>
                <p>{s.p}</p>
              </li>
            ))}
          </ol>
          <div className="cc-foot">
            <a className="cc-call" href={SITE.tel}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
              Prefer to talk? {SITE.phone}
            </a>
            <p className="cc-trust">{trust}</p>
          </div>
        </div>
        <div className="cc-side">
          <div className="cc-card">
            <h3>Book your free consultation</h3>
            <p>Free, no pressure, and right in your home.</p>
            <QuickConsultForm program={program} />
          </div>
          <p className="cc-alt">Not ready for a home visit? <a href={SITE.tel}>Call us at {SITE.phone}</a></p>
        </div>
      </div>
    </section>
  );
}
