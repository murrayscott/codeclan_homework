import React from "react";

const Product = ({product, addToBasket}) => {

    return(
            <div>
                <hr></hr>
                <h1>{product.title}</h1>
                <img src={product.image} alt=""></img>
                <h2>{product.description}</h2>
                <h4> Price: £ {product.price}</h4>
                <h5> Category: {product.category}</h5>
                <button onClick={() => addToBasket(product)} type="button">Add to Basket</button>
            </div>
    )
}


export default Product;