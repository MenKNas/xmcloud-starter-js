import { NextResponse } from 'next/server';

/**
 * This API route is used by Sitecore Editor in XM Cloud
 * to determine feature compatibility and configuration.
 */

export async function GET() {
  // Return basic configuration for editing mode
  const config = {
    components: [],
    metadata: {},
  };

  return NextResponse.json(config);
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 });
}
