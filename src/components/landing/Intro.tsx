import { Kicker } from '@alpwisestudio/ui';
import { Scene, ScrollRead } from '@/components/motion';

/** Il nostro modo: una frase grande che si accende parola per parola mentre scorri. */
export function Intro() {
  return (
    <Scene as="section" className="al-section lp-intro" aria-label="Il nostro modo">
      <div className="al-container">
        <Kicker className="lp-kicker-sub">Il nostro modo</Kicker>
        <ScrollRead className="lp-statement" text="Non partiamo dalla tecnologia. Partiamo da te, dal tuo lavoro e da dove vuoi arrivare." />
      </div>
    </Scene>
  );
}
