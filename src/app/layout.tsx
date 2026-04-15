import type { Metadata } from 'next';
import { Noto_Sans_JP, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { eventInfo } from '@/data/event';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${eventInfo.nameJa} ${eventInfo.edition}｜${eventInfo.tagline}`,
  description: eventInfo.description,
  keywords: ['オープンイノベーション', 'R&D', '新規事業', '商品開発', '産学連携', 'スタートアップ', 'AI', 'ロボティクス', '展示会', 'パシフィコ横浜'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-abyss-950">{children}</body>
    </html>
  );
}
