import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity} = props.product;
    return (
        <div className='product'>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>price: {price}</p>
                <p>only {quantity} in stock. <Strong>Order Now</Strong></p>
                <button className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;