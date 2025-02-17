import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { SubSectionWrapper } from '@src/theme/Global.styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { COLORS } from '@src/lib/constants/colors';
import {CardContainer} from "./LearnWithPet.style";
const LearnWithPet = () => {
    let cardData = [1,2,3];
  return (
    <div>
  <Typography variant='h1' textAlign="center">Shop by Price</Typography>
   <SubSectionWrapper>
   <Grid container  spacing={4} justifyContent="center"mt={1} >
    {cardData.map((val,index) => (
       <Grid item xs={1} md={2} lg={3} key={index} >
      <CardContainer>
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="assets/slider/slider1.png"
          alt="green iguana"
        />
        <CardContent className='card-content'>
          <Typography gutterBottom variant="body2" textAlign="center" component="div" className='date' >
          April 3, 2024
          </Typography>   
                 <Typography gutterBottom variant="h3" component="div" textAlign="center" >
                 5 Yummy Summer Foods for Dogs
          </Typography>
          <Typography variant="body2" className='content'  >
          Scorching temperatures are around the corner, and your furry pal is sure to feel the heat too. If you’re wondering, “how to cool my dog down?”, you’re not alone in this query. Many pet parents are confused about what dogs...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" href='' className='button' >
          Read More <KeyboardArrowRightIcon/>
        </Button>
      </CardActions>
    </Card>
      </CardContainer>
       </Grid>
    ))};
    </Grid>
    </SubSectionWrapper>
   
    </div>
  )
}

export default LearnWithPet