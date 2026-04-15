'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/Section';
import { exhibitors } from '@/data/exhibitors';

export function Exhibitors() {
  return (
    <Section id="exhibitors" tint>
      <SectionHeader
        eyebrowJa="出展社"
        eyebrowEn="Exhibitors"
        title={<>120社を超える企業・研究機関・VCが集結。</>}
        description="ディープテック、AI・デジタル、バイオ・ヘルスケア、GX、宇宙・ロボティクスなど、次世代を動かす領域のキープレイヤーが出展。"
      />

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {exhibitors.map((e, i) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3, delay: (i % 12) * 0.03 }}
            className="group flex aspect-[3/2] flex-col items-center justify-center rounded-xl border border-white/10 bg-abyss-950/70 px-3 text-center transition hover:-translate-y-0.5 hover:border-electric-400/50 hover:bg-navy-900/70"
          >
            <div className="text-sm font-bold text-white group-hover:text-electric-300">{e.name}</div>
            <div className="mt-1 text-[10px] text-white/40">{e.category}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-3">
        <a href="#exhibit" className="btn-ghost text-sm">
          出展資料を請求する
          <span className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">
            Apply for Booth
          </span>
        </a>
        <p className="text-xs text-white/40">※ 出展社はすべてダミーです</p>
      </div>
    </Section>
  );
}
