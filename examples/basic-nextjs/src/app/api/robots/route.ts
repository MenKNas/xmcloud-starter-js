import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * API route for serving robots.txt
 *
 * This Next.js API route handler generates and returns the robots.txt content dynamically
 * based on the resolved site name. It is commonly
 * used by search engine crawlers to determine crawl and indexing rules.
 */

export async function GET(request: NextRequest) {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${new URL(request.url).origin}/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
