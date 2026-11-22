import Image from 'next/image';
import { Button, Glass, Kicker } from '@alpwisestudio/ui';
import { Scene, Words } from '@/components/motion';
import { d } from '@/components/motion/delay';
import { photos } from '@/content/site';

/** Studio: il lago nella nebbia a tutta larghezza, titolo grande e un pannello in vetro. */
export function Studio() {
  return (
    <Scene as="section" id="studio" className="al-photo al-photo-mid al-anchor lp-studio" aria-labelledby="studio-t">
      <Image className="al-photo-img" src={photos.nebbia.src} alt={photos.nebbia.alt} fill sizes="100vw" />
      <div className="al-container lp-studio-body">
        <div className="lp-studio-title">
          <Kicker className="lp-studio-kicker">Studio</Kicker>
          <h2 id="studio-t"><Words>Uno studio piccolo.</Words><br /><span className="lp-dim-photo"><Words start={3}>Ti risponde chi lavora al tuo progetto.</Words></span></h2>
        </div>
        <div data-m="fade-up" style={d(250)}>
          <Glass className="lp-studio-glass">
            <p>Siamo cresciuti qui, tra le aziende di famiglia del Varesotto. Parliamo la tua lingua e veniamo volentieri da te. Niente call center.</p>
            <div><Button variant="glass" size="lg" href="/contatti" arrow>Raccontaci il tuo progetto</Button></div>
          </Glass>
        </div>
      </div>
    </Scene>
  );
}
