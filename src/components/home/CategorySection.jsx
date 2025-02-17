import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {scaleUpTransition , SubSectionWrapper} from "../../theme/Global.styles"
import { COLORS } from '@src/lib/constants/colors'
import SuffleColor from '@src/utiles/SuffleColor'
const CategorySection = () => {
    let cardData = [1,2,3,4,5];
  return (
    <>
    <Typography variant='h1' textAlign="center">Top Categories For Your Dog</Typography>
   <SubSectionWrapper>
   <Grid container  spacing={4} justifyContent="center"mt={1} >
    {cardData.map((val , index) => (
        <>
         <Grid item xs={2} sx={{cursor : "pointer" ,":hover" : {color : COLORS.PRIMARY.main}, ...scaleUpTransition()  }}>
         <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" gap={2} bgcolor={SuffleColor[index]}>
<Image src={"/assets/petfoodlogo.png"} height={100} width={100} alt='imd'/>
</Box>
<Typography textAlign="center">text</Typography>
       </Grid>
        </>
       ))}
       </Grid>
       </SubSectionWrapper>
    </>
   
  )
}

export default CategorySection