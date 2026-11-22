import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Button, Kicker } from '@alpwisestudio/ui';
import { Scene, Words } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { photos } from '@/content/site';

/** Apertura: foto del lago all'alba a tutta larghezza, velo Notte e griglia; la navbar trasparente ci sta sopra.
 *  Ingresso: la foto si schiarisce e si allarga, la griglia si traccia, il titolo sale parola per parola,
 *  "più tecnologia" viene barrata, "giusta" si evidenzia, poi frase e bottoni. */
export function Hero() {
  return (
    <Scene as="section" className="al-photo lp-hero" aria-label="Introduzione">
      <Image className="al-photo-img" src={photos.lago.src} alt="" fill priority sizes="100vw" />
      <div className="lp-hero-body">
        <div className="lp-hero-kicker" data-m="fade-up" style={d(250)}><Kicker>Consulenza digitale per PMI</Kicker></div>
        <h1 style={{ '--delay': '350ms', '--hl-delay': '1450ms' } as CSSProperties}>
          <Words>Ti serve {<s key="s" className="lp-strike">più tecnologia</s>} la tecnologia {<span key="hl" className="al-hl-x lp-hl">giusta</span>}.</Words>
        </h1>
        <p className="lp-hero-lead" data-m="fade-up" style={d(1600)}>
          Siamo tre consulenti e sviluppatori ai piedi delle Prealpi. Prima ascoltiamo come lavori, poi ti diciamo cosa serve davvero. A volte è meno di quanto pensi.
        </p>
        <div className="lp-hero-actions" data-m="fade-up" style={d(1750)}>
          <Button size="lg" href="/contatti">Prenota 30 minuti, senza impegno</Button>
          <Button size="lg" variant="glass" href="#metodo">Come lavoriamo</Button>
        </div>
      </div>
      <a className="lp-hero-scroll" href="#metodo" aria-hidden="true" tabIndex={-1}><span>Scorri</span><i /></a>
    </Scene>
  );
}
