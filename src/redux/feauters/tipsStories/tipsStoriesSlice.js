import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const LOCAL_API = "http://localhost:1337/api";
const CLOUD_API = "https://cocktail-api-data-2.onrender.com";

const fetchWithFallback = async (endpoint) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000); 
  
  try {
    const response = await fetch(`${LOCAL_API}/${endpoint}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`Richiesta API locale fallita: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    console.log(`API locale fallita: ${error.message}. Provo con l'API cloud...`);
    
    const cloudResponse = await fetch(`${CLOUD_API}/${endpoint}`);
    
    if (!cloudResponse.ok) {
      throw new Error(`Richiesta API cloud fallita: ${cloudResponse.status}`);
    }
    
    return await cloudResponse.json();
  }
};

export const fetchTipsStories = createAsyncThunk(
  "tipsStories/fetchTipsStories",
  async () => {
    // ✅ Rimosso ?populate=* e data.data
    const data = await fetchWithFallback("tips-and-stories");
    return data; // json-server restituisce direttamente l'array
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
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default tipsStoriesSlice.reducer;