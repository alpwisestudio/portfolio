import type { CSSProperties } from 'react';
import { Head } from '@alpwisestudio/ui';
import { Scene } from '@/components/motion';
import { steps } from '@/content/site';

/** Come lavoriamo: tre passi in celle che condividono il bordo, senza foto. Le pagine dei servizi cambiano etichetta e titolo. */
export function Method({
  label = 'Come lavoriamo',
  title = 'Un metodo da consulenti, non da fornitori.',
  lead = 'Niente pacchetti già pronti. Ogni progetto parte da una chiacchierata.',
}: { label?: string; title?: string; lead?: string }) {
  return (
    <Scene as="section" id="metodo" className="al-section al-anchor lp-method">
      <div className="al-container">
        <Head label={label} title={title} lead={lead} />
        <ol className="lp-steps" data-m="stagger">
          {steps.map((s, i) => (
            <li key={s.title} className="lp-step" style={{ '--i': i } as CSSProperties}>
              <span className="lp-step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className="lp-step-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Scene>
  );
}
