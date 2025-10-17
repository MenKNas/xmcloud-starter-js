import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * API route for serving sitemap.xml
 *
 * This Next.js API route handler generates and returns the sitemap.xml content dynamically
 * based on the resolved site name. It is commonly used by search engines to discover
 * and index pages on the website.
 */

export async function GET(request: NextRequest) {
  const baseUrl = new URL(request.url).origin;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
