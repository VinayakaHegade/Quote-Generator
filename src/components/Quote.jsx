import React from "react";
import { useDispatch } from "react-redux";
import { addBookmark } from "../store/bookmarksSlice";

function Quote({ quote }) {
  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    dispatch(addBookmark(quote));
  };

  return (
    <div>
      <p>{quote.content}</p>
      <p>{quote.author}</p>
      <button onClick={handleBookmarkClick}>Bookmark</button>
    </div>
  );
}

export default Quote;
