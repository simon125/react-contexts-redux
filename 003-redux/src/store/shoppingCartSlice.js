import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  initialState: {
    selectedProducts: [],
  },
  name: "shoppingCart",
  reducers: {
    addProduct: (state, action) => {
      state.selectedProducts.push(action.payload);
    },
    removeProduct: (state, action) => {},
    editAmountProduct: (state, action) => {},
    resetProducts: (state, action) => {},
  },
});

export const { addProduct } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
