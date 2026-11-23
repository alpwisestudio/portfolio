// Contenuti della pagina /book. Gli screenshot (public/book) vengono dal portale vero, con dati di esempio inventati,
// a 4x: li rifà scripts/portfolio-shots.mjs di alpwise-book.
import type { Shot } from '@/components/book/Shots';

const desk = (name: string, alt: string): Shot => ({ src: `/book/${name}.webp`, alt, w: 4320, h: 2700 });
const phone = (name: string, alt: string, h = 3376): Shot => ({ src: `/book/${name}.webp`, alt, w: 1560, h });

export const shots = {
  oggi: desk('portale-oggi', 'Portale, vista del giorno: settimana con le persone per giorno, poi pranzo con sei prenotazioni, stato e azioni'),
  settimana: desk('portale-settimana', 'Calendario della settimana: prenotazioni e persone per ogni giorno'),
  mese: desk('portale-mese', 'Calendario del mese: persone per giorno e prenotazioni da confermare'),
  dettaglio: desk('portale-dettaglio', 'Scheda di una prenotazione: dati, stato, annulla e sposta in un altro orario'),
  nuova: desk('portale-nuova', 'Nuova prenotazione dal portale, per chi chiama o arriva senza prenotazione'),
  locale: desk('impostazioni-locale', 'Impostazioni del locale: recapiti, email per le notifiche, conferma automatica, anticipo e persone massime'),
  orari: desk('impostazioni-orari', 'Servizi e orari: durata, intervallo tra gli orari e giorni di apertura'),
  tavoli: desk('impostazioni-tavoli', 'Tavoli: posti minimi e massimi e zona di ogni tavolo'),
  chiusure: desk('impostazioni-chiusure', 'Chiusure: giorni chiusi e orari ridotti, come Natale e San Silvestro'),
  team: desk('impostazioni-team', 'Team: titolare e staff, con l’invito per una nuova persona'),
  widgetDesk: { src: '/book/widget-orari.webp', alt: 'Pagina di prenotazione da computer: scelta dell’orario tra pranzo e cena', w: 2960, h: 2220 },
  oggiChiaro: desk('portale-oggi-chiaro', 'Portale in tema chiaro, vista del giorno: pranzo di sabato con stato e azioni di ogni prenotazione'),
  mOggi: phone('m-portale-oggi', 'Portale dal telefono, tema scuro: il pranzo di sabato con le prenotazioni'),
  mOggiChiaro: phone('m-portale-oggi-chiaro', 'Portale dal telefono, tema chiaro'),
  mDettaglio: phone('m-portale-dettaglio', 'Scheda della prenotazione dal telefono'),
  mPersone: phone('m-widget-persone', 'Prenotazione, passo 1: quante persone'),
  mOrario: phone('m-widget-orario', 'Prenotazione, passo 3: orari liberi per pranzo e cena'),
  mDati: phone('m-widget-dati', 'Prenotazione, passo 4: nome, email, telefono, note e consenso privacy'),
  mFatto: phone('m-widget-fatto', 'Prenotazione confermata, con il link per annullare'),
  emailCliente: phone('email-cliente', 'Email al cliente: prenotazione confermata, con il link per vederla o annullarla', 4120),
  emailLocale: phone('email-locale', 'Email al locale: nuova prenotazione dal sito'),
};

export const steps = [
  { title: 'Quante persone', shot: shots.mPersone },
  { title: 'Che orario', shot: shots.mOrario },
  { title: 'I suoi dati', shot: shots.mDati },
  { title: 'Fatto', shot: shots.mFatto },
];

export const features = [
  { title: 'Il tavolo lo sceglie Alpwise book', text: 'Per ogni gruppo prende il tavolo libero più piccolo che basta. Due persone non occupano più il tavolo da otto.' },
  { title: 'Niente doppie prenotazioni', text: 'Il controllo è nel database: due clienti che prenotano nello stesso istante non prendono lo stesso tavolo.' },
  { title: 'In tempo reale', text: 'Una prenotazione dal sito compare subito nel portale, anche sul telefono di chi è in sala.' },
  { title: 'Conferma tua o automatica', text: 'Puoi confermare ogni richiesta a mano oppure lasciare che Alpwise book confermi da solo.' },
];

export const faqs = [
  { q: 'Mi serve un sito nuovo?', a: 'No. Il modulo entra nel sito che hai già: lo aggiungiamo noi. Se il sito non ce l’hai, c’è la tua pagina su book.alpwise.studio da mettere su Google, Instagram e WhatsApp.' },
  { q: 'Lo posso usare dal telefono?', a: 'Sì, il portale è fatto prima di tutto per il telefono: lo apri durante il servizio come un’app, senza installare niente.' },
  { q: 'E le prenotazioni al telefono?', a: 'Le inserisci tu dal portale, anche quelle di chi arriva senza prenotare. Finiscono nello stesso calendario e occupano i tavoli come le altre.' },
  { q: 'Ho più di un locale.', a: 'Va bene: ogni locale ha tavoli, orari e pagina suoi, e tu passi dall’uno all’altro dallo stesso account.' },
  { q: 'Quanto costa?', a: 'Dipende da quanti locali hai e se ti serve anche il sito. Te lo diciamo dopo una chiacchierata di mezz’ora, con un prezzo scritto.' },
];
