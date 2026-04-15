// オープンイノベーションEXPO の型定義

export type SessionCategory =
  | 'rd_strategy' // R&D戦略
  | 'startup' // スタートアップ・カーブアウト
  | 'academia' // 産学連携・大学発ベンチャー
  | 'ai_digital' // AI・デジタル技術
  | 'robotics_space'; // ロボティクス・宇宙

export const SESSION_CATEGORY_LABELS: Record<SessionCategory, string> = {
  rd_strategy: 'R&D戦略・新規事業',
  startup: 'スタートアップ連携',
  academia: '産学連携',
  ai_digital: 'AI・デジタル活用',
  robotics_space: 'ロボティクス・宇宙',
};

export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  photoUrl?: string;
  bio?: string;
  featured?: boolean;
}

export interface Session {
  id: string;
  category: SessionCategory;
  title: string;
  day: 1 | 2;
  startTime: string; // "10:00"
  endTime: string; // "11:00"
  hall: string; // "A会場"
  speakerIds: string[];
  description?: string;
}

export interface Exhibitor {
  id: string;
  name: string;
  logoUrl?: string;
  category: string;
  description?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
