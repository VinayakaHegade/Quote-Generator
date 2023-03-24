import React from "react";
import { useDispatch } from "react-redux";
import { addBookmark } from "../../store/bookmarksSlice";
import "./quote.css";

function Quote({ quote }) {
  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    dispatch(addBookmark(quote));
  };

  return (
    <section className="quote-container">
      <h2 className="quote-content">{quote.content}</h2>
      <div className="author-container">
        <p className="quote-author">{quote.author}</p>
        <button className="bookmark-btn" onClick={handleBookmarkClick}>Bookmark</button>
      </div>
    </section>
  );
}

export default Quote;
