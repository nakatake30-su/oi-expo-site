import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // 深ネイビー（知性・信頼）
        navy: {
          50: '#edf1ff',
          100: '#d5deff',
          200: '#a9bcff',
          300: '#7693ff',
          400: '#4b6cef',
          500: '#2d4ed4',
          600: '#1e3aa8',
          700: '#152a82',
          800: '#0e1d5e',
          900: '#0b1e5c',
          950: '#050d33',
        },
        // エレクトリックシアン（躍動・発見）
        electric: {
          50: '#e6fcff',
          100: '#b3f5ff',
          200: '#80ecff',
          300: '#4de0ff',
          400: '#26d5ff',
          500: '#00d4ff', // 基調アクセント
          600: '#00a8cc',
          700: '#007d99',
          800: '#005166',
          900: '#002833',
        },
        // 背景用の深い黒
        abyss: {
          50: '#f3f4f6',
          900: '#0a0f1e',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)',
        'glow-strong': '0 0 30px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.3)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(0,212,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,212,255,0.08) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at center, rgba(0,212,255,0.15) 0%, transparent 60%)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.7), 0 0 60px rgba(0, 212, 255, 0.4)' },
        },
        'scroll-indicator': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        'scroll-indicator': 'scroll-indicator 1.8s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
