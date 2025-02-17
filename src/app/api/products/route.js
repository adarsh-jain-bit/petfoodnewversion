import Product from '../../../schema/database/productSchema';
import { NextResponse } from 'next/server';
import ProductValidate from "../../../schema/validation/productSchema";
import connectToDatabase from '../../../utiles/mongodb';

export async function GET(req, res) {
  await connectToDatabase();

  try {
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(req) {
  await connectToDatabase();
  
  try {
    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());
    const images = formData.getAll('images');
    body.images = images;
          console.log(images)
    const validatedData = await ProductValidate.validate(body);
    
    const newProduct = new Product(validatedData);
    console.log("newProduct" , newProduct)
    await newProduct.save();
    
    return NextResponse.json({ message: 'Product added successfully' });
  } catch (error) {
    return NextResponse.json({ message: error.message || 'Internal Server Error' });
  }
}

