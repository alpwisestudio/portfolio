import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Button, Glass, Head, Kicker } from '@alpwisestudio/ui';
import { Scene, Words } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { contactHref, photos, type Service } from '@/content/site';

/** Apertura di un servizio: foto a tutta altezza, titolo in basso a sinistra, frase e i due bottoni. */
export function ServiceHero({ service: s }: { service: Service }) {
  const photo = photos[s.page.photo];
  return (
    <Scene as="header" className="al-photo lp-hero lp-hero-page lp-svc-hero">
      <Image className="al-photo-img" src={photo.src} alt="" fill priority sizes="100vw" />
      <div className="al-container lp-page-body">
        <div data-m="fade" style={d(100)}><Kicker className="lp-hero-kicker">{s.name}</Kicker></div>
        <h1 style={d(200)}><Words>{s.title}</Words></h1>
        <p className="lp-hero-lead" data-m="fade-up" style={d(600)}>{s.lead} {s.page.intro}</p>
        <div className="lp-hero-actions" data-m="fade-up" style={d(750)}>
          <Button size="lg" href={contactHref(s)}>Parliamone</Button>
          <Button size="lg" variant="glass" href="#metodo">Come funziona</Button>
        </div>
      </div>
    </Scene>
  );
}

/** Celle che condividono il bordo: titolo e frase. Per chi è, e come la pensiamo dove non c'è un caso da mostrare. */
function Cells({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="lp-cells" data-m="stagger" style={{ '--cols': items.length } as CSSProperties}>
      {items.map((it, i) => (
        <li key={it.title} className="lp-cell" style={{ '--i': i } as CSSProperties}>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </li>
      ))}
    </ul>
  );
}

/** Per chi è: le situazioni concrete in cui il servizio serve. */
export function ServiceAudience({ service: s }: { service: Service }) {
  const a = s.page.audience;
  return (
    <Scene as="section" className="al-section lp-svc" aria-label="Per chi è">
      <div className="al-container">
        <Head label="Per chi è" title={a.title} lead={a.lead} />
        <Cells items={a.items} />
      </div>
    </Scene>
  );
}

/** Cosa ottieni: le voci del servizio, una per riga, con numero, titolo e spiegazione. */
export function ServiceIncluded({ service: s }: { service: Service }) {
  return (
    <Scene as="section" className="al-section lp-svc" aria-label="Cosa ottieni">
      <div className="al-container">
        <Head label="Cosa ottieni" title="Cosa c’è dentro." lead="Ogni voce la decidiamo con te: prendi solo quello che ti serve." />
        <ol className="lp-gets" data-m="stagger">
          {s.points.map((p, i) => (
            <li key={p.title} className="lp-get" style={{ '--i': i } as CSSProperties}>
              <h3><span className="lp-get-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Scene>
  );
}

/** Dove non c'è un caso da mostrare: come lavoriamo su questo servizio, detto onestamente. */
export function ServiceApproach({ title, lead, items }: { title: string; lead: string; items: { title: string; text: string }[] }) {
  return (
    <Scene as="section" className="al-section lp-svc" aria-label="Come la pensiamo">
      <div className="al-container">
        <Head label="Come la pensiamo" title={title} lead={lead} />
        <Cells items={items} />
      </div>
    </Scene>
  );
}

/** Chiusura: foto, titolo grande e un pannello in vetro con l'invito al contatto. */
export function ServiceCta({ service: s }: { service: Service }) {
  return (
    <Scene as="section" className="al-photo lp-studio lp-svc-cta" aria-labelledby="svc-cta-t">
      <Image className="al-photo-img" src={photos.lago.src} alt="" fill sizes="100vw" />
      <div className="al-container lp-studio-body">
        <div className="lp-studio-title">
          <Kicker className="lp-studio-kicker">Parliamone</Kicker>
          <h2 id="svc-cta-t"><Words>{s.page.cta.title}</Words></h2>
        </div>
        <div data-m="fade-up" style={d(250)}>
          <Glass className="lp-studio-glass">
            <p>{s.page.cta.text}</p>
            <div><Button size="lg" href={contactHref(s)} arrow>Prenota una chiacchierata</Button></div>
          </Glass>
        </div>
      </div>
    </Scene>
  );
}
