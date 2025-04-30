// pages/api/uploadimage.js
import cloudinary from '../../../utiles/cloudnary';
import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60; 

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { data } = body; // Extract the base64 string from the request body

    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json({ error: 'No images found' }, { status: 400 });
    }

    const uploadedImages = [];
for (const image of data) {
  const result = await cloudinary.uploader.upload(image, { upload_preset: 'ml_default' });
  uploadedImages.push(result.secure_url);
}
return NextResponse.json({ urls: uploadedImages });
  } catch (error) {
    console.error(`Upload error: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
