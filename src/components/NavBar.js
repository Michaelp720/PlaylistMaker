import { NavLink } from "react-router-dom";
import "../style/NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/editor/0"
        className="nav-link"
      >
        Create New Playlist
      </NavLink>
      <NavLink
        to="/editor"
        className="nav-link"
      >
        Edit
      </NavLink>
    </nav>
  );
};

export default NavBar;