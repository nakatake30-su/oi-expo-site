'use client';

/**
 * キーワードマーキー：テーマワードが横に流れ続ける帯。
 * イベント系サイトの定番演出で、情報密度と"勢い"を同時に演出する。
 * 純粋 CSS アニメーションで軽量。
 */
const topics = [
  'R&D STRATEGY',
  'STARTUP COLLABORATION',
  'AI × DIGITAL',
  'ROBOTICS',
  'DEEP TECH',
  'UNIVERSITY SPINOUT',
  'NEW BUSINESS',
  'OPEN INNOVATION',
  'CARVE-OUT',
  'GREEN TECH',
  'QUANTUM',
  'SPACE',
];

export function TopicMarquee() {
  // 2回繰り返して無限スクロール感を担保
  const items = [...topics, ...topics];

  return (
    <div className="relative w-full overflow-hidden border-y border-electric-500/20 bg-abyss-950/40 backdrop-blur-sm">
      <div
        className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-10 py-3"
        style={{
          // keyframes は globals.css で定義済みでも良いが、ここでインラインでも動かす
        }}
      >
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-xs font-bold uppercase tracking-[0.35em] text-electric-300/90 sm:text-sm">
              {t}
            </span>
            <span className="text-electric-500/60" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>

      {/* 左右のフェード */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-abyss-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-abyss-950 to-transparent" />

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
