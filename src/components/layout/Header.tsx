'use client';

import { useEffect, useState } from 'react';
import { eventInfo } from '@/data/event';

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
      <div className="container-narrow flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-electric-500 font-black text-navy-950 shadow-glow transition group-hover:shadow-glow-strong">
            Oi
          </span>
          <span className="hidden font-display text-sm font-bold uppercase tracking-widest text-white sm:block">
            Open Innovation <span className="text-electric-400">Expo</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {[
            { label: 'Concept', href: '#concept' },
            { label: 'Speakers', href: '#speakers' },
            { label: 'Sessions', href: '#sessions' },
            { label: 'Schedule', href: '#schedule' },
            { label: 'Access', href: '#venue' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/70 transition hover:text-electric-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={eventInfo.entryUrl}
          className="inline-flex items-center gap-1.5 rounded-full bg-electric-500 px-5 py-2 text-sm font-bold uppercase tracking-wider text-navy-950 shadow-glow transition hover:bg-electric-400"
        >
          Entry
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </header>
  );
}
