import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>Logo</h1>
            </div>
            <div className="navbar__links">
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </div>
            <div className="navbar__resume">
                {null}
            </div>
        </nav>
    )
}

export default NavBar;