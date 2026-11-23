import { Footer } from '@alpwisestudio/ui';
import { RevealOnView, Scene } from '@/components/motion';
import { contact, features, serviceHref, services } from '@/content/site';

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
          { title: 'Servizi', links: [...services.map((s) => ({ label: s.name, href: serviceHref(s) })), { label: 'Alpwise book, prenotazioni', href: '/book' }] },
          ...(features.legal ? [{ title: 'Legale', links: [{ label: 'Privacy', href: '/privacy' }, { label: 'Cookie', href: '/cookie' }] }] : []),
        ]}
        legal={legal}
        note={<a href="#" className="lp-top">↑ Torna su</a>}
      />
      <RevealOnView selector=".al-footer-word" />
    </Scene>
  );
}
