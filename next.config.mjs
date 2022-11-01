// @ts-check
import { PHASE_PRODUCTION_BUILD } from 'next/constants.js';

const getNextConfig = (
  /** @type {string} */ phase,
  /** @type {{ defaultConfig: import('next').NextConfig }} */ { defaultConfig }
) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    rewrites: async () => {
      /** @type {import('next/dist/lib/load-custom-routes').Rewrite[]} */
      const rewrites = [
        {
          source: '/robots.txt',
          destination: '/api/robots',
        },
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ];
      if (phase !== PHASE_PRODUCTION_BUILD) {
        const maxLength = Math.max(...rewrites.map(rw => rw.source.length));
        for (const rewrite of rewrites) {
          const source = rewrite.source.padEnd(maxLength);
          console.log(`info  - rewrite ${source}  ->  ${rewrite.destination}`);
        }
      }
      return rewrites;
    },
  };

  return nextConfig;
};

export default getNextConfig;
