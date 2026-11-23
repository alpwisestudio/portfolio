import { Button, Kicker } from '@alpwisestudio/ui';
import { Scene } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { BrowserShot } from '@/components/book/Shots';
import { shots } from '@/content/book';
// Cornice del browser (bk-browser), la stessa della pagina /book.
import '@/styles/book.css';

type Variant = 'portal' | 'site';

// `portal`: il gestionale visto dal ristoratore (home, Gestionali). `site`: il modulo dentro il sito del ristorante (Siti).
const variants = {
  portal: {
    shot: shots.oggi, url: 'book.alpwise.studio/portale', cap: 'Schermata vera del portale, con dati di esempio',
    title: 'Le prenotazioni, senza il telefono che squilla.',
    text: 'Siamo partiti dal servizio di un sabato sera. Ne è nato un gestionale che il ristoratore usa dal telefono, con il widget sul suo sito.',
    what: 'Prenotazioni e portale',
  },
  site: {
    shot: shots.widgetDesk, url: 'book.alpwise.studio/p/trattoria-esempio', cap: 'Schermata vera della pagina di prenotazione, con un locale di esempio',
    title: 'Le prenotazioni dentro il sito del ristorante.',
    text: 'Il modulo di Alpwise book entra nel sito come una sua sezione: prende l’altezza della pagina e i colori chiari o scuri. Il cliente sceglie persone, giorno e orario, e riceve la conferma per email.',
    what: 'Sito con prenotazioni',
  },
} satisfies Record<Variant, { shot: (typeof shots)[keyof typeof shots]; url: string; cap: string; title: string; text: string; what: string }>;

/** Case study: Alpwise book, il gestionale di prenotazioni che abbiamo costruito per la ristorazione. */
export function CaseBook({ variant = 'portal' }: { variant?: Variant }) {
  const v = variants[variant];
  return (
    <Scene as="section" className="lp-case-wrap" aria-labelledby="case-t">
      <div className="al-container">
        <article className="al-case lp-case" data-m="fade-up">
          <div className="al-case-vis al-horizon al-grid al-grid-on-horizon lp-case-vis">
            <div className="lp-case-top"><Kicker>Case study</Kicker><Kicker>Alpwise book</Kicker></div>
            <BrowserShot shot={v.shot} url={v.url} className="lp-case-shot" />
            <span className="lp-case-cap">{v.cap}</span>
          </div>
          <div className="al-case-body lp-case-body">
            <div className="lp-case-text">
              <h3 id="case-t">{v.title}</h3>
              <p>{v.text}</p>
            </div>
            <div style={d(200)}>
              <dl className="al-spec">
                <div><dt>Settore</dt><dd>Ristorazione</dd></div>
                <div><dt>Cosa</dt><dd>{v.what}</dd></div>
              </dl>
              <div className="lp-case-cta"><Button variant="outline" size="lg" href="/book" arrow>Scopri Alpwise book</Button></div>
            </div>
          </div>
        </article>
      </div>
    </Scene>
  );
}
