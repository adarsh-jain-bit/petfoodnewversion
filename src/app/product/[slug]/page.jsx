"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Product from "@src/components/product/Index";
import { Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/material";

const Page = () => {
  const params = useParams();
  const slug = params.slug;

  const id = slug.split("-").pop();
  console.log("id", id);
  const [product, setProduct] = useState(null);
   async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
      );
      const data = await res.json();
      console.log("oo", data);
      setProduct(data); // Set product data in state
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }
  useEffect(() => {
    if (id) {

      fetchData();
    }
  }, []); // Trigger effect when `id` changes

  if (!product) {
    return (
      <div>
        <Stack
          spacing={3}
          sx={{ width: "100%" }}
          display={"flex"}
          flexDirection={"row"}
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Box sx={{ width: "100%", maxWidth: 660, height: "100vh" }}>
    
            <Skeleton variant="rectangular" height={500} />
          </Box>
          <Box sx={{ width: "100%", maxWidth: 660, height: "100vh" }}>
            <Skeleton variant="text" />
       
            <Skeleton animation="wave" height={100} />
            <Skeleton animation="wave" height={200} /> 
            <Skeleton animation="wave" height={100} />
            <Skeleton animation="wave" height={50} />
          </Box>
        </Stack>
      </div>
    );
  }

  return (
    <div>
      <Product product={product} /> {/* Pass the fetched product data */}
    </div>
  );
};

export default Page;
