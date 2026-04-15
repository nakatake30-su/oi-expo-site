'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { sessions } from '@/data/sessions';
import type { SessionCategory } from '@/types';
import { SESSION_CATEGORY_LABELS } from '@/types';

const categoryTint: Record<SessionCategory, string> = {
  rd_strategy: 'from-electric-500/30 to-electric-500/5 border-electric-400/40',
  startup: 'from-fuchsia-500/30 to-fuchsia-500/5 border-fuchsia-400/40',
  academia: 'from-emerald-500/30 to-emerald-500/5 border-emerald-400/40',
  ai_digital: 'from-amber-500/30 to-amber-500/5 border-amber-400/40',
  robotics_space: 'from-sky-500/30 to-sky-500/5 border-sky-400/40',
};

export function Schedule() {
  const [day, setDay] = useState<1 | 2>(1);
  const list = sessions.filter((s) => s.day === day).sort((a, b) => a.startTime.localeCompare(b.startTime));

  return (
    <Section id="schedule">
      <SectionHeader
        eyebrowJa="タイムテーブル"
        eyebrowEn="Schedule"
        title={<>2日間のプログラム。</>}
        description="メインホール＋A会場＋B会場の3会場で並行進行。同時間帯のセッションは録画配信でのキャッチアップも予定。"
      />

      {/* 日付タブ */}
      <div className="mt-10 inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1">
        {([1, 2] as const).map((d) => {
          const active = day === d;
          return (
            <button
              key={d}
              type="button"
              onClick={() => setDay(d)}
              className={`flex items-center gap-3 rounded-full px-5 py-2 transition ${
                active ? 'bg-electric-500 text-navy-950' : 'text-white/70 hover:text-electric-300'
              }`}
            >
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em]">Day {d}</span>
              <span className="text-sm font-bold">12.{d === 1 ? '10' : '11'} {d === 1 ? '[水]' : '[木]'}</span>
            </button>
          );
        })}
      </div>

      {/* タイムライン */}
      <div className="mt-8 space-y-3">
        {list.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
            className={`grid grid-cols-[auto_1fr] gap-4 rounded-xl border bg-gradient-to-r ${categoryTint[s.category]} p-4 backdrop-blur-sm sm:grid-cols-[120px_1fr]`}
          >
            <div className="flex flex-col justify-center leading-none">
              <span className="font-display text-lg font-bold text-white sm:text-xl">{s.startTime}</span>
              <span className="mt-1 font-display text-xs text-white/50">– {s.endTime}</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-white/80">
                  {SESSION_CATEGORY_LABELS[s.category]}
                </span>
                <span className="text-white/50">📍 {s.hall}</span>
              </div>
              <h3 className="mt-2 text-sm font-bold leading-snug text-white sm:text-base">{s.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
