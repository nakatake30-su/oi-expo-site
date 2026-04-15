import { eventInfo } from '@/data/event';

const footerNav = [
  { ja: 'コンセプト', en: 'Concept', href: '#concept' },
  { ja: '登壇者', en: 'Speakers', href: '#speakers' },
  { ja: 'セッション', en: 'Sessions', href: '#sessions' },
  { ja: 'タイムテーブル', en: 'Schedule', href: '#schedule' },
  { ja: '出展社', en: 'Exhibitors', href: '#exhibitors' },
  { ja: '会場', en: 'Venue', href: '#venue' },
  { ja: 'よくある質問', en: 'FAQ', href: '#faq' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-abyss-950">
      {/* 最終CTA */}
      <section className="relative border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" style={{ backgroundSize: '56px 56px' }} aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)' }}
          aria-hidden
        />
        <div className="container-narrow relative text-center">
          <div className="font-display text-[10px] font-bold uppercase tracking-[0.35em] text-electric-400">
            Register Now
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
            2026年12月、
            <br className="sm:hidden" />
            横浜でお会いしましょう。
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            来場は無料（事前登録制）。R&D・商品開発・新規事業開発の現場を動かす方々のご参加をお待ちしています。
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={eventInfo.entryUrl} className="btn-electric animate-pulse-glow flex-col gap-0.5 text-sm leading-none sm:text-base">
              <span className="flex items-center gap-2">
                来場登録する
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-navy-800">
                Register for Visit
              </span>
            </a>
            <a href={eventInfo.exhibitorApplyUrl} className="btn-ghost flex-col gap-0.5 text-sm leading-none sm:text-base">
              <span>出展資料を請求する</span>
              <span className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">
                Apply for Booth
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 通常フッター */}
      <div className="container-narrow py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-electric-500 font-black text-navy-950">
                Oi
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-white">オープンイノベーションEXPO</span>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-electric-400/80">
                  Open Innovation Expo 2026
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-xs leading-relaxed text-white/50">
              R&D・商品開発・新規事業開発を加速する展示会。大手企業、スタートアップ、大学・研究機関、投資家が一堂に会する2日間。
            </p>
            <div className="mt-5 text-xs text-white/40">
              主催: {eventInfo.organizer}
              <br />
              運営: {eventInfo.organizerParent}
            </div>
          </div>

          <div>
            <div className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-electric-400">
              Sitemap
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group flex flex-col text-xs leading-none transition"
                  >
                    <span className="text-white/80 group-hover:text-electric-300">{n.ja}</span>
                    <span className="mt-0.5 font-display text-[9px] uppercase tracking-[0.25em] text-white/30">
                      {n.en}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 オープンイノベーションEXPO実行委員会. All rights reserved.</p>
          <p className="font-display text-[10px] uppercase tracking-[0.3em]">Demo site · サンプルデータ</p>
        </div>
      </div>
    </footer>
  );
}
