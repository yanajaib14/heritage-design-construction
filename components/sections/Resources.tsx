const GUIDES = [
  { href: "/resources/financing", k: "Financing", t: "Flexible ways to invest.", d: "[Financing partner, terms overview.]" },
  { href: "/resources/faqs", k: "FAQs", t: "Questions, answered.", d: "[Timelines, permits, living at home during a remodel.]" },
];
const ARTICLES = [["Kitchens", "[Article title]"], ["Bathrooms", "[Article title]"], ["Commercial", "[Article title]"]];

export default function Resources() {
  return (
    <section className="band bg-paper on-light" id="resources">
      <div className="wrap">
        <div className="ed-head">
          <div><div className="eyebrow">Resources</div><h2 className="h2">Planning <em>resources.</em></h2></div>
          <p className="ed-aside"><a href="/resources/advice-blog">All articles →</a></p>
        </div>
        <ul className="idx">
          {GUIDES.map((g) => (
            <li key={g.k}><a href={g.href}><span className="idx-k">{g.k}</span><span className="idx-t">{g.t}</span><span className="idx-d tbd">{g.d}</span><i aria-hidden="true">→</i></a></li>
          ))}
          {ARTICLES.map(([k, t], i) => (
            <li key={k + i}><a href="/resources/advice-blog"><span className="idx-k">Journal · {k}</span><span className="idx-t tbd">{t}</span><span className="idx-d tbd">[X] min read</span><i aria-hidden="true">→</i></a></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
