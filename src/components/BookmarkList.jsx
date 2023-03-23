import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBookmarks, removeBookmark } from "../store/bookmarksSlice";

function BookmarkList() {
  const bookmarks = useSelector(selectBookmarks);
  const dispatch = useDispatch();

  const handleRemoveClick = (id) => {
    dispatch(removeBookmark(id));
  };

  return (
    <ul>
      {bookmarks.map((bookmark) => (
        <li key={bookmark._id}>
          <p>{bookmark.content}</p>
          <p>{bookmark.author}</p>
          <button onClick={() => handleRemoveClick(bookmark._id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BookmarkList;
