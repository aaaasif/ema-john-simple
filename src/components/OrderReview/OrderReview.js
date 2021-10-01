import React from 'react';
import useProducts from '../../hooks/useProducts';
import usecart from '../../hooks/useCart'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderRevew = () => {
    const [products, setProducts] = useProducts();
    const [cart] = usecart(products);
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    cart.map(product=><ReviewItem
                        key={product.key}
                         product={product}
                         handleRemove={handleRemove}
                         ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default OrderRevew;