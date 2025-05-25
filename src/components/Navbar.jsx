import {NavLink} from "react-router-dom";
import ".styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="menu" className="nav-link">Menu</NavLink>
            <NavLink to="desserts" className="nav-link">Desserts</NavLink>
            <NavLink to="drinks" className="nav-link">Drinks</NavLink>
            <NavLink to="feedback" className="nav-link">Feedback</NavLink>
            <NavLink to="login" className="nav-link">login</NavLink>
            <NavLink to="signup" className="nav-link">Sign Up</NavLink>

        </nav>
    );
}

export default Navbar;