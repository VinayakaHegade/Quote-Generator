import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import { createStore } from 'redux';

// const initialState = {
//   quote: {},
//   tags: [],
//   bookmarks: [],
// };

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SET_QUOTE':
//       return { ...state, quote: action.payload };
//     case 'SET_TAGS':
//       return { ...state, tags: action.payload };
//     case 'ADD_BOOKMARK':
//       return { ...state, bookmarks: [...state.bookmarks, action.payload] };
//     default:
//       return state;
//   }
// }

// const store = createStore(rootReducer);

// import axios from 'axios';

// const API_BASE_URL = 'https://example.com/api';

// export function fetchRandomQuote(tag) {
//   const url = tag ? `${API_BASE_URL}/random?tag=${tag}` : `${API_BASE_URL}/random`;
//   return axios.get(url);
// }

// export function fetchTags() {
//   return axios.get(`${API_BASE_URL}/tags`);
// }

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchRandomQuote, fetchTags } from './api';
// import { addBookmark } from './actions';

// function HomePage() {
//   const dispatch = useDispatch();
//   const quote = useSelector(state => state.quote);
//   const tags = useSelector(state => state.tags);

//   useEffect(() => {
//     // Fetch the initial quote and tag data
//     dispatch(fetchRandomQuote());
//     dispatch(fetchTags());
//   }, [dispatch]);

//   function handleNewQuoteClick() {
//     dispatch(fetchRandomQuote());
//   }

//   function handleBookmarkClick() {
//     dispatch(addBookmark(quote));
//   }

//   return (
//     <div>
//       <h1>Random Quote Generator</h1>


// import { Link } from 'react-router-dom';

// function HomePage() {
//   const dispatch = useDispatch();
//   const quote = useSelector(state => state.quote);
//   const tags = useSelector(state => state.tags);

//   function handleNewQuoteClick() {
//     dispatch(fetchRandomQuote());
//   }

//   function handleBookmarkClick() {
//     dispatch(addBookmark(quote));
//   }

//   return (
//     <div>
//       <h1>Random Quote Generator</h1>
//       <div>
//         <button onClick={handleNewQuoteClick}>New Quote</button>
//         <button onClick={handleBookmarkClick}>Bookmark</button>
//       </div>
//       <div>
//         <p>{quote.text}</p>
//         <p>{quote.author}</p>
//         {tags.length > 0 && (
//           <select>
//             <option value="">Select a tag</option>
//             {tags.map(tag => (
//               <option key={tag} value={tag} onClick={() => dispatch(fetchRandomQuote(tag))}>
//                 {tag}
//               </option>
//             ))}
//           </select>
//         )}
//       </div>
//     </div>
//   );
// }

// function
