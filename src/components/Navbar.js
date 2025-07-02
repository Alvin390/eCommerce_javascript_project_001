import { Link } from "react-router-dom";

function Navbar({ cartCount,user,logout }) {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">Retro-Shop</Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Cart">Cart ({cartCount})</Link>
                {!user ?(
                    <>
                        <Link to="/Login">Login</Link>
                        <Link to="/Registration">Registration</Link>

                    </>
                ):(
                    <>
                        <span>Welcome, {user.username }</span> | {""}
                        <button className="btn" onClick={logout}>Logout</button>
                    </>
                )

                }
            </div>
        </nav>
    );
}
export default Navbar;