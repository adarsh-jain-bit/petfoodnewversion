import Product from '../../../../schema/database/productSchema';
import connectToDatabase from '../../../../utiles/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  await connectToDatabase();
  const { id } = params;
// console.log("id pag", id)
  try {
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
