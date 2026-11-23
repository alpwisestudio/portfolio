import { Button, Kicker } from '@alpwisestudio/ui';
import { Scene } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { BrowserShot } from '@/components/book/Shots';
import { shots } from '@/content/book';
// Cornice del browser (bk-browser), la stessa della pagina /book.
import '@/styles/book.css';

/** Case study: Alpwise book, il gestionale di prenotazioni che abbiamo costruito per la ristorazione. */
export function CaseBook() {
  return (
    <Scene as="section" className="lp-case-wrap" aria-labelledby="case-t">
      <div className="al-container">
        <article className="al-case lp-case" data-m="fade-up">
          <div className="al-case-vis al-horizon al-grid al-grid-on-horizon lp-case-vis">
            <div className="lp-case-top"><Kicker>Case study</Kicker><Kicker>Alpwise book</Kicker></div>
            <BrowserShot shot={shots.oggi} url="book.alpwise.studio/portale" className="lp-case-shot" />
            <span className="lp-case-cap">Schermata vera del portale, con dati di esempio</span>
          </div>
          <div className="al-case-body lp-case-body">
            <div className="lp-case-text">
              <h3 id="case-t">Le prenotazioni, senza il telefono che squilla.</h3>
              <p>Siamo partiti dal servizio di un sabato sera. Ne è nato un gestionale che il ristoratore usa dal telefono, con il widget sul suo sito.</p>
            </div>
            <div style={d(200)}>
              <dl className="al-spec">
                <div><dt>Settore</dt><dd>Ristorazione</dd></div>
                <div><dt>Cosa</dt><dd>Prenotazioni e portale</dd></div>
              </dl>
              <div className="lp-case-cta"><Button variant="outline" size="lg" href="/book" arrow>Scopri Alpwise book</Button></div>
            </div>
          </div>
        </article>
      </div>
    </Scene>
  );
}
