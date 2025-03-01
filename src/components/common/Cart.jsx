"use client"
// import { CartItemType } from "../App";
import React from "react";


import {   Box, Stack, Typography, Rating} from "@mui/material";
import { Wrapper } from "./Cart.styles";
import Image from "next/image";
import CustomButton from "./Button";

const Card = () => {
  return (
    <Wrapper>
     <Stack alignItems="Center">
     <Image src={"/assets/slider/slider1.png"} alt={"item.title"} height={100} width={100}  />
     </Stack>
      <Box mt={1}>
        <h5  >{"Zupreem Fruit Blend Bird Food for Small Birds"}</h5>
        <p>{"item.brand"}</p>
        <Typography variant="caption" display="flex" alignItems="center" my={2}><Rating name="disabled" value={3} readOnly size="small" />
        (3.0) | 3 reviews
        </Typography>
        <h3><span >$2300</span> <span>$2100</span></h3>
      </Box>
    <CustomButton text="Add to Cart" variant="contained" size="medium" active={false}/>
    </Wrapper>
  );
};

export default Card;


