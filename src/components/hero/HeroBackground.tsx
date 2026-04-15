'use client';

import { motion } from 'framer-motion';

/**
 * 背景装飾：
 * - 動くグリッド
 * - 斜めの光線（ストリーク）複数
 * - 中央の放射グロー
 * 全て CSS + framer-motion で純粋実装（画像アセット不要）
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* グラデーション基調 */}
      <div className="absolute inset-0 bg-neon-fade" />

      {/* 動くグリッド */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern"
        style={{ backgroundSize: '48px 48px' }}
        animate={{ backgroundPosition: ['0 0', '48px 48px'] }}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
      />

      {/* 中央の放射グロー */}
      <div className="absolute inset-0 bg-radial-glow opacity-70" />

      {/* 斜めの光線ストリーク×3 */}
      {[
        { top: '10%', delay: 0, duration: 7 },
        { top: '40%', delay: 2.5, duration: 9 },
        { top: '72%', delay: 5, duration: 6.5 },
      ].map((s, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] w-[60%] bg-gradient-to-r from-transparent via-electric-400/70 to-transparent"
          style={{ top: s.top, transform: 'rotate(-8deg)', transformOrigin: 'left center' }}
          initial={{ x: '-80%', opacity: 0 }}
          animate={{ x: ['-80%', '180%'], opacity: [0, 1, 0] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* 下部フェード：次セクションへの継ぎ目 */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-abyss-950" />
    </div>
  );
}
