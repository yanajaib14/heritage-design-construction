import Image from "next/image";
import type React from "react";

// Drag-to-compare before/after photo. lib/site-effects.js wires every .ba on the page.
export default function BeforeAfter({ before, after, beforeAlt, afterAlt, className = "", sizes = "(max-width: 860px) 100vw, 60vw" }: { before: string; after: string; beforeAlt: string; afterAlt: string; className?: string; sizes?: string }) {
  return (
    <div className={`ba ${className}`.trim()} style={{ "--p": "50%" } as React.CSSProperties}>
      <Image src={after} alt={afterAlt} fill sizes={sizes} />
      <div className="ba-before"><Image src={before} alt={beforeAlt} fill sizes={sizes} /></div>
      <i className="ba-line" aria-hidden="true"><b></b></i>
      <span className="ba-tag l" aria-hidden="true">Before</span><span className="ba-tag r" aria-hidden="true">After</span>
      <input type="range" min="0" max="100" defaultValue="50" aria-label="Drag to compare before and after" />
    </div>
  );
}
