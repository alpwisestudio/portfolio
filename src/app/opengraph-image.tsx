import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import tokens from '../../design-system/tokens.json';
import { contact } from '@/content/site';

// Anteprima social 1200×630: foto del lago con il velo Notte e la griglia, wordmark e testi bianchi.
export const alt = 'Alpwise Studio · Consulenza digitale per PMI, a Gallarate';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const token = (group: 'color' | 'gradient', name: string) => tokens[group].tokens.find((t) => t.name === name)!.value as string;

export default async function OpengraphImage() {
  const root = process.cwd();
  const [grotesk, wordmark, photo] = await Promise.all([
    readFile(join(root, 'src/assets/fonts/host-grotesk-latin-400-normal.ttf')),
    readFile(join(root, 'public/brand/wordmark-white.svg'), 'utf8'),
    readFile(join(root, 'public/photos/lago-alba.jpg')),
  ]);
  const white = token('color', 'white');

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: token('color', 'night'), color: white, fontFamily: 'Host Grotesk' }}>
        <img src={`data:image/jpeg;base64,${photo.toString('base64')}`} width={1200} height={630} alt="" style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, objectFit: 'cover' }} />
        {/* Velo Notte delle foto (photo-scrim), un po' più scuro: l'anteprima è piccola e il testo deve leggersi subito */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, display: 'flex', backgroundImage: 'linear-gradient(180deg, rgba(6,8,11,0.78) 0%, rgba(6,8,11,0.4) 38%, rgba(4,20,46,0.75) 72%, rgba(6,8,11,0.95) 100%)' }} />
        {/* Griglia a 12 colonne, come .al-photo */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, display: 'flex' }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} style={{ flex: 1, borderLeft: i ? '1px solid rgba(255,255,255,.12)' : 'none' }} />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '56px 72px', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={`data:image/svg+xml;base64,${Buffer.from(wordmark).toString('base64')}`} width={250} height={60} alt="" />
            <div style={{ fontSize: 24, opacity: 0.86 }}>{contact.address}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 26, opacity: 0.86 }}>Consulenza digitale per PMI</div>
            <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: -3, marginTop: 20 }}>Ti serve la tecnologia giusta.</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Host Grotesk', data: grotesk, weight: 400, style: 'normal' }],
    },
  );
}
