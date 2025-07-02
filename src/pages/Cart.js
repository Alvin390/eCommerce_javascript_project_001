import products from "../products";

function Cart({ cart, clearcart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart</h2>
            {cart.length === 0 ? (
                <div className="cart-empty">Cart is Empty!</div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item, i) => (
                            <div className="cart-item" key={i}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <div className="cart-item-name">{item.name}</div>
                                    <div className="cart-item-price">KES {item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <span>Total:</span>
                        <span>KSH {total}</span>
                    </div>
                    <button className="btn" onClick={clearcart}>
                        Checkout
                    </button>
                </>
            )}
        </div>
    );
}
export default Cart;