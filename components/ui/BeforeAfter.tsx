import type React from "react";

// Drag-to-compare before/after photo. lib/site-effects.js wires every .ba on the page.
export default function BeforeAfter({ before, after, beforeAlt, afterAlt, className = "" }: { before: string; after: string; beforeAlt: string; afterAlt: string; className?: string }) {
  return (
    <div className={`ba ${className}`.trim()} style={{ "--p": "50%" } as React.CSSProperties}>
      <img src={after} alt={afterAlt} loading="lazy" />
      <div className="ba-before"><img src={before} alt={beforeAlt} loading="lazy" /></div>
      <i className="ba-line" aria-hidden="true"><b></b></i>
      <span className="ba-tag l" aria-hidden="true">Before</span><span className="ba-tag r" aria-hidden="true">After</span>
      <input type="range" min="0" max="100" defaultValue="50" aria-label="Drag to compare before and after" />
    </div>
  );
}
