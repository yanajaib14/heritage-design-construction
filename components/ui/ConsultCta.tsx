import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

// Closing consultation block: three next steps beside the request form.
export default function ConsultCta({
  id,
  title,
  steps,
  trust,
}: {
  id?: string;
  title: ReactNode;
  steps: string[];
  trust: string;
}) {
  return (
    <section className="cta2 td-cta" id={id}>
      <div className="wrap td-cta-grid">
        <div className="td-cta-copy">
          <div className="eyebrow">Free consultation</div>
          <h2>{title}</h2>
          <ol>
            {steps.map((s, i) => (
              <li key={s}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="td-trust">{trust}</p>
          <p>
            Prefer to talk? Call <a href={SITE.tel}>{SITE.phone}</a>.
          </p>
        </div>
        <div className="td-cta-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
