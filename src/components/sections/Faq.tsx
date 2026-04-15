'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/Section';
import { faqs } from '@/data/faqs';

export function Faq() {
  return (
    <Section id="faq" tint>
      <SectionHeader
        eyebrowJa="よくある質問"
        eyebrowEn="FAQ"
        title={<>ご不明点がありましたら、こちらをご参照ください。</>}
        centered
      />

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <motion.details
            key={f.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group rounded-xl border border-white/10 bg-abyss-950/60 p-5 transition hover:border-electric-400/40"
          >
            <summary className="flex cursor-pointer items-start justify-between gap-4 text-sm font-semibold text-white sm:text-base">
              <span className="flex gap-3">
                <span className="font-display text-xs font-bold text-electric-400">Q.</span>
                {f.question}
              </span>
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-electric-400 transition group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-4 flex gap-3 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/80">
              <span className="font-display text-xs font-bold text-electric-400">A.</span>
              <p>{f.answer}</p>
            </div>
          </motion.details>
        ))}
      </div>
    </Section>
  );
}
