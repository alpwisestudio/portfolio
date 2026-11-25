import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd, pageLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/components/seo/meta';
import { LegalPage, Val, type LegalSection } from '@/components/landing/LegalPage';
import { contact, features, legal } from '@/content/site';

const seo = { path: '/privacy', title: 'Privacy', description: 'Come Alpwise Studio tratta i dati personali raccolti dal sito.' };
export const metadata: Metadata = pageMetadata(seo);

// Struttura secondo l'art. 13 del GDPR. I segnaposto vanno riempiti e il testo verificato da un consulente.
const joinNames = (names: string[]) => names.length > 1 ? `${names.slice(0, -1).join(', ')} e ${names.at(-1)}` : names[0];

const sections: LegalSection[] = [
  {
    id: 'titolare', title: 'Chi tratta i tuoi dati',
    body: (
      <>
        {/* Sede, P.IVA e PEC compaiono solo quando esistono: finché lo studio non è un'attività registrata basta chi è il titolare e come contattarlo. */}
        {legal.company ? (
          <p>Il titolare del trattamento è <strong>{legal.company}</strong>{legal.address && <>, con sede in {legal.address}</>}{contact.vat && <>, P.IVA {contact.vat}</>}.</p>
        ) : legal.owners.length > 1 ? (
          <>
            <p>I dati sono trattati da <strong>Alpwise Studio</strong>, di {joinNames(legal.owners)}, contitolari del trattamento (art. 26 GDPR){legal.address && <>, con sede in {legal.address}</>}.</p>
            <p>Tra noi c&apos;è un accordo che stabilisce chi fa cosa: la persona che gestisce la casella email risponde alle richieste sui dati. Se vuoi, te ne mandiamo il contenuto essenziale. Puoi comunque rivolgerti a ciascuno di noi.</p>
          </>
        ) : (
          <p>Il titolare del trattamento è <strong>Alpwise Studio</strong>, di <Val v={legal.owners[0]} ph="Nome del titolare" />{legal.address && <>, con sede in {legal.address}</>}.</p>
        )}
        <p>Per qualsiasi domanda sui tuoi dati scrivi a <Val v={contact.email} ph="Email" />{legal.pec && <> oppure alla PEC {legal.pec}</>}.</p>
      </>
    ),
  },
  {
    id: 'dati', title: 'Quali dati raccogliamo',
    body: (
      <>
        <p><strong>Dati che ci scrivi tu.</strong> Quando usi il modulo contatti raccogliamo nome ed email e, se li inserisci, azienda, telefono, il servizio che ti interessa e il messaggio. Lo stesso vale se ci scrivi per email o ci chiami. Ti chiediamo di non inserire dati sensibili.</p>
        <p><strong>Dati tecnici di navigazione.</strong> Il server che ospita il sito registra automaticamente alcuni dati per farlo funzionare e proteggerlo: indirizzo IP, data e ora della richiesta, pagina richiesta, tipo di browser. Non li usiamo per identificarti.</p>
        <p>Il sito non usa cookie di analisi o di profilazione. I dettagli sono nella <a href="/cookie">pagina sui cookie</a>.</p>
      </>
    ),
  },
  {
    id: 'finalita', title: 'Perché li usiamo',
    body: (
      <ul>
        <li><strong>Rispondere alla tua richiesta</strong> e, se vuoi, prepararti un preventivo. Base giuridica: misure precontrattuali richieste da te (art. 6.1.b GDPR).</li>
        <li><strong>Far funzionare il sito e tenerlo sicuro</strong>, per esempio contro abusi del modulo. Base giuridica: nostro legittimo interesse (art. 6.1.f GDPR).</li>
        <li><strong>Rispettare obblighi di legge</strong>, se la richiesta diventa un contratto (fatturazione, contabilità). Base giuridica: obbligo legale (art. 6.1.c GDPR).</li>
      </ul>
    ),
  },
  {
    id: 'conservazione', title: 'Per quanto li conserviamo',
    body: (
      <ul>
        <li>Richieste dal modulo contatti: <Val v={legal.retention} ph="Periodo, es. 12 mesi dall'ultimo contatto" />.</li>
        <li>Dati tecnici di navigazione: <Val v={legal.logRetention} ph="Periodo indicato dal fornitore di hosting" />.</li>
        <li>Dati legati a un contratto: per il tempo previsto dalla legge per i documenti fiscali.</li>
      </ul>
    ),
  },
  {
    id: 'destinatari', title: 'Chi li riceve',
    body: (
      <>
        <p>Non vendiamo né cediamo i tuoi dati. Li trattano solo i fornitori che ci servono per far funzionare il sito, nominati responsabili del trattamento:</p>
        <ul>
          <li>Hosting del sito: <Val v={legal.hosting} ph="Fornitore e paese" />.</li>
          <li>Invio del modulo contatti per email: <Val v={legal.formProcessor} ph="Servizio e paese" />.</li>
          <li>Casella email su cui riceviamo le richieste: <Val v={legal.mailbox} ph="Servizio e paese" />.</li>
        </ul>
        <p>Vercel e Resend hanno sede negli Stati Uniti. Il trasferimento dei dati avviene con le garanzie previste dal GDPR: Vercel aderisce all&apos;EU-U.S. Data Privacy Framework, ed entrambi applicano le clausole contrattuali standard approvate dalla Commissione europea. Google può trattare dati anche fuori dall&apos;Unione europea con le stesse garanzie.</p>
      </>
    ),
  },
  {
    id: 'obbligo', title: 'Sei obbligato a darceli?',
    body: <p>No. Nome ed email però ci servono per risponderti: senza, non possiamo dare seguito alla richiesta.</p>,
  },
  {
    id: 'diritti', title: 'I tuoi diritti',
    body: (
      <>
        <p>In qualsiasi momento puoi chiederci di:</p>
        <ul>
          <li>sapere quali dati abbiamo su di te e averne una copia;</li>
          <li>correggerli o completarli;</li>
          <li>cancellarli, o limitarne l&apos;uso;</li>
          <li>riceverli in un formato leggibile da un computer;</li>
          <li>opporti al trattamento basato sul nostro legittimo interesse.</li>
        </ul>
        <p>Scrivi a <Val v={contact.email} ph="Email" />: ti rispondiamo entro un mese. Se pensi che il trattamento non sia corretto puoi presentare reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" rel="noopener">garanteprivacy.it</a>).</p>
      </>
    ),
  },
  {
    id: 'modifiche', title: 'Modifiche',
    body: <p>Se cambiamo il modo in cui trattiamo i dati aggiorniamo questa pagina e la data in alto.</p>,
  },
];

export default function PrivacyPage() {
  if (!features.legal) notFound(); // bozza: nascosta finché i dati legali non sono verificati
  return (
    <>
      <JsonLd data={pageLd({ ...seo, name: seo.title })} />
      <LegalPage label="Privacy" title="Come trattiamo i tuoi dati" lead="Raccogliamo solo i dati che servono per risponderti e far funzionare il sito. Qui trovi quali sono, perché li usiamo e come puoi controllarli." sections={sections} />
    </>
  );
}
