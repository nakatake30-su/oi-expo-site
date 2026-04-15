'use client';

import { useEffect, useState } from 'react';
import { eventInfo } from '@/data/event';

const navLinks = [
  { ja: 'コンセプト', en: 'Concept', href: '#concept' },
  { ja: '登壇者', en: 'Speakers', href: '#speakers' },
  { ja: 'セッション', en: 'Sessions', href: '#sessions' },
  { ja: 'タイムテーブル', en: 'Schedule', href: '#schedule' },
  { ja: '会場', en: 'Venue', href: '#venue' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-abyss-950/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-narrow flex h-20 items-center justify-between">
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-electric-500 font-black text-navy-950 shadow-glow transition group-hover:shadow-glow-strong">
            Oi
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold text-white">オープンイノベーションEXPO</span>
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-electric-400/80">
              Open Innovation Expo
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center px-3 py-2 leading-none transition"
            >
              <span className="text-xs font-bold text-white/80 group-hover:text-electric-400">
                {link.ja}
              </span>
              <span className="mt-0.5 font-display text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 group-hover:text-electric-400/80">
                {link.en}
              </span>
            </a>
          ))}
        </nav>
        <a
          href={eventInfo.entryUrl}
          className="inline-flex flex-col items-center rounded-full bg-electric-500 px-5 py-2 leading-none text-navy-950 shadow-glow transition hover:bg-electric-400"
        >
          <span className="text-sm font-bold">来場登録</span>
          <span className="mt-0.5 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-navy-950/70">
            Entry
          </span>
        </a>
      </div>
    </header>
  );
}
