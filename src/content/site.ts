// Contenuti del sito. I valori `null` sono ancora da fornire: il sito li nasconde.
// Clienti, numeri e citazioni devono essere reali (CLAUDE.md): non riempirli con esempi.

// Dominio pubblico: `NEXT_PUBLIC_SITE_URL` se impostato, altrimenti il dominio di produzione che Vercel espone in build.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : 'http://localhost:3000')
).replace(/\/$/, '');

// Dati usati da metadata, sitemap, dati strutturati (JSON-LD) e llms.txt.
export const site = {
  name: 'Alpwise Studio',
  title: 'Alpwise Studio · Consulenza digitale per PMI a Gallarate',
  description: 'Consulenza digitale per le PMI: siti, gestionali su misura, AI e automazioni. Tre consulenti e sviluppatori a Gallarate (VA): prima ascoltiamo come lavori, poi ti diciamo cosa serve davvero.',
  locale: 'it_IT',
  locality: 'Gallarate',
  province: 'VA',
  region: 'Lombardia',
  postalCode: '21013',
  country: 'IT',
  geo: { lat: 45.66, lng: 8.79 },
  areaServed: ['Gallarate', 'Provincia di Varese', 'Lombardia', 'Italia'], // aggiungi le città servite davvero (es. Busto Arsizio, Varese, Milano)
  languages: ['it'],
  sameAs: [] as string[], // profili ufficiali (LinkedIn, GitHub…): aggiungili quando sono pubblici
};

export const contact = {
  email: 'alpwisestudio@gmail.com' as string | null,
  phone: '+39 377 318 3236' as string | null,
  vat: null as string | null,
  address: 'Gallarate, VA',
  reply: 'Entro un giorno lavorativo',
  coords: '45.66°N 8.79°E',
};

// Dati per Privacy e Cookie. Vanno forniti dallo studio e verificati da un consulente prima della pubblicazione.
export const legal = {
  owner: null as string | null,          // ragione sociale o nome del titolare
  address: null as string | null,        // indirizzo completo della sede
  pec: null as string | null,
  hosting: null as string | null,        // fornitore di hosting, es. nome e paese
  formProcessor: null as string | null,  // servizio che riceve il modulo contatti
  retention: null as string | null,      // per quanto conservate le richieste di contatto
  logRetention: null as string | null,   // per quanto il fornitore conserva i log tecnici
  updated: null as string | null,        // data ultimo aggiornamento, gg.mm.aaaa
};

// Parti del sito non ancora pronte per il pubblico. Rimetti `true` quando i contenuti sono reali.
export const features = {
  legal: false,       // pagine Privacy e Cookie: servono dati legali verificati
  contactForm: true,  // modulo contatti (invia a /api/contact: email via Resend, oppure CONTACT_WEBHOOK_URL)
};

export const nav = [
  { label: 'Come lavoriamo', href: '/#metodo' },
  { label: 'Servizi', href: '/#servizi' },
  { label: 'BOOK', href: '/book' },
  { label: 'Studio', href: '/#studio' },
  { label: 'Domande', href: '/#domande' },
];

// Foto del sito (public/photos). Tutte scure sotto il velo Notte: testo bianco sopra.
export const photos = {
  lago: { src: '/photos/lago-alba.jpg', width: 1536, height: 1024, alt: "Lago Maggiore all'alba con le Prealpi" },
  consulenza: { src: '/photos/consulenza.jpg', width: 1024, height: 1024, alt: 'Consulenza al tavolo in bottega' },
  sentiero: { src: '/photos/sentiero.jpg', width: 1024, height: 1280, alt: 'Sentiero che sale verso un rifugio' },
  quaderno: { src: '/photos/quaderno.jpg', width: 1024, height: 1024, alt: 'Mani che scrivono un piano su un quaderno' },
  nebbia: { src: '/photos/lago-nebbia.jpg', width: 1024, height: 1024, alt: 'Lago nella nebbia del mattino tra le montagne' },
};

// `title`: la riga grande della home. `name`, `lead`, `points`: per dati strutturati e llms.txt.
export const services = [
  {
    id: 'web', name: 'Siti vetrina', title: 'Siti che portano clienti',
    text: 'Vetrina, prenotazioni e contatti che arrivano da soli.',
    lead: 'Un sito chiaro che dice chi sei, cosa fai e come contattarti.',
    points: ['Design su misura', 'Testi e SEO locale', 'Prenotazioni online', 'Hosting e manutenzione'],
  },
  {
    id: 'software', name: 'Gestionali su misura', title: 'Gestionali su misura',
    text: 'Al posto di Excel e messaggi sparsi, uno strumento fatto su di te.',
    lead: 'Quando fogli Excel ed email non bastano più.',
    points: ['Gestionali e portali', 'Aree clienti', 'Prenotazioni'],
  },
  {
    id: 'ai', name: 'AI e automazioni', title: 'AI, solo se serve',
    text: 'Ti diciamo con onestà quando ti fa risparmiare tempo e quando no.',
    lead: 'Meno lavoro ripetitivo, più tempo per il resto.',
    points: ['Estrazione dati da documenti', 'Assistenti sui dati aziendali', 'Integrazioni tra strumenti'],
  },
];

export const steps = [
  { title: 'Ascoltiamo', text: 'Un caffè, anche online. Ci racconti una tua giornata di lavoro.', photo: 'consulenza' },
  { title: 'Proponiamo', text: 'Cosa serve, cosa no, quanto costa e in quanto tempo. In italiano, non in sigle.', photo: 'quaderno' },
  { title: 'Costruiamo e restiamo', text: 'Lo realizziamo, ti insegniamo a usarlo e restiamo raggiungibili.', photo: 'sentiero' },
] as const;

export const faqs = [
  { q: 'Quanto costa?', a: 'Dipende da cosa serve davvero. Dopo la prima chiacchierata, che è gratuita, ricevi una proposta scritta con un prezzo chiaro.' },
  { q: 'Devo capirne di tecnologia?', a: 'No. Tu conosci il tuo lavoro, noi gli strumenti. Ti spieghiamo ogni scelta con parole semplici.' },
  { q: 'Lavorate solo in zona?', a: 'No. Veniamo volentieri da te in azienda tra Varese, Milano e i laghi. Più lontano lavoriamo online, con videochiamate e documenti condivisi.' },
  { q: 'E dopo il lancio?', a: 'Restiamo. Aggiornamenti, piccole modifiche e un numero da chiamare quando qualcosa non va.' },
];

// Cosa chiede il modulo contatti ("Ti serve una mano con").
export const needs = ['Sito', 'Gestionale', 'AI e automazioni', 'Non lo so ancora'];
