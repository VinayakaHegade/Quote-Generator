import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("bookmarks")) || [];

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark(state, action) {
      state.push(action.payload);
      localStorage.setItem("bookmarks", JSON.stringify(state));
    },
    removeBookmark(state, action) {
      const newState = state.filter(
        (bookmark) => bookmark._id !== action.payload
      );
      localStorage.setItem("bookmarks", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export const selectBookmarks = (state) => state.bookmarks;

export default bookmarksSlice.reducer;
