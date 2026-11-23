'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Image from 'next/image';
import { Button, Checkbox, Field, Glass, Input, Kicker, Toast } from '@alpwisestudio/ui';
import { Scene } from '@/components/motion';
import { contact, features, needs, photos, services, type Service } from '@/content/site';

type Errors = Partial<Record<'name' | 'email', string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'off' | 'limit';

/**
 * Pagina Contatti, sotto l'apertura: a sinistra email, telefono e sede in grande; a destra, su una foto,
 * il modulo in vetro (invia a /api/contact) oppure, finché `features.contactForm` è spento, l'email.
 */
export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  // Quando il modulo è comparso: il server scarta gli invii troppo rapidi per essere di una persona.
  const startedAt = useRef(0);
  // Arrivi da una pagina dei servizi (/contatti?servizio=siti): la sua voce è già spuntata e il titolo lo dice.
  // Letto dopo il montaggio, così la pagina resta statica.
  const [from, setFrom] = useState<Service>();
  useEffect(() => {
    startedAt.current = Date.now();
    const slug = new URLSearchParams(location.search).get('servizio');
    setFrom(services.find((s) => s.slug === slug));
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get('name') ?? '').trim()) next.name = 'Scrivi il tuo nome.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(data.get('email') ?? ''))) next.email = 'Manca la parte dopo la @, es. mario@azienda.it';
    setErrors(next);
    if (Object.keys(next).length) { e.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(); return; }
    setStatus('sending');
    const body = {
      name: data.get('name'), company: data.get('company'), email: data.get('email'), phone: data.get('phone'),
      service: data.getAll('service').join(', '), message: data.get('message'), website: data.get('website'), startedAt: startedAt.current,
    };
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      setStatus(res.ok ? 'sent' : res.status === 503 ? 'off' : res.status === 429 ? 'limit' : 'error');
    } catch { setStatus('error'); }
  }

  return (
    <Scene as="section" id="contatti" className="al-section al-anchor lp-contact">
      <div className="al-container lp-contact-grid">
        <div className="lp-contact-info" data-m="fade-up">
          {contact.email && (
            <a className="lp-contact-row" href={`mailto:${contact.email}`}>
              <Kicker>Scrivici</Kicker>
              <span className="lp-contact-big">{contact.email}<span aria-hidden="true" className="lp-arr">→</span></span>
            </a>
          )}
          {contact.phone && (
            <a className="lp-contact-row" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
              <Kicker>Chiamaci</Kicker>
              <span className="lp-contact-big lp-tab">{contact.phone}<span aria-hidden="true" className="lp-arr">→</span></span>
            </a>
          )}
          <div className="lp-contact-row">
            <Kicker>Ci vediamo</Kicker>
            <span className="lp-contact-big">Da te o online</span>
            <span className="lp-contact-note">Veniamo noi in azienda tra Varese, Milano e i laghi. Altrimenti una videochiamata.</span>
          </div>
          <div className="lp-contact-photo"><Image src={photos.quaderno.src} alt={photos.quaderno.alt} fill sizes="(max-width: 860px) 100vw, 45vw" /></div>
        </div>

        <div className="al-photo al-photo-soft lp-contact-panel" data-m="fade-up">
          <Image className="al-photo-img" src={photos.sentiero.src} alt="" fill sizes="(max-width: 860px) 100vw, 50vw" />
          <Glass className="lp-contact-glass">
            {!features.contactForm && contact.email ? (
              <div className="lp-form-head">
                <Kicker>Scrivici</Kicker>
                <a className="lp-contact-big" href={`mailto:${contact.email}`}>{contact.email}</a>
                <p className="lp-contact-note">Raccontaci in due righe cosa fai e cosa ti rallenta. Ti rispondiamo entro un giorno lavorativo.</p>
              </div>
            ) : status === 'sent' ? (
              <Toast tone="success" title="Messaggio inviato">Ti rispondiamo entro un giorno lavorativo.</Toast>
            ) : (
              <form className="al-form lp-form" onSubmit={submit} noValidate>
                <div className="lp-form-head">
                  <Kicker>Oppure lascia due righe</Kicker>
                  <h2>Ti richiamiamo noi.</h2>
                  {from && <p className="lp-contact-note" aria-live="polite">Arrivi dalla pagina {from.name}: l’abbiamo già segnato qui sotto. Se ti serve altro, aggiungilo.</p>}
                </div>
                {/* Trappola per i bot: invisibile e fuori dal tab, le persone la lasciano vuota. */}
                <div className="sr-only" aria-hidden="true"><label>Sito web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                <div className="al-form-row">
                  <Field label="Nome" required error={errors.name}><Input name="name" autoComplete="name" /></Field>
                  <Field label="Azienda"><Input name="company" autoComplete="organization" /></Field>
                </div>
                <div className="al-form-row">
                  <Field label="Email" required error={errors.email}><Input name="email" type="email" autoComplete="email" /></Field>
                  <Field label={<>Telefono <span className="lp-optional">facoltativo</span></>}><Input name="phone" type="tel" autoComplete="tel" /></Field>
                </div>
                <fieldset className="lp-needs" key={from?.slug ?? 'none'}>
                  <legend className="al-label">Ti serve una mano con</legend>
                  <div className="lp-chips">
                    {needs.map((n) => (
                      <label key={n} className="lp-chip"><input type="checkbox" name="service" value={n} defaultChecked={n === from?.need} /> {n}</label>
                    ))}
                  </div>
                </fieldset>
                <Field label="Di cosa ti occupi" hint="Per esempio: ristorante con 40 coperti, prenotazioni solo al telefono."><Input as="textarea" name="message" rows={4} /></Field>
                {features.legal && <Checkbox name="privacy" required>Ho letto l’<a href="/privacy">informativa privacy</a> e accetto di essere ricontattato.</Checkbox>}
                {status === 'error' && <Toast tone="danger" title="Invio non riuscito">Controlla la connessione e riprova.</Toast>}
                {status === 'limit' && <Toast tone="warning" title="Troppe richieste">Hai inviato diversi messaggi di seguito. Riprova tra qualche minuto o scrivici per email.</Toast>}
                {status === 'off' && <Toast tone="warning" title="Invio non ancora attivo">Il modulo non è ancora collegato. Riprova più tardi.</Toast>}
                <div className="lp-form-foot">
                  <Button type="submit" size="lg" loading={status === 'sending'}>{status === 'sending' ? 'Invio in corso' : 'Invia richiesta'}</Button>
                  <span className="lp-contact-note">Risponde una persona, non un bot.</span>
                </div>
              </form>
            )}
          </Glass>
        </div>
      </div>
    </Scene>
  );
}
