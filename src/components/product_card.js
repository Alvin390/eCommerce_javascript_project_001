import products from "../products";

function ProductCard({product,addtocart}) {
    if (!product) {
        return <div className="card">Product information is missing!</div>;
    }

    return(
        <div className="card">
            <img src={product.image} alt={product.name} className="card-image" width="100%"/>
            <h3>{product.name}</h3>
            <p>KES {product.price}</p>
            <button className="btn" onClick={() => addtocart(product)}>Add to Cart</button>
        </div>
    );
}
export default ProductCard;
