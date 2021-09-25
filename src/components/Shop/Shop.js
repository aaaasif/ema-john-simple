import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    useEffect( () => {
        const saveCart = getStoredCart();
        for(const key in saveCart);
        
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(product);
        // save to local storage
        addToDb(product.key);
    }

    return (
        <div className="shop-container">
            <div className="product-contaier">

                {
                    products.map(product => <Product 
                     key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                     >
                     </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;