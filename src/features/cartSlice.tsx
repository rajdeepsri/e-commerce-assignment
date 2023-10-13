import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
  selectedItems: string[];
  selectedCategory: string;
}

const initialState: RootState = {
  selectedItems: [],
  selectedCategory: "produce",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const item = action.payload;
      state.selectedItems.push(item);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const item = action.payload;
      const index = state.selectedItems.indexOf(item);
      if (index !== -1) {
        state.selectedItems.splice(index, 1);
      }
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addItem, removeItem, setSelectedCategory } = cartSlice.actions;

export default cartSlice.reducer;
