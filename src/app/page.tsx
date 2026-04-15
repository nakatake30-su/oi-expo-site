import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/hero/Hero';
import { TopicMarquee } from '@/components/hero/TopicMarquee';
import { Concept } from '@/components/sections/Concept';
import { Numbers } from '@/components/sections/Numbers';
import { Speakers } from '@/components/sections/Speakers';
import { Sessions } from '@/components/sections/Sessions';
import { Schedule } from '@/components/sections/Schedule';
import { Exhibitors } from '@/components/sections/Exhibitors';
import { Venue } from '@/components/sections/Venue';
import { Faq } from '@/components/sections/Faq';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <TopicMarquee />
      <Concept />
      <Numbers />
      <Speakers />
      <Sessions />
      <Schedule />
      <Exhibitors />
      <Venue />
      <Faq />
      <Footer />
    </>
  );
}
