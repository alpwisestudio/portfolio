import { Footer } from '@alpwisestudio/ui';
import { RevealOnView, Scene } from '@/components/motion';
import { contact, features } from '@/content/site';

/** Footer del design system: frase e bottone, colonne di link, riga legale e wordmark bianco che sale lettera per lettera quando entra in vista. */
export function SiteFooter() {
  const legal = [`© ${new Date().getFullYear()} Alpwise Studio`, 'Gallarate (VA)', contact.vat && `P.IVA ${contact.vat}`].filter(Boolean).join(' · ');
  return (
    <Scene>
      <Footer
        tagline="Consulenza digitale per le PMI, ai piedi delle Prealpi."
        cta={{ href: '/contatti', label: 'Prenota una chiacchierata' }}
        columns={[
          { title: 'Studio', links: [{ label: 'Come lavoriamo', href: '/#metodo' }, { label: 'Chi siamo', href: '/#studio' }, { label: 'Domande', href: '/#domande' }, { label: 'Contatti', href: '/contatti' }] },
          { title: 'Servizi', links: [{ label: 'Siti', href: '/#servizi' }, { label: 'Gestionali su misura', href: '/#servizi' }, { label: 'AI e automazioni', href: '/#servizi' }, { label: 'BOOK, prenotazioni', href: '/book' }] },
          ...(features.legal ? [{ title: 'Legale', links: [{ label: 'Privacy', href: '/privacy' }, { label: 'Cookie', href: '/cookie' }] }] : []),
        ]}
        legal={legal}
        note={<a href="#" className="lp-top">↑ Torna su</a>}
      />
      <RevealOnView selector=".al-footer-word" />
    </Scene>
  );
}
