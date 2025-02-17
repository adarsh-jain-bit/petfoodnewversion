import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import {scaleUpTransition , SubSectionWrapper} from "../../theme/Global.styles"
import { COLORS } from '@src/lib/constants/colors'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {BoxWrapper} from "./PriceSection.style"
const PriceSection = () => {
    let cardData = [1,2,3,4,5];
    const colors = ["#DCF3FE", "#E4F6E5", "#FFE6E7", "#F0E3EC", "#FFF1E3"];

  
  return (
    <>
    <Typography variant='h1' textAlign="center">Shop by Price</Typography>
   <SubSectionWrapper>
   <Grid container  spacing={4} justifyContent="center"mt={1} >
    {cardData.map((val,index) => (
        <>
         <Grid key={index} item xs={2} sx={{cursor : "pointer" ,":hover" : {color : COLORS.PRIMARY.main}, ...scaleUpTransition()  }}>
         <BoxWrapper bgColor={colors[index]} >
<Typography textAlign="center" variant='h4'>Under</Typography>
<Typography textAlign="center" variant='h1' fontSize="50px" lineHeight={0.8}><CurrencyRupeeIcon fontSize='small'/>299</Typography>
</BoxWrapper>
       </Grid>
        </>
       ))}
       </Grid>
       </SubSectionWrapper>
    </>
   
  )
}

export default PriceSection

