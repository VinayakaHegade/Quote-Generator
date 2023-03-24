import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote, fetchTags } from "../store/quotesSlice";
import Quote from "../components/Quote/Quote";
import TagList from "../components/TagList";
import Header from "../components/Header/Header";

const selectQuote = (state) => state.quotes.quote;
const selectTags = (state) => state.quotes.tags;
const selectLoading = (state) => state.quotes.loading;
const selectError = (state) => state.quotes.error;

function Home() {
  //   const [quote, setQuote] = useState(null);
  //   const [tags, setTags] = useState([]);
  //   const [selectedTag, setSelectedTag] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetchRandomQuote();
  //     fetchTags();
  //   }, []);

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

  //   const fetchRandomQuote = async (tag = null) => {
  //     setLoading(true);
  //     setError(null);
  //     let url = "https://api.quotable.io/random";
  //     if (tag) {
  //       url += `?tags=${tag}`;
  //     }
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error(`An error occurred: ${response.statusText}`);
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       setQuote(data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setLoading(false);
  //   };

  //   const fetchTags = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const response = await fetch("https://api.quotable.io/tags");
  //       if (!response.ok) {
  //         throw new Error(`An error occurred: ${response.statusText}`);
  //       }
  //       const data = await response.json();
  //       const tagNames = data.map((item) => item.name);
  //       setTags(tagNames);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setLoading(false);
  //   };

  //   const handleTagSelect = (tag) => {
  //     setSelectedTag(tag);
  //     fetchRandomQuote(tag);
  //   };

  console.log(quote);
  console.log(tags);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Header />
          {quote && <Quote quote={quote} />}
          <button onClick={() => dispatch(fetchRandomQuote(selectedTag))}>
            New Quote
          </button>
          <TagList
            selectedTag={selectedTag}
            tags={tags}
            onTagSelect={handleTagSelect}
          />
          <Link to="/bookmarks">
            <button>View Bookmarks</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Home;
