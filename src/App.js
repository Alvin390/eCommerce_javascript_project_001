import {useState} from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./App.css"

function App(){
   const [user, setUser] = useState([]);
  const [cart,setCart] = useState([]);
  const addtocart = (product) => {
    setCart([...cart, product]);
    alert("Thank you for your purchase of " + product.name + " at KES " + product.price);
  };
    const clearcart = () => {
        setCart([]);
    };
    const login = (email) => {
        setUser({email});
    }
    const registration = (username, email) => {
        setUser({username, email});
    }
    const logout = () => {
            setUser(null);
            setCart([]);
        }
  return (
      <Router>
            <Navbar cartCount={cart.length} user={user} login={login} registration={registration} logout={logout}/>
            <Routes>
                <Route path="/" element={<Home addtocart={addtocart} />} />
                <Route path="/cart" element={ user ?<Cart cart={cart} clearcart={clearcart}/>:<Navigate to="/login"/>} />
                <Route path="/products" element={<Home addtocart={addtocart} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
      </Router>

  )
}
export default App;