import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "./bookmarksSlice";
import quotesReducer from "./quotesSlice";

const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
    quotes: quotesReducer,
  },
});

export default store;
