"use client";
import React from "react";
import Swiper from "./Swiper";
import {
  Typography,
  Stack,
  Box,
  Rating,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,

} from "@mui/material";
import AccordionStylingExpansion from "./Accordian";
import { COLORS } from "../../lib/constants/colors";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import {  toast } from 'react-toastify';

const Index = ({product}) => {
  const dispatch = useDispatch();

console.log(product)
  const [quantity, setQuantity] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState("1.2kg");

  const sizeOptions = [
    { label: "100g", value: "1.2kg", disabled: false },
    { label: "200g", value: "3kg+1.2kg", disabled: false },
    { label: "500g", value: "10kg+1kg", disabled: true },
    { label: "1kg", value: "15kg+3kg", disabled: true },
    { label: "5kg", value: "20kg", disabled: false },
  ];

  return (
    <Stack
      width="100%"
      display="flex"
      justifyContent="center"
      gap={2}
      padding={4}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Stack
        width={{ xs: "100%", md: "50%" }}
        display="flex"
        overflow={"hidden"}
        justifyContent="center"
        alignItems="center"
      >
        <Swiper  images={product.images}/>
      </Stack>

      <Stack width={{ xs: "100%", md: "50%" }} spacing={2}>
        <Typography variant="h1" fontWeight="bold"  lineHeight={1.1}>
          {product.product_name}
        </Typography>
        <Typography variant="h4" sx={{marginTop : "0px !important"}}>by <span style={{color : COLORS.PRIMARY.main}}  >{product.product_brand}</span></Typography>

        <Box display="flex" gap={1} alignItems="center">
          <Rating name="simple-controlled" value={3} readOnly />
          <Typography component="span">
            (3.0) | 300 Reviews
          </Typography>
        </Box>

        <Box display="flex" gap={1} alignItems="center">
          <Typography variant="h3" color={COLORS.PRIMARY.main}>MRP:</Typography>
          <Typography variant="h4" fontFamily={"DM Sans"} fontWeight={200} sx={{ textDecoration: "line-through" }}>
          ₹{product.product_oldprice }
          </Typography>
          <Typography variant="h3" color="error">
          ₹{product.product_price}
          </Typography>
        <Box bgcolor={COLORS.PRIMARY.main} color={COLORS.GLOBAL.WHITE} padding={"5px 10px"} borderRadius={4}><Typography variant="body2">Save 10%</Typography></Box>
        </Box>

        <Typography variant="body2" color={COLORS.INFO.main} margin={"3px !important"}>
          inclusive of all taxes
        </Typography>

        {/* Size Selector */}
        <Box>
          <Typography fontWeight="bold" mb={1}>
            Size:
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {sizeOptions.map((option) => (
              <Chip
                key={option.value}
                label={option.label}
                sx={{ bgcolor:"white" , border : selectedSize === option.value ? { border: `2px solid ${COLORS.PRIMARY.main}`, color: COLORS.PRIMARY.main } : { border: `1px solid ${COLORS.GLOBAL.GRAY}`}}}
                variant={selectedSize === option.value ? "filled" : "outlined"}
            

                onClick={() =>
                  !option.disabled && setSelectedSize(option.value)
                }
                disabled={option.disabled}
              />
            ))}
          </Stack>
        </Box>

        {/* Stock Status */}
     {product.stock > 0 && <Typography color="success.main">In stock</Typography> }  
        {/* Quantity Selector */}
        <FormControl size="small" sx={{ maxWidth: 100 }}>
          <InputLabel>Quantity</InputLabel>
          <Select
            value={quantity}
            label="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((q) => (
              <MenuItem key={q + 1} value={q + 1}>
                {q + 1}
              </MenuItem>
            ))} 
          </Select>
        </FormControl>

        {/* Offer Box */}
        <Box
          bgcolor="#ffeaea"
          p={2}
          borderRadius={2}
          display="flex"
          alignItems="center"
        >
          <Typography fontWeight="bold" color="error">
            🏷️ Extra 5% Off On Orders Above INR 2499, Use Code{" "}
            <strong>PAMPER5</strong>
          </Typography>
        </Box>

        {/* Add to Cart Button */}
        <Button variant="contained" size="large"  fullWidth sx={{ borderRadius: 5 , backgroundColor : COLORS.PRIMARY.main}}
         onClick={() => {
          dispatch(addToCart({
            _id: product._id,
            name: product.product_name,
            brand: product.product_brand,
            price: product.product_price,
            oldPrice: product.product_oldprice,
            image: product.images[0], // just one image for cart preview
            size: selectedSize,
            quantity: quantity
          }));
          toast.success("Product added to cart!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setQuantity(1); 
        }}
        >
          Add to cart
        </Button>
        <AccordionStylingExpansion desc={product.product_description}/>
      </Stack>
    </Stack>
  );
};

export default Index;


