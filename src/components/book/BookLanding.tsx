import type { CSSProperties } from 'react';
import { Accordion, Button, Head, Kicker } from '@alpwisestudio/ui';
import { Scene, ScrollRead, Words } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { faqs, features, shots, steps } from '@/content/book';
import { BrowserShot, PhoneShot, ShotTabs } from './Shots';

const PORTAL = 'book.alpwise.studio/portale';
const PAGE = 'book.alpwise.studio/p/trattoria-del-lago';

/** Apertura: orizzonte con la griglia, titolo e, sotto, il portale da computer con il telefono davanti. */
export function BookHero() {
  return (
    <Scene as="header" className="al-horizon al-grid al-grid-on-horizon bk-hero">
      <div className="al-container bk-hero-body">
        <div data-m="fade-up" style={d(150)}><Kicker className="bk-on-hz">Alpwise book</Kicker></div>
        <h1 style={{ '--delay': '250ms', '--hl-delay': '1100ms' } as CSSProperties}>
          <Words>Le prenotazioni del tuo ristorante, {<span key="hl" className="al-hl-x lp-hl">senza</span>} il telefono che squilla.</Words>
        </h1>
        <p className="bk-hero-lead" data-m="fade-up" style={d(900)}>
          I clienti prenotano dal tuo sito a qualsiasi ora. Tu vedi tutto in un portale che apri dal telefono, anche durante il servizio. I tavoli li assegna Alpwise book.
        </p>
        <div className="bk-hero-actions" data-m="fade-up" style={d(1050)}>
          <Button size="lg" href="/contatti">Chiedi una prova sul tuo locale</Button>
          <Button size="lg" variant="glass" href="#come">Guarda come funziona</Button>
        </div>
      </div>
      <div className="al-container bk-hero-vis" data-m="fade-up" style={d(1200)}>
        <BrowserShot shot={shots.oggi} url={PORTAL} priority className="bk-hero-desk" />
        <PhoneShot shot={shots.mOggi} priority className="bk-hero-phone" />
      </div>
    </Scene>
  );
}

/** Il problema, detto in una frase che si accende mentre scorri. */
export function BookIntro() {
  return (
    <Scene as="section" className="al-section bk-intro" aria-label="Perché Alpwise book">
      <div className="al-container">
        <Kicker className="lp-kicker-sub">Perché l&apos;abbiamo fatto</Kicker>
        <ScrollRead className="lp-statement" text="Il sabato sera il telefono squilla mentre porti i piatti. Con Alpwise book le prenotazioni arrivano da sole, già al tavolo giusto." />
      </div>
    </Scene>
  );
}

/** Per il cliente: i quattro passi della prenotazione, dal telefono. */
export function BookCustomer() {
  return (
    <Scene as="section" id="come" className="al-section al-anchor bk-customer" aria-labelledby="cliente-t">
      <div className="al-container">
        <div className="al-head">
          <Kicker>Per i tuoi clienti</Kicker>
          <h2 id="cliente-t">Prenotare è questione di trenta secondi.</h2>
          <p>Persone, giorno, orario, nome. Vede solo gli orari con un tavolo libero davvero, e riceve subito la conferma.</p>
        </div>
        <ol className="bk-steps" data-m="stagger">
          {steps.map((s, i) => (
            <li key={s.title} className="bk-step" style={{ '--i': i } as CSSProperties}>
              <PhoneShot shot={s.shot} />
              <p><span className="bk-num">{String(i + 1).padStart(2, '0')}</span>{s.title}</p>
            </li>
          ))}
        </ol>
        <p className="bk-note">Schermate vere di Alpwise book, con dati di esempio.</p>
      </div>
    </Scene>
  );
}

/** Sul tuo sito: il codice da incollare e la pagina da computer. */
export function BookEmbed() {
  return (
    <Scene as="section" className="al-section bk-embed" aria-labelledby="sito-t">
      <div className="al-container bk-split">
        <div className="bk-split-text" data-m="fade-up">
          <Kicker className="lp-kicker-sub">Sul tuo sito</Kicker>
          <h2 id="sito-t" className="bk-h2">Il modulo entra nel tuo sito.</h2>
          <p className="bk-lead">Lo aggiungiamo noi al sito che hai già: si adatta all&apos;altezza della pagina e ai colori chiari o scuri. Se un sito non ce l&apos;hai, c&apos;è la tua pagina su Alpwise book da mettere su Google, Instagram e WhatsApp.</p>
          <ul className="bk-checks">
            <li>Funziona solo sui domini che ci indichi</li>
            <li>Verifica anti-spam di Cloudflare, senza puzzle da risolvere</li>
            <li>Il cliente può annullare da solo, con il link nell&apos;email</li>
          </ul>
        </div>
        <div data-m="fade-up" style={d(200)}>
          <BrowserShot shot={shots.widgetDesk} url={PAGE} />
        </div>
      </div>
    </Scene>
  );
}

/** Per te: la vista del giorno, punto per punto. */
export function BookPortal() {
  return (
    <Scene as="section" className="al-section bk-portal" aria-labelledby="portale-t">
      <div className="al-container">
        <div className="al-head">
          <Kicker>Per te, durante il servizio</Kicker>
          <h2 id="portale-t">Il servizio di oggi, in una pagina.</h2>
          <p>Pranzo e cena separati, persone e tavoli occupati, chi è da confermare. Confermi, rifiuti o segni chi non si è presentato con un tocco.</p>
        </div>
        <div data-m="fade-up"><BrowserShot shot={shots.oggiChiaro} url={PORTAL} /></div>
        <ul className="bk-features" data-m="stagger">
          {features.map((f, i) => (
            <li key={f.title} style={{ '--i': i } as CSSProperties}>
              <span className="bk-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Scene>
  );
}

/** Dal telefono: tre schermate e due righe. */
export function BookMobile() {
  return (
    <Scene as="section" className="al-section bk-mobile" aria-labelledby="telefono-t">
      <div className="al-container bk-split bk-split-rev">
        <div className="bk-mobile-phones" data-m="stagger">
          <PhoneShot shot={shots.mOggi} className="is-a" />
          <PhoneShot shot={shots.mDettaglio} className="is-b" />
          <PhoneShot shot={shots.mOggiChiaro} className="is-c" />
        </div>
        <div className="bk-split-text" data-m="fade-up" style={d(150)}>
          <Kicker className="lp-kicker-sub">Dal telefono</Kicker>
          <h2 id="telefono-t" className="bk-h2">Pensato per chi è in sala, non alla scrivania.</h2>
          <p className="bk-lead">Bottoni grandi, testo leggibile, tema scuro per la sera e chiaro per il giorno. Lo apri dal browser del telefono, senza installare niente.</p>
          <ul className="bk-checks">
            <li>Le nuove prenotazioni compaiono da sole, con un avviso</li>
            <li>Sposti una prenotazione in un altro orario o tavolo</li>
            <li>Chiami il cliente toccando il suo numero</li>
          </ul>
        </div>
      </div>
    </Scene>
  );
}

/** Calendario e prenotazioni inserite a mano, con le linguette. */
export function BookCalendar() {
  return (
    <Scene as="section" className="al-section bk-calendar" aria-labelledby="calendario-t">
      <div className="al-container">
        <div className="al-head">
          <Kicker>Calendario e telefono</Kicker>
          <h2 id="calendario-t">Tutte le prenotazioni, da qualsiasi parte arrivino.</h2>
          <p>Quelle al telefono e quelle di chi entra senza prenotare le inserisci tu: occupano i tavoli come le altre.</p>
        </div>
        <div data-m="fade-up">
          <ShotTabs
            label="Schermate del calendario"
            url={PORTAL}
            tabs={[
              { id: 'settimana', label: 'Settimana', text: 'Prenotazioni e persone giorno per giorno.', shot: shots.settimana },
              { id: 'mese', label: 'Mese', text: 'Il mese intero, con quelle da confermare.', shot: shots.mese },
              { id: 'nuova', label: 'Nuova prenotazione', text: 'Telefono o senza prenotazione: il tavolo lo sceglie Alpwise book.', shot: shots.nuova },
              { id: 'scheda', label: 'Scheda', text: 'Dati, stato e spostamento di orario o tavolo.', shot: shots.dettaglio },
            ]}
          />
        </div>
      </div>
    </Scene>
  );
}

/** Le impostazioni del titolare, con le linguette. */
export function BookSettings() {
  return (
    <Scene as="section" className="al-section bk-settings" aria-labelledby="impostazioni-t">
      <div className="al-container">
        <div className="al-head">
          <Kicker>Il tuo locale, le tue regole</Kicker>
          <h2 id="impostazioni-t">Orari, tavoli e chiusure li decidi tu.</h2>
          <p>Le impostazioni le vede solo il titolare. Lo staff gestisce le prenotazioni e basta.</p>
        </div>
        <div data-m="fade-up">
          <ShotTabs
            label="Schermate delle impostazioni"
            url={`${PORTAL}/impostazioni`}
            tabs={[
              { id: 'locale', label: 'Locale', text: 'Recapiti, conferma automatica, anticipo e persone massime.', shot: shots.locale },
              { id: 'orari', label: 'Servizi e orari', text: 'Pranzo e cena, durata e giorni di apertura.', shot: shots.orari },
              { id: 'tavoli', label: 'Tavoli', text: 'Posti minimi e massimi, sala o dehors.', shot: shots.tavoli },
              { id: 'chiusure', label: 'Chiusure', text: 'Ferie, festivi e orari ridotti.', shot: shots.chiusure },
              { id: 'team', label: 'Team', text: 'Inviti lo staff con la sua email.', shot: shots.team },
            ]}
          />
        </div>
      </div>
    </Scene>
  );
}

/** Le email: al cliente e al locale. */
export function BookEmails() {
  return (
    <Scene as="section" className="al-section bk-emails" aria-labelledby="email-t">
      <div className="al-container bk-split">
        <div className="bk-split-text" data-m="fade-up">
          <Kicker className="lp-kicker-sub">Email</Kicker>
          <h2 id="email-t" className="bk-h2">Conferma, promemoria e annullamento partono da soli.</h2>
          <p className="bk-lead">Il cliente riceve la conferma con il link per annullare e un promemoria il giorno prima. Se annulla, il tavolo torna libero. Tu ricevi un&apos;email per ogni nuova prenotazione dal sito.</p>
          <p className="bk-note">Le email partono con il nome del tuo locale e le risposte arrivano a te.</p>
        </div>
        <div className="bk-emails-pair" data-m="stagger">
          <PhoneShot shot={shots.emailCliente} className="bk-email" />
          <PhoneShot shot={shots.emailLocale} className="bk-email" />
        </div>
      </div>
    </Scene>
  );
}

/** Privacy e sicurezza, in tre colonne. */
export function BookTrust() {
  const items = [
    { t: 'Dati in Europa', p: 'Database a Parigi. Ogni locale vede solo le sue prenotazioni, e il controllo è nel database, non solo nelle pagine.' },
    { t: 'Privacy già pronta', p: 'Informativa per il tuo locale, consenso registrato e prenotazioni rese anonime dopo il periodo che scegli tu.' },
    { t: 'Niente spam', p: 'Verifica anti-bot di Cloudflare e limiti alle richieste: il modulo resta aperto ai clienti, chiuso ai robot.' },
  ];
  return (
    <Scene as="section" className="al-section bk-trust" aria-labelledby="privacy-t">
      <div className="al-container">
        <div className="al-head">
          <Kicker>Privacy e sicurezza</Kicker>
          <h2 id="privacy-t">I dati dei tuoi clienti restano al sicuro.</h2>
        </div>
        <ul className="bk-trust-grid" data-m="stagger">
          {items.map((it, i) => (
            <li key={it.t} style={{ '--i': i } as CSSProperties}><h3>{it.t}</h3><p>{it.p}</p></li>
          ))}
        </ul>
      </div>
    </Scene>
  );
}

/** Domande e chiusura con l'invito. */
export function BookFaq() {
  return (
    <Scene as="section" className="al-section bk-faq" aria-labelledby="book-faq-t">
      <div className="al-container">
        <Head label="Domande" title={<span id="book-faq-t">Prima di provarlo.</span>} />
        <Accordion size="lg" openFirst items={faqs} />
      </div>
    </Scene>
  );
}

export function BookCta() {
  return (
    <Scene as="section" className="al-horizon al-grid al-grid-on-horizon bk-cta" aria-labelledby="book-cta-t">
      <div className="al-container bk-cta-body">
        <h2 id="book-cta-t"><Words>Proviamolo sul tuo locale.</Words></h2>
        <p data-m="fade-up" style={d(400)}>Ci racconti tavoli e orari, e ti mostriamo come prenoterebbero i tuoi clienti. Trenta minuti, senza impegno.</p>
        <div className="bk-hero-actions" data-m="fade-up" style={d(550)}>
          <Button size="lg" href="/contatti">Prenota una prova</Button>
          <Button size="lg" variant="glass" href="#come">Rivedi come funziona</Button>
        </div>
      </div>
    </Scene>
  );
}
