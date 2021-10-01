import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderRevew = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>kichui tw order korlen na vai</h2>
            <h1>kahini ki</h1>
        </div>
    );
};

export default OrderRevew;