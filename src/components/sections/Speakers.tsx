'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/Section';
import { speakers } from '@/data/speakers';
import type { Speaker } from '@/types';

// 2文字のイニシャルを取り出す（日本語：姓頭文字＋名頭文字）
function getInitials(name: string): string {
  const cleaned = name.replace(/\s+/g, ' ').trim();
  const parts = cleaned.split(' ');
  if (parts.length >= 2) return (parts[0][0] ?? '') + (parts[1][0] ?? '');
  return cleaned.slice(0, 2);
}

// 決定論的な色差配（ID の末尾2桁でシフト）
function avatarGradient(id: string) {
  const seed = parseInt(id.slice(-2), 10) || 0;
  const hue = (seed * 23) % 360;
  return `linear-gradient(135deg, hsl(${hue}, 70%, 45%) 0%, hsl(${(hue + 40) % 360}, 85%, 60%) 100%)`;
}

function SpeakerCard({ sp, i }: { sp: Speaker; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: (i % 8) * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950/50 p-5 transition hover:-translate-y-1 hover:border-electric-400/50 hover:shadow-glow"
    >
      {/* アバター（プレースホルダー：イニシャル付きグラデ） */}
      <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-2xl">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{ background: avatarGradient(sp.id) }}
        />
        <div className="absolute inset-0 rounded-2xl bg-grid-pattern opacity-30" style={{ backgroundSize: '16px 16px' }} />
        <span className="relative font-display text-3xl font-black text-white/95 drop-shadow">
          {getInitials(sp.name)}
        </span>
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-base font-bold text-white">{sp.name}</h3>
        <p className="mt-1 text-xs text-electric-300">{sp.role}</p>
        <p className="mt-1 text-xs leading-snug text-white/50">{sp.organization}</p>
      </div>

      {sp.featured && (
        <span className="absolute right-3 top-3 rounded-full bg-electric-500 px-2 py-0.5 font-display text-[8px] font-bold uppercase tracking-widest text-navy-950">
          Keynote
        </span>
      )}
    </motion.div>
  );
}

export function Speakers() {
  return (
    <Section id="speakers">
      <SectionHeader
        eyebrowJa="登壇者"
        eyebrowEn="Speakers"
        title={<>R&D・事業開発を動かす、30人超のスピーカー。</>}
        description="第一線で研究・経営・投資に携わる方々が、現場の実装とビジョンを語ります。以下は登壇予定の一部（敬称略）。"
      />

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {speakers.map((sp, i) => (
          <SpeakerCard key={sp.id} sp={sp} i={i} />
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-white/40">
        ※ 掲載の登壇者はすべてデモ用のサンプルです。実在の個人ではありません。
      </p>
    </Section>
  );
}
