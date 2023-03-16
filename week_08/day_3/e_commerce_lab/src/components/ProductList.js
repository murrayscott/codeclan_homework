import React from "react";
import Product from './Product';

const ProductList = ({productList, addToBasket}) => {

    const products = productList.map((product, index) => {
        return <Product product={product} addToBasket={addToBasket} key={index}/>
    })

    return (
        <div>
            {products}
        </div>
    );

}

export default ProductList