import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 90 per le schermate di Alpwise book (components/book/Shots.tsx): testi piccoli, nitidi anche sui retina.
  images: { qualities: [75, 90] },
};

export default nextConfig;
