import { Accordion } from '@alpwisestudio/ui';
import { Scene, Words } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { faqs } from '@/content/site';

/** Domande frequenti: titolo enorme e risposte che si aprono una alla volta. */
export function Faq() {
  return (
    <Scene as="section" id="domande" className="al-section al-anchor lp-faq" aria-labelledby="domande-t">
      <div className="al-container">
        <div className="lp-faq-head">
          <h2 id="domande-t"><Words>Domande?</Words></h2>
          <p data-m="fade-up" style={d(150)}>Quelle che ci fanno tutti, alla prima chiacchierata.</p>
        </div>
        <Accordion size="lg" openFirst items={faqs} />
      </div>
    </Scene>
  );
}
