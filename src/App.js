import {useState} from 'react';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Cart from "./pages/cart";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css"

function App(){
  const [cart,setCart] = useState([]);
  const addtocart = (product) => {
    setCart([...cart, product]);
    alert("Thank you for your purchase of " + product.name + " at KES " + product.price);
  };
  return (
      <Router>
            <Navbar cartCount={cart.length}/>
            <Routes>
                <Route path="/" element={<Home addtocart={addtocart} />} />
                <Route path="/cart" element={<Cart cart={cart} clearcart={() => setCart([])} />} />
                <Route path="/products" element={<Home addtocart={addtocart} />} />
            </Routes>
      </Router>

  )
}
export default App;