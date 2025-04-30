import Product from '../../../schema/database/productSchema';
import { NextResponse } from 'next/server';
import ProductValidate from "../../../schema/validation/productSchema";
import connectToDatabase from '../../../utiles/mongodb';

export async function GET() {
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
  
    const sizes = JSON.parse(body.sizes);  // Parse the sizes array
    const images = JSON.parse(body.images); // Parse the images array
    
  
    body.sizes = sizes;
    body.images = images;

    console.log("body", body);
    // Validate data
    const validatedData = await ProductValidate.validate(body);

    // Create the new product
    const newProduct = new Product(validatedData);
    console.log("newProduct", newProduct);

    // Save the product
    await newProduct.save();
    
    return NextResponse.json({ message: 'Product added successfully' });
  } catch (error) {
    console.error("Error saving product:", error);
    return NextResponse.json({ message: error.message || 'Internal Server Error' });
  }
}
