import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  isSelectedProducts: []
};

const productSlice = createSlice({
  name: "ProductSlice-1",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setSelectedProducts: (state, action) => {
      state.isSelectedProducts = action.payload.filter(
        (product) => product.isSelected
      );
    }
  }
});

export const { setAllProducts, setSelectedProducts } = productSlice.actions;

export default productSlice.reducer;
