import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/hero/Hero';
import { TopicMarquee } from '@/components/hero/TopicMarquee';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <TopicMarquee />
      {/* 以降のセクションは次フェーズで実装（Concept / Numbers / Speakers / Sessions / Schedule / Exhibitors / Venue / FAQ / Footer） */}
      <section id="concept" className="flex min-h-[40vh] items-center justify-center py-24 text-center text-white/40">
        <div className="container-narrow">
          <p className="text-sm font-bold text-electric-300">次のセクションは実装予定です</p>
          <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-electric-400/70">Coming Next</p>
          <p className="mt-4 text-sm">
            コンセプト / 数字で見るEXPO / 登壇者 / セッション / タイムテーブル / 出展社 / 会場 / FAQ
          </p>
        </div>
      </section>
    </>
  );
}
