
import { dogMenu, catMenu, smallAnimalMenu , birdsMenu , Learn , fishesAndTurtleMenu } from "./menu"
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { COLORS } from '@src/lib/constants/colors';
import React from 'react';


const DogMegaMenu = ({ page }) => {
  // console.log(page)
  let menuToRender = [];
 console.log(menuToRender)
  switch (page) {
    case "Cat":
      menuToRender = catMenu;
      break;
    case "Dog":
      menuToRender = dogMenu;
      break;
    case "Small Animal":
      menuToRender = smallAnimalMenu;
      break;
      case "birds" : 
      menuToRender = birdsMenu;
      break;
      case "Fishes & turtle" : 
      menuToRender = fishesAndTurtleMenu;
      break;
      case "Learn" : 
      menuToRender = Learn;
      break;
  }
  if (page === "birds" || page === "Learn"|| page == "Fishes & turtle"
  ) {
    return (
      <div style={{ display: "flex", flexDirection : "column" }}>
        {menuToRender.map(({ id, title }) => (
          <Typography key={id} variant="h5" color={COLORS.PRIMARY.main} sx={{ paddingLeft: 2 }}>
            {title}
          </Typography>
        ))}
      </div>
    );
  }
  


  return (
    <Grid container spacing={2}>
      { menuToRender.map(({ id, heading, items }) => (
        <Grid item xs={6} sm={4} md={3} lg={3} key={String(id)}>
          <Typography variant="h4" color={COLORS.PRIMARY.main} sx={{ paddingLeft: 2 }} component="div">
            {heading} 
          </Typography>
          <List>
            {items?.map((item, index) => (
              <ListItem key={index} sx={{ paddingY: "5px" }}>
                <ListItemText primary={item } />
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  )
}

export default DogMegaMenu
