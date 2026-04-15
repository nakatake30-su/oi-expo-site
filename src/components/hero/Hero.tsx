'use client';

import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { Particles } from './Particles';
import { eventInfo } from '@/data/event';

export function Hero() {
  // 各要素を順番にフェードイン・スライドアップする
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 sm:pb-32 sm:pt-40">
      <HeroBackground />
      <Particles count={32} />

      {/* コンテンツ */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Eyebrow：開催日・会場（英字） */}
        <motion.div {...fadeUp(0.1)} className="mb-6 flex items-center gap-3">
          <span className="h-[1px] w-10 bg-electric-400" />
          <span className="font-display text-xs font-bold uppercase tracking-[0.35em] text-electric-300 sm:text-sm">
            Dec 10–11 · 2026 · Yokohama
          </span>
          <span className="h-[1px] w-10 bg-electric-400" />
        </motion.div>

        {/* 巨大タイトル：OPEN INNOVATION */}
        <motion.h1
          {...fadeUp(0.2)}
          className="display-text text-4xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Open Innovation
        </motion.h1>

        {/* 巨大タイトル：EXPO ＋ 年号 */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-2 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1 sm:mt-3"
        >
          <span className="display-text text-6xl leading-[0.9] text-shimmer sm:text-8xl md:text-[9rem] lg:text-[11rem]">
            Expo
          </span>
          <span className="font-display text-3xl font-black text-electric-400 sm:text-5xl md:text-6xl">
            {eventInfo.edition}
          </span>
        </motion.div>

        {/* 日本語タグライン */}
        <motion.p
          {...fadeUp(0.55)}
          className="mt-10 max-w-2xl text-lg font-medium leading-relaxed text-white/90 sm:text-xl md:text-2xl"
        >
          {eventInfo.tagline}
        </motion.p>
        <motion.p
          {...fadeUp(0.65)}
          className="mt-3 text-sm text-electric-200/80 sm:text-base"
        >
          {eventInfo.subTagline}
        </motion.p>

        {/* 情報3列：日時・会場・入場 */}
        <motion.div
          {...fadeUp(0.8)}
          className="mt-12 grid w-full max-w-3xl grid-cols-1 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {[
            { label: 'DATE', value: eventInfo.dateDisplayShort, sub: eventInfo.timeDisplay },
            { label: 'VENUE', value: eventInfo.venue, sub: '神奈川県 横浜市' },
            { label: 'ADMISSION', value: 'FREE', sub: '事前登録制' },
          ].map((item) => (
            <div key={item.label} className="px-6 py-4 text-center sm:py-5">
              <div className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-electric-400">
                {item.label}
              </div>
              <div className="mt-1.5 text-base font-bold text-white sm:text-lg">{item.value}</div>
              <div className="mt-0.5 text-xs text-white/50">{item.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(1)} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href={eventInfo.entryUrl} className="btn-electric animate-pulse-glow text-sm sm:text-base">
            来場登録する
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#concept" className="btn-ghost text-sm sm:text-base">
            イベント概要を見る
          </a>
        </motion.div>
      </div>

      {/* スクロール誘導 */}
      <motion.a
        href="#concept"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition hover:text-electric-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-label="Scroll to concept"
      >
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative flex h-8 w-5 items-start justify-center rounded-full border border-white/30 pt-1.5">
          <span className="h-1.5 w-0.5 animate-scroll-indicator rounded-full bg-electric-400" />
        </div>
      </motion.a>
    </section>
  );
}
