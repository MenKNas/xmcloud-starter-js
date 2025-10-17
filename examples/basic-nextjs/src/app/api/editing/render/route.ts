import { NextRequest, NextResponse } from 'next/server';

/**
 * This API route is used by Sitecore Editor in XM Cloud
 * to render components for editing mode.
 */

export async function GET(request: NextRequest) {
  // For now, redirect to the main page
  const url = new URL(request.url);
  const path = url.searchParams.get('path') || '/';
  return NextResponse.redirect(new URL(path, url.origin));
}

export async function POST(request: NextRequest) {
  // For now, redirect to the main page
  const url = new URL(request.url);
  const path = url.searchParams.get('path') || '/';
  return NextResponse.redirect(new URL(path, url.origin));
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 });
}
