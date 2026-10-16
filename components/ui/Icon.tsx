// Line icons in the same style as the homepage cards.
const PATHS: Record<string, string[]> = {
  pencil: ["M3 21l3.5-1 11-11-2.5-2.5-11 11L3 21z", "M14 6l2.5 2.5", "M13 21h8"],
  store: ["M3 4h18l-1 5H4z", "M8 4l-1 5M12 4v5M16 4l1 5", "M5 9v11h14V9", "M10 20v-6h4v6"],
  home: ["M3 11l9-7 9 7", "M5 10v10h14V10", "M10 20v-5h4v5"],
  shield: ["M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z", "M8.5 12l2.5 2.5 4.5-5"],
  building: ["M4 21V5l8-2v18", "M12 8h8v13", "M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2", "M2 21h20"],
  cube: ["M12 3l8 4.5v9L12 21l-8-4.5v-9z", "M12 12l8-4.5M12 12v9M12 12L4 7.5"],
  layers: ["M12 3l9 5-9 5-9-5z", "M3 13l9 5 9-5"],
  key: ["M14 10a4 4 0 1 0-4 4", "M10 14l-7 7", "M6 18l2 2", "M14 10l7-7", "M18 6l2 2"],
  drop: ["M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"],
  clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7v5l3 2"],
  grid: ["M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"],
  chat: ["M4 5h16v11H8l-4 4z", "M8 9h8M8 12h5"],
};

export default function Icon({ name }: { name: keyof typeof PATHS | string }) {
  return (
    <span className="ic" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        {(PATHS[name] ?? PATHS.home).map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    </span>
  );
}
