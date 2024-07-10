import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

export  async function POST(req, res) {
  // Assuming your request body has paramsToSign
  const body = await req.json();

  // Generate signature using Cloudinary SDK
  const signature = cloudinary.utils.api_sign_request(body.paramsToSign, process.env.CLOUDINARY_API_SECRET);
    console.log(signature);
  // Return the signature as JSON response
  return NextResponse.json({signature, success: true});
}
