// Particules décoratives qui flottent doucement (fond bleu du hero / CTA).
const PARTICLES = [
  { left: "8%", top: "70%", size: 6, duration: 9, delay: 0 },
  { left: "18%", top: "40%", size: 4, duration: 11, delay: 1.5 },
  { left: "27%", top: "80%", size: 8, duration: 13, delay: 0.8 },
  { left: "38%", top: "55%", size: 5, duration: 10, delay: 2.2 },
  { left: "47%", top: "78%", size: 4, duration: 12, delay: 0.4 },
  { left: "58%", top: "35%", size: 7, duration: 14, delay: 1.1 },
  { left: "66%", top: "68%", size: 5, duration: 9.5, delay: 2.6 },
  { left: "74%", top: "48%", size: 6, duration: 11.5, delay: 0.6 },
  { left: "83%", top: "75%", size: 4, duration: 13, delay: 1.8 },
  { left: "90%", top: "42%", size: 7, duration: 10.5, delay: 1.2 },
  { left: "13%", top: "20%", size: 5, duration: 12.5, delay: 2 },
  { left: "52%", top: "18%", size: 4, duration: 11, delay: 0.9 },
];

export default function Particles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="animate-particle absolute rounded-full bg-white/60"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
