import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
    <NavLink
      to="/"
      /* add styling to Navlink */
      className="nav-link"
    >
      Home
    </NavLink>
    <NavLink
      to="/Home"
      className="nav-link"
    >
      Directors
    </NavLink>
    <NavLink
      to="/Directors"
      className="nav-link"
    >
      Actors
    </NavLink>
  </nav>
);
};


export default NavBar;
