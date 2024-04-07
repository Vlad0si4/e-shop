import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const newItem = payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push(payload);
        // state.cartItems.push({
        //   id: newItem.id,
        //   productName: newItem.productName,
        //   image: newItem.imgUrl,
        //   price: newItem.price,
        //   quantity: 1,
        //   totalPrice: newItem.price,
        // });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      // total + Number(item.price) * Number(item.quantity);
      state.totalAmount = state.cartItems.reduce((total, item) =>
        console.log(total, item)
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem } = cartSlice.actions;