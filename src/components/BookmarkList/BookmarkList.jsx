import { useSelector} from "react-redux";
import { selectBookmarks} from "../../store/bookmarksSlice";
import Quote from "../Quote/Quote";

function BookmarkList() {
  const bookmarks = useSelector(selectBookmarks);

  return (
    <>
      {bookmarks.map((bookmark) => (
        <div key={bookmark._id}>
          <Quote id={bookmark._id} quote={bookmark} home={false} />
        </div>
      ))}
    </>
  );
}

export default BookmarkList;
