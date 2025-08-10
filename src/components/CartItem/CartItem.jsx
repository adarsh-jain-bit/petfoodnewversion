import React from "react";
import { Button, Typography, Stack, Box, IconButton } from "@mui/material";
import { Wrapper } from "./CartItem.styles";
import { COLORS } from "../../lib/constants/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/cartSlice";
const CartItem = ({ item, addToCart, removeFromCart }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Stack direction="row" gap={2} alignItems="center" width="100%">
        {/* Product Image */}
        <Box
          component="img"
          src={`/${item.image}`}
          alt={item.name}
          sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 1 }}
        />

        {/* Product Info */}
        <Box flex={1} >
     <Box  sx={{ display: "flex", justifyContent: "space-between",  padding : "0px 30px 0px 10px"}}>
     <Stack direction="column" justifyContent="space-between" >
       <Typography variant="h5" fontWeight="bold" lineHeight={"25px"}>
            {item.name}
          </Typography>
          <Typography variant="body2"  color="text.secondary" sx={{padding: "4px 10px", marginTop : "5px", border: "1px solid #F5333E", borderRadius: "20px" , display: "inline-block" , width: "fit-content"}}>
        {item.size}
          </Typography>
        </Stack>
       <Stack direction="colum" justifyContent="end" >
       <Typography variant="h5" color={COLORS.PRIMARY.main}>
         ₹{item.price}
          </Typography>
    
        </Stack>
      </Box >
          {/* Quantity Controls */}
         <Box display="flex" justifyContent="space-between" alignItems="center" gap={2} padding={1} >
         <Stack direction="row" alignItems="center" gap={1}  bgcolor={"#f5f5f5"} borderRadius={1} padding={1} width="125px" maxWidth={"125px"}>
            <Button
              size="small"
              variant="outlined"
              
            sx={{border : "none", fontSize: "20px", color : "red",    minWidth: "45px",  lineHeight:"10px" , "&:hover": { backgroredundColor: "none" , border: "none" } }}
            onClick={() => removeFromCart({ _id: item._id, size: item.size })}
disabled={item.quantity === 1}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              size="small"
            
              variant="outlined"
              sx={{border : "none", fontSize: "20px",color : "red"  , lineHeight:"10px" , minWidth: "45px", "&:hover": { backgroredundColor: "none" , border: "none" } }}
              onClick={() => addToCart(item)}
            >
              +
            </Button>
          </Stack>
          <IconButton aria-label="delete" size="large"
          
          onClick={() => dispatch(deleteFromCart({ _id: item._id, size: item.size }))}>
  <DeleteIcon fontSize="inherit" />
</IconButton>
         </Box>
        </Box>
      </Stack>
    </Wrapper>
  );
};

export default CartItem;
