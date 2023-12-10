import React from "react";

export default function Product({ product }) {
    const { title, description, images, price } = product;

    return (
        <article className="product">
            <img className="product__image" src={images[0]} alt="" />
            <div>
                <h2 className="product__name | fs-500 ff-heading">{title}</h2>
                <p className="product__description">{description}</p>
                <div>
                    <p className="product__price">$ {price}</p>
                    <button class="product__cta | bg-accent text-primary">
                        Buy
                    </button>
                </div>
            </div>
        </article>
    );
}
