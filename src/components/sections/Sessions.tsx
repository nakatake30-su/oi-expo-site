'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { sessions } from '@/data/sessions';
import { speakers } from '@/data/speakers';
import type { SessionCategory } from '@/types';
import { SESSION_CATEGORY_LABELS } from '@/types';

type Filter = 'all' | SessionCategory;

const categoryOrder: SessionCategory[] = [
  'rd_strategy',
  'startup',
  'academia',
  'ai_digital',
  'robotics_space',
];

const categoryEn: Record<SessionCategory, string> = {
  rd_strategy: 'R&D Strategy',
  startup: 'Startup',
  academia: 'Academia',
  ai_digital: 'AI × Digital',
  robotics_space: 'Robotics × Space',
};

export function Sessions() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? sessions : sessions.filter((s) => s.category === filter);

  return (
    <Section id="sessions" tint>
      <SectionHeader
        eyebrowJa="セッション"
        eyebrowEn="Sessions"
        title={<>50を超えるセッションが、2日間で展開。</>}
        description="基調講演、パネルディスカッション、ケーススタディを通じて、実装知と未来構想の両輪を持ち帰れる設計。"
      />

      {/* カテゴリフィルタ */}
      <div className="mt-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
            filter === 'all'
              ? 'border-electric-400 bg-electric-500 text-navy-950'
              : 'border-white/20 bg-white/5 text-white/70 hover:border-electric-400/50 hover:text-electric-300'
          }`}
        >
          すべて
        </button>
        {categoryOrder.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                active
                  ? 'border-electric-400 bg-electric-500 text-navy-950'
                  : 'border-white/20 bg-white/5 text-white/70 hover:border-electric-400/50 hover:text-electric-300'
              }`}
            >
              {SESSION_CATEGORY_LABELS[cat]}
            </button>
          );
        })}
      </div>

      {/* セッションカードグリッド */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((s, i) => {
          const sps = s.speakerIds.map((id) => speakers.find((sp) => sp.id === id)).filter(Boolean);
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
              className="group rounded-2xl border border-white/10 bg-abyss-950/60 p-5 transition hover:border-electric-400/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-electric-500/15 px-2.5 py-0.5 text-electric-300">
                    {SESSION_CATEGORY_LABELS[s.category]}
                  </span>
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                    {categoryEn[s.category]}
                  </span>
                </div>
                <div className="shrink-0 font-display text-[11px] font-bold uppercase tracking-wider text-white/50">
                  Day {s.day}
                </div>
              </div>

              <h3 className="mt-3 text-base font-bold leading-snug text-white transition group-hover:text-electric-200">
                {s.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/60">
                <span>
                  🕐 {s.startTime} — {s.endTime}
                </span>
                <span>📍 {s.hall}</span>
              </div>

              {sps.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {sps.map((sp) =>
                    sp ? (
                      <span key={sp.id} className="text-xs text-white/70">
                        {sp.name}
                      </span>
                    ) : null
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
