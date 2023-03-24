import { useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../../store/bookmarksSlice";
import "./quote.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { useState } from "react";

function Quote({ quote, home, id }) {
  const [btnActive, setBtnActive] = useState(false);
  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    setBtnActive(true);
    dispatch(addBookmark(quote));
  };

  const handleRemoveClick = (id) => {
    dispatch(removeBookmark(id));
  };

  return (
    <section className="quote-container">
      <h2 className="quote-content">{quote.content}</h2>
      <div className="author-container">
        <p className="quote-author">- {quote.author}</p>
        {home ? (
          <BookmarkBorderIcon
            className={btnActive ? "bookmark-btn-active" : "bookmark-btn"}
            onClick={handleBookmarkClick}
          />
        ) : (
          <BookmarkRemoveIcon className="bookmark-remove-btn" onClick={() => handleRemoveClick(id)} />
        )}
      </div>
    </section>
  );
}

export default Quote;
