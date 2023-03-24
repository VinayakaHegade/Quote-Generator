import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote, fetchTags } from "../store/quotesSlice";
import Quote from "../components/Quote/Quote";
import TagList from "../components/TagList/TagList";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";

const selectQuote = (state) => state.quotes.quote;
const selectTags = (state) => state.quotes.tags;
const selectLoading = (state) => state.quotes.loading;
const selectError = (state) => state.quotes.error;

function Home() {
  const dispatch = useDispatch();
  const quote = useSelector(selectQuote);
  const tags = useSelector(selectTags);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    dispatch(fetchRandomQuote());
    dispatch(fetchTags());
  }, [dispatch]);

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    dispatch(fetchRandomQuote(tag));
  };

  return (
    <div>
      {loading ? (
        <>
          <Loading />
          <h1>🌀 Loading...</h1>
        </>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Header />
          {quote && <Quote quote={quote} home={true} />}
          <TagList
            selectedTag={selectedTag}
            tags={tags}
            onTagSelect={handleTagSelect}
          />
          <div className="new-quote-wrapper">
            <button
              className="new-quote-btn"
              onClick={() => dispatch(fetchRandomQuote(selectedTag))}
            >
              New Quote
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
