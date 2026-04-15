'use client';

/**
 * キーワードマーキー：テーマワードが横に流れ続ける帯。
 * イベント系サイトの定番演出で、情報密度と"勢い"を同時に演出する。
 * 純粋 CSS アニメーションで軽量。
 */
const topics: { ja: string; en: string }[] = [
  { ja: 'R&D戦略', en: 'R&D Strategy' },
  { ja: 'スタートアップ連携', en: 'Startup Collaboration' },
  { ja: 'AI・デジタル活用', en: 'AI × Digital' },
  { ja: 'ロボティクス', en: 'Robotics' },
  { ja: 'ディープテック', en: 'Deep Tech' },
  { ja: '産学連携', en: 'Academia' },
  { ja: '新規事業開発', en: 'New Business' },
  { ja: 'オープンイノベーション', en: 'Open Innovation' },
  { ja: 'カーブアウト', en: 'Carve-out' },
  { ja: 'グリーンテック', en: 'Green Tech' },
  { ja: '量子技術', en: 'Quantum' },
  { ja: '宇宙開発', en: 'Space' },
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
            <span className="flex items-baseline gap-2.5">
              <span className="text-sm font-bold text-white sm:text-base">{t.ja}</span>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-electric-400/80 sm:text-xs">
                {t.en}
              </span>
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
