import React from 'react';
import useProducts from '../../hooks/useProducts';
import usecart from '../../hooks/useCart'
import Cart from '../Cart/Cart';


const OrderRevew = () => {
    const [products, setProducts] = useProducts();
    const [cart] = usecart(products);
    return (
        <div className='shop-container'>
            <div className='products-container'>

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default OrderRevew;