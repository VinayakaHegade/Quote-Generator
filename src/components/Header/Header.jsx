import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header-container">
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="bookmarks" to="/bookmarks">
        Bookmarks
      </Link>
    </header>
  );
}

export default Header;
