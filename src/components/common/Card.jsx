"use client";
import React from "react";
import { Box, Stack, Typography, Rating } from "@mui/material";
import { Wrapper } from "./Cart.styles";
import Image from "next/image";
import CustomButton from "./Button";
import Link from "next/link";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Card = ({ product }) => {
  const dispatch = useDispatch();
  const isExternal = product.images?.[0]?.startsWith("http");
  const imageSrc = isExternal
    ? product.images[0]
    : `/${product.images?.[0] || "fallback.png"}`;
    const slug = product.product_name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Wrapper>
        <Stack alignItems="center">
          <Image src={imageSrc} alt={product.product_name} height={100} width={100} />
        </Stack>
        <Box mt={1}>
        <Link href={`/product/${slug}-${product._id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <h5>{product.product_name}</h5>
        </Link>
          <p>{product.product_brand}</p>
          <Typography variant="caption" display="flex" alignItems="center" my={2}>
            <Rating name="disabled" value={3} readOnly size="small" />
            (3.0) | 3 reviews
          </Typography>
          <h3>
            <span style={{ textDecoration: "line-through", marginRight: 8 }}>
              ₹{product.product_oldprie}
            </span>
            <span>₹{product.product_price}</span>
          </h3>
        </Box>
        <CustomButton
          text="Add to Cart"
          variant="contained"
          size="medium"
          active={false}
          onClick={() => {
                  dispatch(addToCart({
                    _id: product._id,
                    name: product.product_name,
                    brand: product.product_brand,
                    price: product.product_price,
                    oldPrice: product.product_oldprice,
                    image: product.images[0],
                    size: "1.2kg",
                    quantity: 1
                  }));
                  toast.success("Product added to cart!", {
                    position: "top-right",
                    autoClose: 2000,
                    zindex: 9999,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                 
                }}
        
        />
      </Wrapper>
  );
};

export default Card;
