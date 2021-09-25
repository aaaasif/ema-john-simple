import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);



    // let total = 0;
    // for(const product of cart) {
    //     total = total + product.price;
    // }

    const shipping =15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
             <h3>order summary</h3>
            <h5>item order: {props.cart.length}</h5>
            <p>Total: {total}</p>
            <p>shipping: {shipping}</p>
            <p>tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
         </div>
    );
};

export default Cart;