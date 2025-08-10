import React from "react";
import CartItem from "../CartItem/CartItem";
import { addToCart, decreaseQty } from "../../redux/cartSlice"; // renamed removeFromCart to decreaseQty
import { Wrapper } from "./Cart.styles";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import { COLORS } from "../../lib/constants/colors";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0); // Fixed `item.amount` to `item.quantity`

  return (
    <Wrapper>
  <Typography variant="h4" fontWeight="bold">Your Cart</Typography>
  {cartItems.length === 0 ? <p>No items in cart.</p> : (
    <>
      {/* Scrollable cart items */}
      <Box
        sx={{
          maxHeight: 'calc(100vh - 160px)', // adjust this based on header/footer height
          overflowY: 'auto',
          padding: 2,
          paddingBottom: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {cartItems.map((item) => (
          <CartItem
            key={item._id + item.size}
            item={item}
            addToCart={(item) => dispatch(addToCart(item))}
            removeFromCart={(item) => dispatch(decreaseQty(item))}
          />
        ))}
      </Box>

      {/* Sticky Footer */}
      <Stack
        position="sticky"
        bottom={0}
        px={2}
        pt={3}
        bgcolor="white"
        width="100%"
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5" color={COLORS.PRIMARY.main}>Subtotal:</Typography>
          <Typography variant="h5">₹{calculateTotal(cartItems)}</Typography>
        </Stack>
        <Button
          variant="contained"
          LinkComponent={"/checkout"}
          sx={{
            bgcolor: COLORS.PRIMARY.main,
            mt: 1,
            py: 1.5,
            mb: 1,
            "&:hover": { bgcolor: COLORS.PRIMARY.main }
          }}
        >
          CheckOut Now
        </Button>
      </Stack>
    </>
  )}
</Wrapper>

  );
};

export default Cart;
