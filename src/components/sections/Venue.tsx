'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/Section';
import { eventInfo } from '@/data/event';

const accessList = [
  { ja: 'みなとみらい線「みなとみらい駅」', en: 'Minatomirai Line', sub: 'クイーンズスクエア連絡通路より徒歩5分' },
  { ja: 'JR/市営地下鉄「桜木町駅」', en: 'JR Sakuragicho Station', sub: '動く歩道経由で徒歩12分' },
  { ja: '首都高速「みなとみらい出口」', en: 'Shuto Expressway', sub: '有料駐車場併設（1,500台）' },
];

export function Venue() {
  return (
    <Section id="venue">
      <SectionHeader
        eyebrowJa="会場"
        eyebrowEn="Venue"
        title={<>横浜・みなとみらいから、次世代産業を動かす。</>}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* 会場情報 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-navy-950/50 p-8 backdrop-blur-sm"
        >
          <div className="font-display text-[10px] font-bold uppercase tracking-[0.35em] text-electric-400">
            Venue
          </div>
          <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">{eventInfo.venue}</h3>
          <p className="mt-2 text-sm text-white/60">{eventInfo.venueAddress}</p>

          <hr className="my-6 border-white/10" />

          <div className="space-y-4">
            {accessList.map((a) => (
              <div key={a.ja}>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{a.ja}</span>
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-electric-400/70">
                    {a.en}
                  </span>
                </div>
                <p className="mt-1 text-xs text-white/50">{a.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 地図プレースホルダー（Google Maps 埋め込みは別途） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-abyss-950" />
          <div className="absolute inset-0 bg-grid-pattern opacity-50" style={{ backgroundSize: '32px 32px' }} />
          {/* ピン */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-10 animate-ping rounded-full bg-electric-500/30" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-electric-500 shadow-glow">
                <svg className="h-6 w-6 text-navy-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-abyss-950/80 px-3 py-2 backdrop-blur">
            <p className="text-xs font-bold text-white">{eventInfo.venue}</p>
            <p className="text-[10px] text-white/50">Yokohama, Kanagawa, Japan</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
