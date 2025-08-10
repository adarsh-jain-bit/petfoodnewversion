import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },

  reducers: {
    addToCart: (state, action) => {
        const item = action.payload;
        console.log("action", action.payload);
        const existingItem = state.items.find(
            i => i._id === item._id && i.size === item.size
          );
        
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            state.items.push({ ...item });
          }
    },
    
    decreaseQty: (state, action) => {
      const item = state.items.find(
        i => i._id === action.payload._id && i.size === action.payload.size
      );
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(
            i => !(i._id === item._id && i.size === item.size)
          );
        } else {
          item.quantity -= 1;
        }
      }
    },
    deleteFromCart: (state, action) => {
      const { _id, size } = action.payload;
      state.items = state.items.filter(item => !(item._id === _id && item.size === size));
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, decreaseQty, clearCart , deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
