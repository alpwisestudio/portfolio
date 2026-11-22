import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Head } from '@alpwisestudio/ui';
import { Scene } from '@/components/motion';
import { photos, steps } from '@/content/site';

/** Come lavoriamo: tre passi, ognuno con la sua foto (stesso taglio e stesso trattamento colore). */
export function Method() {
  return (
    <Scene as="section" id="metodo" className="al-section al-anchor lp-method">
      <div className="al-container">
        <Head label="Come lavoriamo" title="Un metodo da consulenti, non da fornitori." lead="Niente pacchetti già pronti. Ogni progetto parte da una chiacchierata." />
        <ol className="lp-steps" data-m="stagger">
          {steps.map((s, i) => (
            <li key={s.title} className="lp-step" style={{ '--i': i } as CSSProperties}>
              <div className="lp-step-photo">
                <Image src={photos[s.photo].src} alt={photos[s.photo].alt} fill sizes="(max-width: 860px) 100vw, 33vw" />
              </div>
              <div className="lp-step-body">
                <span className="lp-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Scene>
  );
}
