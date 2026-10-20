export const BRANDS = [
  { src: "/images/logo-kcd.webp", alt: "Kitchen Cabinet Distributors (KCD)" },
  { src: "/images/logo-lectus.webp", alt: "Lectus Cabinets" },
  { src: "/images/logo-merit.webp", alt: "Merit Kitchens" },
  { src: "/images/logo-showplace.webp", alt: "Showplace Cabinetry" },
  { src: "/images/logo-msi.webp", alt: "MSI Surfaces" },
  { src: "/images/logo-cambria.webp", alt: "Cambria" },
  { src: "/images/logo-caesarstone.webp", alt: "Caesarstone" },
  { src: "/images/logo-vicostone.webp", alt: "Vicostone" },
  { src: "/images/logo-jaaron.webp", alt: "J. Aaron Wood Countertops" },
  { src: "/images/logo-jeffrey.webp", alt: "Jeffrey Alexander Hardware" },
];

export default function Brands() {
  return (
    <div className="brands">
      <div className="wrap b-head"><span className="lbl">Our trusted partners</span><span className="b-sub">Brands on display in our showroom</span></div>
      <div className="marquee" aria-label="Brands we install">
        <ul className="track">
          {BRANDS.map((b) => <li key={b.src}><span className="blogo"><img src={b.src} alt={b.alt} loading="lazy" /></span></li>)}
          {BRANDS.map((b) => <li key={`${b.src}-2`} aria-hidden="true"><span className="blogo"><img src={b.src} alt="" loading="lazy" /></span></li>)}
        </ul>
      </div>
    </div>
  );
}
