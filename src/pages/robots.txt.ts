import type { APIRoute } from 'astro';
import client from '../data/client.json';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${client.domain}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
