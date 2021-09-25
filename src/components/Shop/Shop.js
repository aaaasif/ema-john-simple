import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);

    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => console.log(data));
    }, [])
    return (
        <div className="shop-container">
            <div className="product-contaier">
                <h3>products:</h3>
            </div>
            <div className="cart-container">
                <h3>order summary</h3>
                <h5>item order</h5>
            </div>
        </div>
    );
};

export default Shop;