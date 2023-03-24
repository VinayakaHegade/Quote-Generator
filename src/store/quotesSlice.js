import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomQuote = createAsyncThunk(
  "quotes/fetchRandomQuote",
  async (tag) => {
    let url = "https://api.quotable.io/random";
    if (tag) {
      url += `?tags=${tag}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

export const fetchTags = createAsyncThunk("quotes/fetchTags", async () => {
  const response = await fetch("https://api.quotable.io/tags");
  const data = await response.json();
  return data;
});

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quote: null,
    tags: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.quote = action.payload;
        state.loading = false;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags = action.payload.map((tag) => tag.name);
        state.loading = false;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default quotesSlice.reducer;
