import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTipsStories = createAsyncThunk(
  "tipsStories/fetchTipsStories",
  async () => {
    const response = await fetch("http://localhost:1337/api/tips-and-stories");
    const data = await response.json();
    return data.data;
  }
);
const tipsStoriesSlice = createSlice({
  name: "tipsStories",
  initialState: {
    tipsStories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTipsStories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTipsStories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tipsStories = action.payload;
      })
      .addCase(fetchTipsStories.rejected, (state, action) => {
        state.status = "failed ";
        state.error = action.error.message;
      });
  },
});
export default tipsStoriesSlice.reducer;
