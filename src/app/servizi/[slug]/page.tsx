import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { faqLd, JsonLd, pageLd, serviceLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/components/seo/meta';
import { CaseBook } from '@/components/landing/CaseBook';
import { Faq } from '@/components/landing/Faq';
import { Method } from '@/components/landing/Method';
import { ServiceApproach, ServiceAudience, ServiceCta, ServiceHero, ServiceIncluded } from '@/components/landing/ServicePage';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteNav } from '@/components/landing/SiteNav';
import { serviceHref, services } from '@/content/site';

// Una pagina per servizio (/servizi/siti, /servizi/gestionali, /servizi/ai), generate in build dai dati di site.ts.
export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

type Props = { params: Promise<{ slug: string }> };
const find = (slug: string) => services.find((s) => s.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = find((await params).slug);
  return s ? pageMetadata({ path: serviceHref(s), ...s.page.seo }) : {};
}

export default async function ServicePage({ params }: Props) {
  const s = find((await params).slug);
  if (!s) notFound();
  const path = serviceHref(s);
  const ex = s.page.example;
  return (
    <>
      <JsonLd data={[...pageLd({ path, name: s.name, description: s.page.seo.description }), serviceLd(s), faqLd(path, s.page.faqs)]} />
      <SiteNav />
      <main>
        <ServiceHero service={s} />
        <ServiceAudience service={s} />
        <ServiceIncluded service={s} />
        <Method label="Come funziona" title="Tre passi, sempre gli stessi." lead="Prima ascoltiamo, poi ti diciamo cosa serve e quanto costa. Solo dopo costruiamo." />
        {ex.kind === 'approach' ? <ServiceApproach {...ex} /> : <CaseBook variant={ex.kind === 'book-site' ? 'site' : 'portal'} />}
        <Faq items={s.page.faqs} lead="Quelle che ci fanno più spesso, alla prima chiacchierata." />
        <ServiceCta service={s} />
      </main>
      <SiteFooter />
    </>
  );
}
