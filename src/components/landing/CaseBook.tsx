import { Button, Kicker } from '@alpwisestudio/ui';
import { Scene } from '@/components/motion';
import { d } from '@/components/motion/delay';

// Righe della schermata di esempio: nomi inventati, dichiarati come esempio sotto la schermata.
const ROWS = [
  { time: '19:30', name: 'Marco Ferrari', status: 'Confermata', tone: 'success', meta: '4 persone · Tavolo 6 · Sito' },
  { time: '20:00', name: 'Giulia Colombo', status: 'Da confermare', tone: 'warning', meta: '2 persone · Tavolo 2 · Telefono' },
  { time: '20:45', name: 'Luca Brambilla', status: 'Confermata', tone: 'success', meta: '6 persone · Tavolo 9 · Sito' },
] as const;
const DAYS = [['Lun', 17, 12], ['Mar', 18, null], ['Mer', 19, 8], ['Gio', 20, 14], ['Ven', 21, 26], ['Oggi', 22, 38], ['Dom', 23, 21]] as const;

/** Il portale di Alpwise book in miniatura: menu a sinistra, settimana e prenotazioni della cena. Solo decorativo. */
function BookPreview() {
  return (
    <div className="lp-book" data-theme="dark" aria-hidden="true">
      <div className="lp-book-side">
        <span className="lp-book-k">Servizio</span>
        <span className="lp-book-nav is-on">Oggi</span>
        <span className="lp-book-nav">Nuova prenotazione</span>
        <span className="lp-book-nav">Calendario</span>
        <span className="lp-book-k">Locale</span>
        <span className="lp-book-nav">Impostazioni</span>
      </div>
      <div className="lp-book-main">
        <div><span className="lp-book-k">Oggi</span><p className="lp-book-day">Sabato 22 novembre</p></div>
        <div className="lp-book-week">
          {DAYS.map(([day, n, count]) => (
            <span key={day} className={day === 'Oggi' ? 'is-on' : undefined}><b>{day}</b><i>{n}</i><small>{count ?? '–'}</small></span>
          ))}
        </div>
        <div className="lp-book-list">
          <div className="lp-book-head"><span>Cena</span><small>3 prenotazioni · 12 persone</small></div>
          {ROWS.map((r) => (
            <div key={r.name} className="lp-book-row">
              <span className="lp-book-time">{r.time}</span>
              <span className="lp-book-who"><b>{r.name}</b><span className={`lp-book-tag is-${r.tone}`}>{r.status}</span></span>
              <span />
              <small>{r.meta}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Case study: Alpwise book, il gestionale di prenotazioni che abbiamo costruito per la ristorazione. */
export function CaseBook() {
  return (
    <Scene as="section" className="lp-case-wrap" aria-labelledby="case-t">
      <div className="al-container">
        <article className="al-case lp-case" data-m="fade-up">
          <div className="al-case-vis al-horizon al-grid al-grid-on-horizon lp-case-vis">
            <div className="lp-case-top"><Kicker>Case study</Kicker><Kicker>Alpwise book</Kicker></div>
            <BookPreview />
            <span className="lp-case-cap">Schermata di esempio del portale</span>
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
                <div><dt>Dove</dt><dd>book.alpwise.studio</dd></div>
              </dl>
              <div className="lp-case-cta"><Button variant="outline" size="lg" href="/book" arrow>Scopri Alpwise book</Button></div>
            </div>
          </div>
        </article>
      </div>
    </Scene>
  );
}
