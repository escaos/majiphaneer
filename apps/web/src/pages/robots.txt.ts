import { PRODUCTION_ORIGIN } from '@majiphaneer/data';
import type { APIRoute } from 'astro';

// Host-guarded: only a build whose SITE_URL matches the hardcoded production
// origin serves the crawl allowlist. Previews, workers.dev, and local builds
// get a blanket Disallow so duplicates can never compete with the real site.
const ALLOWED_BOTS = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'ClaudeBot',
  'PerplexityBot',
  'OAI-SearchBot',
];

export const GET: APIRoute = ({ site }) => {
  const isProduction = site?.origin === PRODUCTION_ORIGIN;

  const body = isProduction
    ? [
        ...ALLOWED_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
        'User-agent: *',
        'Disallow: /',
        '',
        `Sitemap: ${PRODUCTION_ORIGIN}/sitemap-index.xml`,
        '',
      ].join('\n')
    : 'User-agent: *\nDisallow: /\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
