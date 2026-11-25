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
  // Titolari: le persone che gestiscono lo studio, contitolari (art. 26 GDPR) finché non c'è una società. Poi va la ragione sociale in `company`.
  owners: ['Luca Mimmo', 'Luisa Cerin Ogbeiwi', 'Vladyslav Bukator'] as string[],
  company: null as string | null,
  address: null as string | null,        // sede, facoltativa: compare solo se impostata
  pec: null as string | null,            // facoltativa: compare solo se impostata
  hosting: 'Vercel Inc., Stati Uniti' as string | null,                         // fornitore di hosting
  formProcessor: 'Resend (Plus Five Five, Inc.), Stati Uniti' as string | null, // servizio che invia il modulo contatti per email
  mailbox: 'Google Ireland Limited (Gmail), Irlanda' as string | null,          // casella su cui arrivano le richieste
  retention: "12 mesi dall'ultimo contatto, poi le cancelliamo" as string | null, // richieste di contatto
  logRetention: 'il tempo stabilito da Vercel per far funzionare e proteggere il servizio, come indicato nella sua informativa' as string | null, // log tecnici del fornitore
  updated: '25.11.2026' as string | null, // data ultimo aggiornamento, gg.mm.aaaa
};

// Parti del sito non ancora pronte per il pubblico. Rimetti `true` quando i contenuti sono reali.
export const features = {
  legal: true,        // pagine Privacy e Cookie: aggiornale quando cambiano servizi o dati raccolti
  contactForm: true,  // modulo contatti (invia a /api/contact: email via Resend, oppure CONTACT_WEBHOOK_URL)
};

export const nav = [
  { label: 'Come lavoriamo', href: '/#metodo' },
  { label: 'Servizi', href: '/#servizi' },
  { label: 'Alpwise book', href: '/book' },
  { label: 'Studio', href: '/#studio' },
  { label: 'Domande', href: '/#domande' },
];

// Foto del sito (public/photos). Tutte scure sotto il velo Notte: testo bianco sopra.
export const photos = {
  lago: { src: '/photos/lago-alba.jpg', width: 1536, height: 1024, alt: "Lago Maggiore all'alba con le Prealpi" },
  consulenza: { src: '/photos/consulenza.jpg', width: 1024, height: 1024, alt: 'Consulenza al tavolo in bottega' },
  sentiero: { src: '/photos/sentiero.jpg', width: 1024, height: 1280, alt: 'Sentiero che sale verso un rifugio' },
  quaderno: { src: '/photos/quaderno.jpg', width: 1024, height: 1024, alt: 'Mani che scrivono un piano su un quaderno' },
  varese: { src: '/photos/varese-sera.jpg', width: 1536, height: 1024, alt: 'Il lago di Varese all’imbrunire visto dal Campo dei Fiori, con il Monte Rosa all’orizzonte' },
  borgo: { src: '/photos/borgo-lago-sera.jpg', width: 1536, height: 1024, alt: 'Paese sul lago la sera, con le luci delle trattorie sull’acqua' },
  paese: { src: '/photos/paese-prealpi.jpg', width: 1536, height: 1024, alt: 'Paese delle Prealpi all’imbrunire, con le finestre accese' },
  nebbia: { src: '/photos/lago-nebbia.jpg', width: 1024, height: 1024, alt: 'Lago nella nebbia del mattino tra le montagne' },
};

// Un servizio: la riga della home (`title`, `text`), i dati strutturati e llms.txt (`name`, `lead`, `points`)
// e la sua pagina /servizi/<slug>. `need` è la voce del modulo contatti che /contatti?servizio=<slug> preseleziona.
// Nessun prezzo, tempo o caso inventato: quello che manca si chiede allo studio.
type Item = { title: string; text: string };
export type Service = {
  id: string; slug: string; need: (typeof needs)[number]; name: string; title: string;
  text: string; lead: string; points: Item[];
  page: {
    seo: { title: string; description: string };
    photo: keyof typeof photos;
    intro: string;
    audience: { title: string; lead: string; items: Item[] };
    example: { kind: 'book-site' | 'book-portal' } | { kind: 'approach'; title: string; lead: string; items: Item[] };
    faqs: { q: string; a: string }[];
    cta: { title: string; text: string };
  };
};

export const services: Service[] = [
  {
    id: 'web', slug: 'siti', need: 'Sito', name: 'Siti vetrina', title: 'Siti che portano clienti',
    text: 'Vetrina, prenotazioni e contatti che arrivano da soli.',
    lead: 'Un sito chiaro che dice chi sei, cosa fai e come contattarti.',
    points: [
      { title: 'Design su misura', text: 'Niente template comprati. Il sito nasce dalle tue foto, dai tuoi colori e da come parli ai tuoi clienti.' },
      { title: 'Testi e SEO locale', text: 'Scriviamo i testi con te e li prepariamo per le ricerche in zona, come «ristorante Gallarate». Pagine veloci, leggibili dal telefono.' },
      { title: 'Prenotazioni online', text: 'Se ti serve, il modulo di Alpwise book entra nel sito: i clienti prenotano da soli, tu vedi tutto dal telefono.' },
      { title: 'Hosting e manutenzione', text: 'Lo mettiamo online noi e lo teniamo aggiornato. Per una modifica scrivi a chi l’ha costruito.' },
    ],
    page: {
      seo: {
        title: 'Siti vetrina per attività locali a Gallarate e Varese',
        description: 'Siti vetrina su misura per negozi, ristoranti e studi tra Gallarate, Varese e Milano: design, testi, SEO locale, prenotazioni online e manutenzione. La prima chiacchierata è gratuita.',
      },
      photo: 'consulenza',
      intro: 'Lo disegniamo su di te, lo scriviamo in italiano semplice e lo facciamo trovare a chi ti cerca in zona.',
      audience: {
        title: 'Se ti riconosci in una di queste.',
        lead: 'Negozi, ristoranti, studi e laboratori tra Gallarate, Varese e i laghi.',
        items: [
          { title: 'Il sito c’è, ma non arriva niente', text: 'È fermo da anni, dal telefono non si legge e nessuno ti contatta da lì.' },
          { title: 'Ti trovano solo su Google Maps', text: 'Chi ti cerca vede orari e foto, ma non capisce cosa fai e perché sceglierti.' },
          { title: 'Le prenotazioni passano dal telefono', text: 'Rispondi a ogni chiamata, anche quando sei al lavoro con un cliente.' },
          { title: 'Stai aprendo adesso', text: 'Ti serve un sito serio dal primo giorno, fatto da qualcuno che puoi chiamare.' },
        ],
      },
      example: { kind: 'book-site' },
      faqs: [
        { q: 'Quanto costa un sito?', a: 'Dipende da pagine, testi e funzioni. Dopo la prima chiacchierata, che è gratuita, ricevi una proposta scritta con un prezzo chiaro.' },
        { q: 'Ho già un sito. Si può rifare?', a: 'Sì. Partiamo da quello che funziona, teniamo gli indirizzi che Google conosce già e cambiamo il resto.' },
        { q: 'I testi li devo scrivere io?', a: 'No. Li scriviamo noi partendo da una chiacchierata con te. Tu li leggi e li correggi prima che vadano online.' },
        { q: 'Lavorate solo a Gallarate?', a: 'No. Veniamo volentieri da te tra Varese, Milano e i laghi. Più lontano lavoriamo online, con videochiamate e documenti condivisi.' },
        { q: 'E dopo la messa online?', a: 'Restiamo. Aggiornamenti, piccole modifiche e un numero da chiamare quando qualcosa non va.' },
      ],
      cta: { title: 'Parliamo del tuo sito.', text: 'Ci racconti la tua attività e chi vuoi raggiungere. Ti diciamo cosa serve e cosa no. Trenta minuti, senza impegno.' },
    },
  },
  {
    id: 'software', slug: 'gestionali', need: 'Gestionale', name: 'Gestionali su misura', title: 'Gestionali su misura',
    text: 'Al posto di Excel e messaggi sparsi, uno strumento fatto su di te.',
    lead: 'Quando fogli Excel ed email non bastano più.',
    points: [
      { title: 'Gestionali e portali', text: 'Un’unica app web per il tuo team, con i dati in un posto solo. Si apre dal browser, anche dal telefono, senza installare niente.' },
      { title: 'Aree clienti', text: 'I tuoi clienti entrano con il loro accesso e vedono da soli pratiche, documenti e a che punto è il lavoro.' },
      { title: 'Prenotazioni', text: 'Agende, tavoli, turni o sale: la disponibilità la calcola il sistema, e due persone non prendono lo stesso posto.' },
    ],
    page: {
      seo: {
        title: 'Gestionali su misura per PMI a Gallarate e Varese',
        description: 'Gestionali, portali e aree clienti su misura per PMI tra Gallarate, Varese e Milano. Al posto di Excel e messaggi sparsi, uno strumento costruito su come lavori.',
      },
      photo: 'quaderno',
      intro: 'Costruiamo lo strumento che segue il tuo modo di lavorare, non il contrario.',
      audience: {
        title: 'Se il lavoro vive in dieci posti diversi.',
        lead: 'Aziende, studi e attività che sono cresciuti più in fretta dei loro strumenti.',
        items: [
          { title: 'L’Excel che nessuno osa toccare', text: 'Un foglio cresciuto negli anni, con formule che conosce solo una persona.' },
          { title: 'Ordini e richieste su WhatsApp', text: 'I messaggi si perdono e a fine giornata ricopi tutto a mano.' },
          { title: 'Le stesse domande dai clienti', text: 'A che punto è, quando è pronto, cosa manca. Un’area clienti risponde al posto tuo.' },
          { title: 'Un software comprato che non ti somiglia', text: 'Paghi funzioni che non usi e ti mancano proprio quelle che servono.' },
        ],
      },
      example: { kind: 'book-portal' },
      faqs: [
        { q: 'Quanto costa un gestionale su misura?', a: 'Dipende da quante cose deve fare. Spesso conviene partire dalla parte più urgente e crescere dopo. Il prezzo lo trovi nella proposta scritta, dopo la prima chiacchierata.' },
        { q: 'Si possono portare dentro i dati che ho già?', a: 'Guardiamo insieme i tuoi fogli e i tuoi archivi e ti diciamo cosa si può importare e come, prima di iniziare.' },
        { q: 'Funziona dal telefono?', a: 'Sì. È un’app web: si apre dal browser di computer, tablet e telefono, senza installare niente.' },
        { q: 'E se cambia il modo in cui lavoriamo?', a: 'Lo cambiamo con te. Dopo il lancio restiamo raggiungibili per modifiche e nuove funzioni.' },
      ],
      cta: { title: 'Raccontaci dove perdi tempo.', text: 'Ci mostri i fogli e i messaggi di una giornata normale. Ti diciamo cosa si può semplificare. Trenta minuti, senza impegno.' },
    },
  },
  {
    id: 'ai', slug: 'ai', need: 'AI e automazioni', name: 'AI e automazioni', title: 'AI, solo se serve',
    text: 'Ti diciamo con onestà quando ti fa risparmiare tempo e quando no.',
    lead: 'Meno lavoro ripetitivo, più tempo per il resto.',
    points: [
      { title: 'Estrazione dati da documenti', text: 'Dai PDF e dalle email che ricevi tiriamo fuori i dati che ti servono. Tu controlli e confermi prima che entrino nei tuoi sistemi.' },
      { title: 'Assistenti sui dati aziendali', text: 'Un assistente che risponde partendo dai tuoi documenti e ti dice da dove ha preso la risposta.' },
      { title: 'Integrazioni tra strumenti', text: 'Colleghiamo gli strumenti che usi già, così i dati passano da uno all’altro senza copia e incolla.' },
    ],
    page: {
      seo: {
        title: 'AI e automazioni per PMI a Gallarate e Varese',
        description: 'Automazioni e AI per PMI tra Gallarate, Varese e Milano: estrazione dati da documenti, assistenti sui dati aziendali e integrazioni tra strumenti. Solo dove ti fa risparmiare tempo davvero.',
      },
      photo: 'nebbia',
      intro: 'Prima guardiamo insieme dove perdi tempo. Poi ti diciamo se l’AI aiuta davvero o se basta un’automazione semplice.',
      audience: {
        title: 'Dove di solito si perde tempo.',
        lead: 'Lavori ripetitivi che fa una persona, ogni giorno, sempre allo stesso modo.',
        items: [
          { title: 'Dati ricopiati dai documenti', text: 'Fatture, ordini e preventivi in PDF: qualcuno li legge e li riscrive nel gestionale.' },
          { title: 'Le stesse domande, ogni giorno', text: 'Il team cerca listini, procedure e risposte tra cartelle e vecchie email.' },
          { title: 'Strumenti che non si parlano', text: 'Sito, posta, gestionale e fogli Excel: ogni passaggio è un copia e incolla.' },
        ],
      },
      example: {
        kind: 'approach',
        title: 'Prima la domanda, poi la tecnologia.',
        lead: 'Un caso da mostrarti qui non l’abbiamo ancora. Ti diciamo come lavoriamo.',
        items: [
          { title: 'Un processo alla volta', text: 'Partiamo da un lavoro solo, il più ripetitivo, e misuriamo quanto tempo prende oggi.' },
          { title: 'Prima una prova', text: 'Proviamo su un campione dei tuoi documenti veri, poi decidi tu se vale la pena andare avanti.' },
          { title: 'Se non serve, te lo diciamo', text: 'Spesso basta un’automazione senza AI, o un foglio fatto meglio. Costa meno e sbaglia meno.' },
        ],
      },
      faqs: [
        { q: 'L’AI sostituisce le persone?', a: 'No. Toglie il lavoro ripetitivo, come ricopiare dati. Le decisioni restano a te e al tuo team.' },
        { q: 'Dove finiscono i miei dati?', a: 'Prima di partire ti diciamo quali dati escono dall’azienda, verso quale servizio e perché. Se un dato non deve uscire, si progetta di conseguenza.' },
        { q: 'E se l’AI sbaglia?', a: 'Può succedere. Per questo chi usa lo strumento vede il risultato e lo conferma prima che entri nei tuoi sistemi.' },
        { q: 'Quanto costa?', a: 'Dipende dal processo e dalla quantità di documenti. Dopo la prima chiacchierata, che è gratuita, ricevi una proposta scritta con un prezzo chiaro.' },
      ],
      cta: { title: 'Mostraci un lavoro che ripeti ogni giorno.', text: 'Ti diciamo con onestà se l’AI ti fa risparmiare tempo o no. Trenta minuti, senza impegno.' },
    },
  },
];

export const serviceHref = (s: Service) => `/servizi/${s.slug}`;
export const contactHref = (s?: Service) => (s ? `/contatti?servizio=${s.slug}` : '/contatti');

export const steps = [
  { title: 'Ascoltiamo', text: 'Un caffè, anche online. Ci racconti una tua giornata di lavoro.' },
  { title: 'Proponiamo', text: 'Cosa serve, cosa no, quanto costa e in quanto tempo. In italiano, non in sigle.' },
  { title: 'Costruiamo e restiamo', text: 'Lo realizziamo, ti insegniamo a usarlo e restiamo raggiungibili.' },
] as const;

export const faqs = [
  { q: 'Quanto costa?', a: 'Dipende da cosa serve davvero. Dopo la prima chiacchierata, che è gratuita, ricevi una proposta scritta con un prezzo chiaro.' },
  { q: 'Devo capirne di tecnologia?', a: 'No. Tu conosci il tuo lavoro, noi gli strumenti. Ti spieghiamo ogni scelta con parole semplici.' },
  { q: 'Lavorate solo in zona?', a: 'No. Veniamo volentieri da te in azienda tra Varese, Milano e i laghi. Più lontano lavoriamo online, con videochiamate e documenti condivisi.' },
  { q: 'E dopo il lancio?', a: 'Restiamo. Aggiornamenti, piccole modifiche e un numero da chiamare quando qualcosa non va.' },
];

// Cosa chiede il modulo contatti ("Ti serve una mano con").
export const needs = ['Sito', 'Gestionale', 'AI e automazioni', 'Non lo so ancora'] as const;
