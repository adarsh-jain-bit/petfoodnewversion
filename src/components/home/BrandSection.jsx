import React from 'react'
import Card from "@src/components/common/Cart";
import { Button, Grid, Typography } from "@mui/material";
import { COLORS } from '@src/lib/constants/colors';

const BrandSection = () => {
    let cardData = [1,2,3,4,5]
  return (
   <>
   <Typography variant='h1' textAlign="center">Sheba: Irresistible Delights for Your Cat</Typography>
    <Grid container spacing={2} justifyContent="center" mt={1}>
   {cardData.map(() => (
    <>
     <Grid item xs={2}>
     <Card/>
   </Grid>
    </>
   ))}
   </Grid>
   <Button variant='outlined' color='error' size='large'  sx={{borderRadius : "30px",marginTop: 3, display  :"flex", marginX : "auto" , "&:hover" : {background : COLORS.PRIMARY.main , color : COLORS.GLOBAL.WHITE}}}>View More</Button>
   </>
  )
}

export default BrandSection