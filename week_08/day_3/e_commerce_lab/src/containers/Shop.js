import React, {useState, useEffect} from "react"
import ProductList from "../components/ProductList"

const Shop = () => {

    const [productList, setProductList] = useState(null)
    const [users, setUser] = useState([])
  
    useEffect(() => {
        loadProductList()
    }, []);

    const loadProductList = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(productList => setProductList(productList))
        
    }

    const addToBasket = (product) => {
        const usersCopy = users
        usersCopy.push(product)
        setUser(usersCopy)
    }

    if (!productList) return "Loading..."

    return(
        <>
            <ProductList productList={productList} addToBasket={addToBasket}/>
        </>
    )
}

export default Shop