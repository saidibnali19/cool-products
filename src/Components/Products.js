import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/")
            .then((res) => res.json())
            .then((data) => setProducts(data.products.slice(0, 12)));
    }, []);

    console.log(products);
    return (
        <article className="products">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </article>
    );
}
