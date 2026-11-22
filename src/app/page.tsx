import { CaseBook } from '@/components/landing/CaseBook';
import { Faq } from '@/components/landing/Faq';
import { Hero } from '@/components/landing/Hero';
import { Intro } from '@/components/landing/Intro';
import { Method } from '@/components/landing/Method';
import { Services } from '@/components/landing/Services';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteNav } from '@/components/landing/SiteNav';
import { Studio } from '@/components/landing/Studio';

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Method />
        <Services />
        <CaseBook />
        <Studio />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
