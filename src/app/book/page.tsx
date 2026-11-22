import type { Metadata } from 'next';
import '@/styles/book.css';
import { JsonLd, pageLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/components/seo/meta';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteNav } from '@/components/landing/SiteNav';
import {
  BookCalendar, BookCta, BookCustomer, BookEmails, BookEmbed, BookFaq, BookHero, BookIntro, BookMobile, BookPortal, BookSettings, BookTrust,
} from '@/components/book/BookLanding';

const seo = {
  path: '/book',
  title: 'Alpwise book, prenotazioni per ristoranti',
  description: 'Alpwise book: i clienti prenotano dal tuo sito, tu gestisci tavoli, orari e prenotazioni da un portale che apri dal telefono. Email di conferma e promemoria, dati in Europa.',
};
export const metadata: Metadata = pageMetadata(seo);

export default function BookPage() {
  return (
    <>
      <JsonLd data={pageLd({ ...seo, type: 'WebPage', name: seo.title })} />
      <SiteNav />
      <main>
        <BookHero />
        <BookIntro />
        <BookCustomer />
        <BookEmbed />
        <BookPortal />
        <BookMobile />
        <BookCalendar />
        <BookSettings />
        <BookEmails />
        <BookTrust />
        <BookFaq />
        <BookCta />
      </main>
      <SiteFooter />
    </>
  );
}
