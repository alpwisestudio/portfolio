'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { cx, Head } from '@alpwisestudio/ui';
import { shots, tour } from '@/content/book';
import { PhoneShot } from './Shots';

const URL = 'book.alpwise.studio/portale';
/** Da computer e con il movimento attivo la finestra si allarga e i punti si accendono; altrimenti la sezione è ferma (book.css). */
const LIVE = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

// Punti numerati di fila su tutte le schermate: ogni punto sa a quale schermata appartiene.
const points = tour.flatMap((t, screen) => t.points.map((p) => ({ ...p, screen })));
const num = (i: number) => String(i + 1).padStart(2, '0');

/** Una schermata con i suoi punti. `upTo`: fino a quale punto (numero globale) sono accesi; `active`: quello con l'etichetta aperta. */
function Screen({ screen, upTo, active }: { screen: number; upTo: number; active: number }) {
  const t = tour[screen];
  return (
    <>
      {/* Testi piccoli, nitidi anche sui retina: il file originale (4320px, webp leggero), senza ridimensionarlo. */}
      <Image src={t.shot.src} alt={t.shot.alt} fill unoptimized priority={screen === 0} className="bk-tour-shot" />
      {points.map((p, i) => p.screen === screen && (
        <div
          key={i} aria-hidden="true"
          className={cx('bk-pt', `is-${p.side}`, p.y > 70 && 'is-up', i <= upTo && 'is-shown', i === active && 'is-active')}
          style={{ left: `${p.x}%`, top: `${p.y}%` } as CSSProperties}
        >
          <span className="bk-pt-n">{i + 1}</span>
          <span className="bk-pt-card"><b>{p.title}</b>{p.text}</span>
        </div>
      ))}
    </>
  );
}

/**
 * Sotto l'apertura: il portale in una finestra del browser, con il telefono davanti.
 * Da computer la sezione è alta e il contenuto resta fermo: scorrendo la finestra sale dalla foto e si allarga dritta
 * (--z da 0 a 1) fin quasi a riempire lo schermo; poi sulle schermate si accendono uno alla volta dei punti numerati
 * sopra le parti vere del portale, con un'etichetta breve: la schermata si avvicina al punto e il resto si scurisce. Su telefono, tablet o con meno movimento: ogni schermata
 * ferma con i suoi punti e, sotto, le spiegazioni numerate.
 */
export function BookTour() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = matchMedia(LIVE);
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!mq.matches) return;
      const top = el.getBoundingClientRect().top, vh = innerHeight;
      // Si allarga da quando la cima della sezione è al 70% dello schermo fino a mezzo schermo dopo che si è fermata.
      el.style.setProperty('--z', Math.min(1, Math.max(0, (vh * 0.7 - top) / (vh * 1.2))).toFixed(4));
      // Poi un punto ogni 60% di schermo.
      setActive(Math.min(points.length - 1, Math.max(-1, Math.floor((-top - vh * 0.5) / (vh * 0.6)))));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    mq.addEventListener('change', onScroll);
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      mq.removeEventListener('change', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const screen = active < 0 ? 0 : points[active].screen;
  // La telecamera si avvicina al punto attivo e il resto della schermata si scurisce.
  const focus = active < 0 ? null : points[active];
  return (
    <section ref={ref} id="portale" className="bk-tour al-anchor" style={{ '--n': points.length } as CSSProperties} aria-labelledby="tour-t">
      <div className="bk-tour-sticky" aria-hidden="true">
        <div className="bk-tour-stage">
          <figure className="bk-browser bk-tour-frame">
            <div className="bk-browser-bar"><i /><i /><i /><span>{URL}</span></div>
            <div className="bk-tour-screens">
              {tour.map((t, s) => (
                <div
                  key={t.label}
                  className={cx('bk-tour-screen', s === screen && 'is-on', s === screen && focus && 'is-focus')}
                  style={s === screen && focus ? ({ '--px': `${focus.x}%`, '--py': `${focus.y}%` } as CSSProperties) : undefined}
                >
                  <Screen screen={s} upTo={active} active={active} />
                </div>
              ))}
            </div>
          </figure>
          <PhoneShot shot={shots.mOggi} priority className="bk-tour-phone" />
        </div>
      </div>

      {/* Versione ferma: ogni schermata con i suoi punti e le spiegazioni. Da computer con il movimento resta per i lettori di schermo. */}
      <div className="al-container bk-tour-static">
        <Head label="Per te, durante il servizio" title={<span id="tour-t">Il portale, punto per punto.</span>} />
        {tour.map((t, s) => (
          <div key={t.label} className="bk-tour-block">
            <figure className="bk-browser">
              <div className="bk-browser-bar" aria-hidden="true"><i /><i /><i /><span>{URL}</span></div>
              <div className="bk-tour-screens"><Screen screen={s} upTo={points.length} active={-1} /></div>
            </figure>
            <ol className="bk-tour-notes">
              {points.map((p, i) => p.screen === s && (
                <li key={i} value={i + 1}><span className="bk-num">{num(i)}</span><h3>{p.title}</h3><p>{p.text}</p></li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
