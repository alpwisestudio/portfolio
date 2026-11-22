'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { cx } from '@alpwisestudio/ui';

export type Shot = { src: string; alt: string; w: number; h: number };

/** Schermata desktop in una finestra del browser: barra con l'indirizzo, poi lo screenshot. */
export function BrowserShot({ shot, url, priority, className }: { shot: Shot; url: string; priority?: boolean; className?: string }) {
  return (
    <figure className={cx('bk-browser', className)}>
      <div className="bk-browser-bar" aria-hidden="true"><i /><i /><i /><span>{url}</span></div>
      <Image src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} priority={priority} sizes="(max-width: 860px) 100vw, 70vw" />
    </figure>
  );
}

/** Schermata del telefono dentro una cornice. */
export function PhoneShot({ shot, priority, className }: { shot: Shot; priority?: boolean; className?: string }) {
  return (
    <figure className={cx('bk-phone', className)}>
      <Image src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} priority={priority} sizes="(max-width: 860px) 70vw, 320px" />
    </figure>
  );
}

/** Più schermate nello stesso riquadro, scelte con le linguette. Tastiera: frecce sinistra e destra. */
export function ShotTabs({ tabs, url, label }: { tabs: { id: string; label: string; text: string; shot: Shot }[]; url: string; label: string }) {
  const [on, setOn] = useState(0);
  const id = useId();
  const move = (k: number) => {
    const n = (k + tabs.length) % tabs.length;
    setOn(n);
    document.getElementById(`${id}-t${n}`)?.focus();
  };
  return (
    <div className="bk-tabs">
      <div className="bk-tablist" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button
            key={t.id} id={`${id}-t${i}`} type="button" role="tab" aria-selected={on === i} aria-controls={`${id}-p${i}`} tabIndex={on === i ? 0 : -1}
            className="bk-tab" onClick={() => setOn(i)}
            onKeyDown={(e) => { if (e.key === 'ArrowRight') move(i + 1); if (e.key === 'ArrowLeft') move(i - 1); }}
          >
            <span className="bk-tab-n">{String(i + 1).padStart(2, '0')}</span>
            <span className="bk-tab-l">{t.label}</span>
            <span className="bk-tab-t">{t.text}</span>
          </button>
        ))}
      </div>
      <div className="bk-tabpanels">
        {tabs.map((t, i) => (
          <div key={t.id} id={`${id}-p${i}`} role="tabpanel" aria-labelledby={`${id}-t${i}`} hidden={on !== i} className="bk-tabpanel">
            <BrowserShot shot={t.shot} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}
