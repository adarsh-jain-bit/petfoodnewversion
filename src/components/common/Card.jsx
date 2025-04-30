"use client";
import React from "react";
import { Box, Stack, Typography, Rating } from "@mui/material";
import { Wrapper } from "./Cart.styles";
import Image from "next/image";
import CustomButton from "./Button";
import Link from "next/link";

const Card = ({ product }) => {
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
        />
      </Wrapper>
  );
};

export default Card;
