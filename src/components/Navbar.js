import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">Retro-Shop</Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Cart">Cart ({cartCount})</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Registration">Registration</Link>
            </div>
        </nav>
    );
}
export default Navbar;