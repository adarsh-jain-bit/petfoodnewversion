'use client';
import React, { useEffect, useState } from 'react';
import Card from "@src/components/common/Card";
import { Button, Grid, Typography } from "@mui/material";
import { COLORS } from '@src/lib/constants/colors';
import useProducts from '@src/hooks/FetchProduct';
const BrandSection = ({category}) => {
  const { products, loading, error } = useProducts();
  console.log(products)
  const filteredProducts = products.filter(p => p.product_category === category);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  
  return (
    <>
    <Typography variant='h1' textAlign="center">
      BESTSELLERS FOR {category.toUpperCase()}
    </Typography>
    <Grid container spacing={2} justifyContent="center" mt={1}>
      {filteredProducts.slice(0, 5).map((product) => (
        <Grid item xs={12} sm={6} md={2} key={product.id}>
          <Card product={product} />
        </Grid>
      ))}
    </Grid>
    <Button
      variant='outlined'
      color='error'
      size='large'
      sx={{
        borderRadius: "30px",
        marginTop: 3,
        display: "flex",
        marginX: "auto",
        "&:hover": {
          background: COLORS.PRIMARY.main,
          color: COLORS.GLOBAL.WHITE
        }
      }}
    >
      View More
    </Button>
  </>
  )
}

export default BrandSection