'use client';

import { motion } from 'framer-motion';

/**
 * 背景装飾：
 * - 動くグリッド
 * - 脈打つオーブ（大きな光球）
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

      {/* 脈打つオーブ×3（呼吸するような光球） */}
      {[
        { top: '15%', left: '12%', size: 420, hue: 'electric', delay: 0, duration: 6 },
        { top: '60%', left: '78%', size: 360, hue: 'electric', delay: 1.5, duration: 7.5 },
        { top: '80%', left: '20%', size: 300, hue: 'navy', delay: 3, duration: 9 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            background:
              orb.hue === 'electric'
                ? 'radial-gradient(circle, rgba(0,212,255,0.35) 0%, rgba(0,212,255,0) 70%)'
                : 'radial-gradient(circle, rgba(30,58,138,0.5) 0%, rgba(30,58,138,0) 70%)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* 中央の放射グロー */}
      <div className="absolute inset-0 bg-radial-glow opacity-70" />

      {/* 斜めの光線ストリーク×5（密度アップ） */}
      {[
        { top: '8%', delay: 0, duration: 7, thickness: 1 },
        { top: '28%', delay: 3, duration: 9, thickness: 1 },
        { top: '45%', delay: 1.5, duration: 6, thickness: 2 }, // 強めの1本
        { top: '62%', delay: 5, duration: 8, thickness: 1 },
        { top: '82%', delay: 2, duration: 6.5, thickness: 1 },
      ].map((s, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-r from-transparent via-electric-400 to-transparent"
          style={{
            top: s.top,
            height: s.thickness,
            width: '65%',
            transform: 'rotate(-8deg)',
            transformOrigin: 'left center',
            opacity: s.thickness === 2 ? 0.9 : 0.6,
          }}
          initial={{ x: '-80%', opacity: 0 }}
          animate={{ x: ['-80%', '180%'], opacity: [0, s.thickness === 2 ? 0.9 : 0.6, 0] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* 下部フェード：次セクションへの継ぎ目 */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-abyss-950" />
    </div>
  );
}
