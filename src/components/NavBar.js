import { NavLink } from "react-router-dom";
import "../style/NavBar.css";

/* define the NavBar component */
function NavBar({editor}) {

  if(editor){
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
    </nav>
  );
};
return (
  <nav>
    <NavLink
      to="/"
      className="nav-link"
    >
      Home
    </NavLink>
    <NavLink
      to="/editor/new"
      className="nav-link"
    >
      Create New Playlist
    </NavLink>
  </nav>
);
};

export default NavBar;