"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Product from '@src/components/product/Index';

const Page = () => {
  const params = useParams();
  const slug = params.slug; 

  const id = slug.split('-').pop()
console.log("id", id) 
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (id) {
      async function fetchData() {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
          const data = await res.json();
          console.log("oo" ,data);
          setProduct(data); // Set product data in state
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      }

      fetchData();
    }
  }, []); // Trigger effect when `id` changes

  if (!product) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  return (
    <div>
      <Product product={product} /> {/* Pass the fetched product data */}
    </div>
  );
};

export default Page;
