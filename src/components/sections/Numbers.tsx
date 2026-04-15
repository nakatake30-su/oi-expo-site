'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { eventStats } from '@/data/event';

/**
 * ビューポート進入時にカウントアップする数字
 */
function Counter({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return <span ref={ref}>{value.toLocaleString('ja-JP')}</span>;
}

export function Numbers() {
  return (
    <section className="relative overflow-hidden border-y border-electric-500/10 bg-navy-950/50 py-20 sm:py-28">
      {/* 背景のグリッドアクセント */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50"
        style={{ backgroundSize: '60px 60px' }}
        aria-hidden
      />
      <div className="container-narrow relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-electric-400" />
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-bold tracking-widest text-electric-300">数字で見るEXPO</span>
              <span className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.35em] text-electric-400/80">
                By the Numbers
              </span>
            </div>
            <span className="h-[1px] w-8 bg-electric-400" />
          </div>
          <h2 className="text-2xl font-black text-white sm:text-3xl md:text-4xl">
            2日間で動く、この規模感。
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {eventStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-abyss-950/60 p-6 text-center backdrop-blur-sm"
            >
              <div className="font-display text-5xl font-black leading-none text-electric-400 sm:text-6xl md:text-7xl">
                <Counter to={s.value} />
                <span className="text-3xl text-electric-300/80 sm:text-4xl">{s.suffix}</span>
              </div>
              <div className="mt-3 text-sm font-semibold text-white">{s.label}</div>
              <div className="mt-0.5 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-electric-400/60">
                {s.label === '登壇者' && 'Speakers'}
                {s.label === 'セッション' && 'Sessions'}
                {s.label === '出展企業' && 'Exhibitors'}
                {s.label === '想定来場者' && 'Visitors'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
