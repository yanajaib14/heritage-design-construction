import { SITE } from "@/lib/site";

// Turns the showroom address and our phone numbers inside plain copy into links (directions, tap to call).
const RE = /(8695 Martin Way E #101(?:, Lacey(?:, WA)?(?: 98516)?)?|\(360\) 557-344[14])/g;

export default function Linkify({ text }: { text: string }) {
  return (
    <>
      {text.split(RE).map((part, i) => {
        if (i % 2 === 0) return part;
        if (part.startsWith("8695"))
          return <a key={i} href={SITE.directions} target="_blank" rel="noopener">{part}</a>;
        return <a key={i} href={part.endsWith("1") ? SITE.showroomTel : SITE.tel}>{part}</a>;
      })}
    </>
  );
}
