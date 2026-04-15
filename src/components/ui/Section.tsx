import type { ReactNode } from 'react';

/**
 * セクションの共通レイアウト：
 * - 暗背景（abyss）を基調に、tint オプションで微妙なウォッシュを足せる
 * - id を渡すとアンカーリンク対応
 */
export function Section({
  children,
  id,
  className = '',
  tint = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tint?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 ${tint ? 'bg-navy-950/40' : ''} ${className}`}
    >
      <div className="container-narrow">{children}</div>
    </section>
  );
}

/**
 * セクション見出しの共通パターン：日本語主 + 英語副
 */
export function SectionHeader({
  eyebrowJa,
  eyebrowEn,
  title,
  description,
  centered = false,
}: {
  eyebrowJa?: string;
  eyebrowEn: string;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className={`mb-5 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="h-[1px] w-8 bg-electric-400" />
        <div className="flex flex-col leading-none">
          {eyebrowJa && (
            <span className="text-[11px] font-bold tracking-widest text-electric-300">
              {eyebrowJa}
            </span>
          )}
          <span className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.35em] text-electric-400/80">
            {eyebrowEn}
          </span>
        </div>
        <span className="h-[1px] w-8 bg-electric-400" />
      </div>
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
      )}
    </div>
  );
}
