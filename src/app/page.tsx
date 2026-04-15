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
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-electric-400">Coming next</p>
          <p className="mt-3 text-sm">
            Concept / Numbers / Speakers / Sessions / Schedule / Exhibitors / Venue / FAQ
          </p>
        </div>
      </section>
    </>
  );
}
