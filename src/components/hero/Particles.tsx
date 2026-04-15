'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * 浮遊パーティクル：小さな光粒がゆっくり上昇＆フェードする装飾。
 * 決定論的に位置を生成（Next.js の SSR hydration 不一致を避けるため、useMemo で1度だけ）。
 */
export function Particles({ count = 28 }: { count?: number }) {
  const particles = useMemo(() => {
    // 決定論的 PRNG（mulberry32）で毎回同じ配置を得る
    let seed = 42;
    const rand = () => {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return Array.from({ length: count }, () => ({
      left: rand() * 100, // %
      size: 1 + rand() * 2.5, // px (小さめ)
      duration: 8 + rand() * 10, // 8〜18秒で上昇
      delay: rand() * 12, // 開始をばらす
      drift: (rand() - 0.5) * 40, // 左右にゆらぐ量
      opacity: 0.3 + rand() * 0.6,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-electric-300"
          style={{
            left: `${p.left}%`,
            bottom: '-4%',
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 4}px rgba(0, 212, 255, 0.9)`,
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: ['0vh', '-120vh'],
            x: [0, p.drift, -p.drift * 0.5, 0],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}
    </div>
  );
}
