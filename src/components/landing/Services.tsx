import { Kicker, Services as Rows } from '@alpwisestudio/ui';
import { Scene } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { serviceHref, services } from '@/content/site';

/** Servizi: tre righe grandi, ognuna porta alla pagina del servizio. */
export function Services() {
  return (
    <Scene as="section" id="servizi" className="al-section al-anchor lp-services" aria-labelledby="servizi-t">
      <div className="al-container">
        <h2 id="servizi-t" className="sr-only">Servizi</h2>
        <Kicker className="lp-kicker-sub">Servizi</Kicker>
        <div data-m="fade-up" style={d(150)}>
          <Rows items={services.map((s) => ({ title: s.title, text: s.text, href: serviceHref(s) }))} />
        </div>
      </div>
    </Scene>
  );
}
