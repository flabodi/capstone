// src/redux/feauters/filters/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    selectedCategory: null,
    searchQuery: "", // aggiunto per la barra di ricerca
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSelectedCategory, setSearchQuery } = filtersSlice.actions;
export default filtersSlice.reducer;
