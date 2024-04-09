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
        // state.cartItems.push(payload);
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    deleteItem: (state, action) => {
      const removedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (removedItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        state.totalQuantity -= removedItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, deleteItem } = cartSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
//   totalAmount: 0,
//   totalQuantity: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const newItem = action.payload;
//       const existingItem = state.cartItems.find(
//         (item) => item.id === newItem.id
//       );

//       state.totalQuantity++;
//       if (!existingItem) {
//         state.cartItems.push(newItem);
//       } else {
//         existingItem.quantity++;
//         existingItem.totalPrice += Number(newItem.price);
//       }
//     },
//     deleteItem: (state, action) => {
//       state.cartItems = state.cartItems.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//   },
// });

// export const cartReducer = cartSlice.reducer;
// export const { addItem, deleteItem } = cartSlice.actions;
