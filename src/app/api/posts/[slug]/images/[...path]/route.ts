import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { lookup } from 'mime-types';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string; path: string[] } }
) {
  try {
    const { slug, path: imagePath } = params;
    const fileName = imagePath.join('/');
    
    const filePath = path.join(process.cwd(), 'posts', slug, 'images', fileName);
    
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Image not found', { status: 404 });
    }
    
    const fileBuffer = fs.readFileSync(filePath);
    const mimeType = lookup(filePath) || 'application/octet-stream';
    const headers = new Headers();
    headers.set('Content-Type', mimeType);
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error serving image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}