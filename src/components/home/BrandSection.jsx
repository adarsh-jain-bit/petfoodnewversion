'use client';
import React from 'react';
import Card from "@src/components/common/Card";
import { Button, Grid, Skeleton, Typography } from "@mui/material";
import { COLORS } from '@src/lib/constants/colors';
import useProducts from '@src/hooks/FetchProduct';

const BrandSection = ({ category }) => {
  const { products, loading, error } = useProducts();
  const filteredProducts = products.filter(p => p.product_category === category);

  return (
    <>
      <Typography variant='h1' textAlign="center">
        BESTSELLERS FOR {category.toUpperCase()}
      </Typography>

      <Grid container spacing={2} justifyContent="center" mt={1}>
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={2} key={index}>
                <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
                <Skeleton width="80%" />
                <Skeleton width="60%" />
              </Grid>
            ))
          : filteredProducts.slice(0, 5).map((product) => (
              <Grid item xs={12} sm={6} md={2} key={product.id}>
                <Card product={product} />
              </Grid>
            ))}
      </Grid>

      {!loading && !error && (
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
      )}

      {error && <Typography color="error">{error}</Typography>}
    </>
  );
};

export default BrandSection;
