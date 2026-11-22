import Image from 'next/image';
import { Kicker } from '@alpwisestudio/ui';
import { Scene, Words } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { photos } from '@/content/site';

/** Apertura di Contatti: foto del lago, titolo grande con una piccola foto dentro la frase. */
export function ContactHero() {
  return (
    <Scene as="header" className="al-photo lp-hero lp-hero-page">
      <Image className="al-photo-img" src={photos.lago.src} alt="" fill priority sizes="100vw" />
      <div className="al-container lp-page-body">
        <div data-m="fade" style={d(100)}><Kicker className="lp-hero-kicker">Contatti</Kicker></div>
        <h1 style={d(200)}>
          <Words>Parliamone davanti a un caffè</Words>{' '}
          <span className="lp-inline-photo" data-m="fade" style={d(700)}><Image src={photos.consulenza.src} alt="" fill sizes="180px" /></span>{' '}
          <span className="lp-dim-photo" data-m="fade-up" style={d(800)}>Trenta minuti, senza impegno.</span>
        </h1>
      </div>
    </Scene>
  );
}
