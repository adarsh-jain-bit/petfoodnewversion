// pages/api/uploadimage.js
import cloudinary from '../../../utiles/cloudnary';
import { NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Adjust if needed
    },
  },
};

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { data } = body; // Extract the base64 string from the request body

    if (!data) {
      return NextResponse.json({ error: 'No data found in the request body' }, { status: 400 });
    }

    const result = await cloudinary.uploader.upload(data, {
      upload_preset: 'ml_default', 
    });

    return NextResponse.json({ url: result.secure_url });
  } catch (error) {
    console.error(`Upload error: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
