import { Accordion } from '@alpwisestudio/ui';
import { Scene, Words } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { faqs } from '@/content/site';

/** Domande frequenti: titolo enorme e risposte che si aprono una alla volta. Le pagine dei servizi passano le loro. */
export function Faq({ items = faqs, lead = 'Quelle che ci fanno tutti, alla prima chiacchierata.' }: { items?: readonly { q: string; a: string }[]; lead?: string }) {
  return (
    <Scene as="section" id="domande" className="al-section al-anchor lp-faq" aria-labelledby="domande-t">
      <div className="al-container">
        <div className="lp-faq-head">
          <h2 id="domande-t"><Words>Domande?</Words></h2>
          <p data-m="fade-up" style={d(150)}>{lead}</p>
        </div>
        <Accordion size="lg" openFirst items={[...items]} />
      </div>
    </Scene>
  );
}
