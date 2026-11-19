// Parallel ink cuts form a relief drawing. Each foreground slice masks the one behind it.
const ridges = Array.from({ length: 64 }, (_, row) => {
  const t = row / 63;
  const points = Array.from({ length: 121 }, (_, col) => {
    const u = col / 120;
    const peak = (x: number, spread: number) => Math.max(0, 1 - Math.abs(u - x) / spread);
    const silhouette = 125 * peak(.57 - .12*t, .32) + 64 * peak(.24 + .1*t, .25) + 88 * peak(.84, .21);
    const cut = 8*Math.sin(u*38 + t*6) + 4*Math.sin(u*83 - t*8) + 2*Math.cos(u*189 + t*3);
    const y = 166 + t*84 - (silhouette + cut) * (1 - t*.92);
    return `${col === 0 ? 'M' : 'L'}${col*4},${y.toFixed(1)}`;
  });
  return points.join(' ') + ' L480,265 H0 Z';
});

export const SurveyPlate = () => (
  <figure className="survey-plate">
    <svg viewBox="0 0 480 265" role="img" aria-label="Imagined mountain relief drawn in parallel ink lines beneath a vermilion sun">
      <defs><pattern id="survey-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="currentColor" strokeOpacity=".13" /></pattern></defs>
      <rect width="480" height="265" fill="url(#survey-grid)" />
      <circle cx="335" cy="63" r="50" fill="var(--vermilion)" />
      <g fill="var(--paper)" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round">{ridges.map((d, i) => <path key={i} d={d} />)}</g>
      <path d="M6 15V6h9m450 0h9v9M6 250v9h9m450 0h9v-9" fill="none" stroke="currentColor" />
    </svg>
    <figcaption className="guide-label"><span>Fig. 01 / Imagined relief</span><span>KTM · NP</span></figcaption>
  </figure>
);
