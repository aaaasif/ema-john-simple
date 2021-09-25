import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);

    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div className="shop-container">
            <div className="product-contaier">
                <h3>products: {products.length}</h3>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>order summary</h3>
                <h5>item order</h5>
            </div>
        </div>
    );
};

export default Shop;