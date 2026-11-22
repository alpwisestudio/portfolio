import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { JsonLd, organizationLd, websiteLd } from '@/components/seo/JsonLd';
import { site, siteUrl } from '@/content/site';
import '@alpwisestudio/ui/styles.css';
import '../styles/landing.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  keywords: [
    'consulenza digitale', 'software su misura', 'siti vetrina', 'sviluppo web', 'gestionale su misura', 'AI per PMI', 'automazioni',
    'web agency Gallarate', 'sviluppatori Gallarate', 'provincia di Varese',
  ],
  alternates: { canonical: '/', languages: { 'it-IT': '/' } },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
  // Geotag per la ricerca locale.
  other: {
    'geo.region': `${site.country}-${site.province}`,
    'geo.placename': site.locality,
    'geo.position': `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

const MOTION_WAIT = "(function(){var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('m-wait');setTimeout(function(){if(d.dataset.motion!=='on')d.classList.remove('m-wait')},3000)})()";

export const viewport: Viewport = { themeColor: '#06080B' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Prima del primo disegno: nasconde gli elementi che entreranno animati, così non si vedono fermi e poi sparire.
            Niente con meno movimento; se dopo 3 secondi le animazioni non sono partite (JS fermo) mostra tutto. */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_WAIT }} />
      </head>
      <body>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        {children}
      </body>
    </html>
  );
}
