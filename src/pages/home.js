import ProductCard from '../components/product_card';
import products from "../products";

function Home({addtocart}) {
    return (
        <div className="products-grid">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} addtocart={addtocart} />
            ))}
        </div>
    );
}
export default Home

// In src/pages/home.js
// import products from '../products';
// import ProductCard from '../components/product_card';
//
// function Home({ addtocart }) {
//     return (
//         <div className="products-grid">
//             {products.map(product => (
//                 <ProductCard key={product.id} product={product} addtocart={addtocart} />
//             ))}
//         </div>
//     );
// }
//
// export default Home;