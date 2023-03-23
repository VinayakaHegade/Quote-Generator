import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Quote from "../components/Quote";
import TagList from "../components/TagList";

function Home() {
  const [quote, setQuote] = useState(null);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomQuote();
    fetchTags();
  }, []);

  const fetchRandomQuote = async (tag = null) => {
    setLoading(true);
    setError(null);
    let url = "https://api.quotable.io/random";
    if (tag) {
      url += `?tags=${tag}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      setQuote(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const fetchTags = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.quotable.io/tags");
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      const data = await response.json();
      const tagNames = data.map((item) => item.name);
      setTags(tagNames);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    fetchRandomQuote(tag);
  };

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
          {quote && <Quote quote={quote} />}
          <button onClick={() => fetchRandomQuote(selectedTag)}>
            New Quote
          </button>
          <TagList tags={tags} onTagSelect={handleTagSelect} />
          <Link to="/bookmarks">
            <button>View Bookmarks</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Home;
