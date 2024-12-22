"use client";

import { useEffect, useState } from "react";

//  ┌░▒▓█┐  ┌░▒▓█┐  ┌░▒▓█┐  ┌░▒▓█┐  ┌░▒▓█┐
//  │    │  │   *│  │    │  │    │  │ =  │
//  │═ ═ │  │x x │  │0 0 │  │. . │  │> < │
//  └─┬┬─┘  └─┬┬─┘  └ / ─┘  └─┬┬─┘  └─┬┬─┘

const frames = [
  `
┌░▒▓█┐
│    │
│. . │
└─┬┬─┘
`,
  `
┌░▒▓█┐
│    │
│_ _ │
└─┬┬─┘
`,
  `
┌░▒▓█┐
│    │
│ . .│
└─┬┬─┘
`,
  `
┌░▒▓█┐
│    │
│ _ _│
└─┬┬─┘
`,
];

const framesLooking = [
  `
┌░▒▓█┐
│0 0 │
│    │
└─┬┬─┘
`,
  `
┌░▒▓█┐
│ 0 0│
│    │
└─┬┬─┘
`,
  `
┌░▒▓█┐
│    │
│ 0 0│
└─┬┬─┘
`,
  `
┌░▒▓█┐
│    │
│0 0 │
└─┬┬─┘
`,
];

const sequence = [
  0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 3, 2, 2, 0, 0, 0,
];

export function Asciivatar() {
  const [frame, setFrame] = useState(0);
  const [hover, setHover] = useState<0 | 1 | 2 | 3 | 4>(0);

  useEffect(() => {
    const t = setInterval(
      () => setFrame((f) => (f + 1) % (sequence.length - 1)),
      300
    );
    return () => clearInterval(t);
  }, [hover]);

  const face = hover ? framesLooking[hover - 1] : frames[sequence[frame]];

  return (
    <div className="relative w-24 py-4" onMouseLeave={() => setHover(0)}>
      <pre className="leading-[1.2]">{face}</pre>
      <div
        style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          top: 0,
          left: 0,
        }}
        onMouseEnter={() => setHover(1)}
      />
      <div
        style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          top: 0,
          left: "50%",
        }}
        onMouseEnter={() => setHover(2)}
      />
      <div
        style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          top: "50%",
          left: "50%",
        }}
        onMouseEnter={() => setHover(3)}
      />
      <div
        style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          top: "50%",
          left: 0,
        }}
        onMouseEnter={() => setHover(4)}
      />
    </div>
  );
}
