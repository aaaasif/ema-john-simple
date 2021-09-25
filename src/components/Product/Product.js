import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {name, img, price} = props.product;
    return (
        <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Product;