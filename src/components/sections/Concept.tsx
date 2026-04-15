'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/Section';

const pillars = [
  {
    no: '01',
    ja: '知との出会い',
    en: 'Encounter',
    desc: '研究開発の最前線に立つ30人超のスピーカー。大学・研究機関・事業会社・スタートアップの知見が一堂に。',
  },
  {
    no: '02',
    ja: '事業の気づき',
    en: 'Insight',
    desc: 'AI・ロボティクス・バイオ・量子・宇宙など、次の10年を変える領域の最新動向と実装事例を体系的に。',
  },
  {
    no: '03',
    ja: '共創の始点',
    en: 'Co-Creation',
    desc: '120社を超える出展企業と、現場の技術責任者・事業開発の方々と、ここから具体的な一歩を。',
  },
];

export function Concept() {
  return (
    <Section id="concept" className="overflow-hidden">
      <SectionHeader
        eyebrowJa="コンセプト"
        eyebrowEn="Concept"
        title={
          <>
            研究開発のヒントが、
            <br />
            この2日間に集まる。
          </>
        }
        description="日本の R&D・商品開発・新規事業開発を担う方々が、次の打ち手を持ち帰るための場。企業・大学・研究機関・スタートアップ・投資家が交わる越境の舞台が、ここ横浜に立ち上がる。"
        centered
      />

      {/* 3本柱 */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.no}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/60 to-navy-950/60 p-8 backdrop-blur-sm transition hover:border-electric-400/50"
          >
            {/* 数字 */}
            <div className="font-display text-6xl font-black leading-none text-electric-500/20 transition group-hover:text-electric-500/40">
              {p.no}
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white">{p.ja}</h3>
            <div className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-electric-400/80">
              {p.en}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{p.desc}</p>

            {/* ホバー時のライン */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-electric-400 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
