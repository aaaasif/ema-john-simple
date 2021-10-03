import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link, useHistory } from 'react-router-dom';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory()

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () =>{
        history.push(./placeorder)
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/placeorder'>
                        <button onClick={handlePlaceOrder} className='btn-regular'>place order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;