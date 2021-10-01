import React from 'react';
import useProducts from '../../hooks/useProducts';
import usecart from '../../hooks/useCart'


const OrderRevew = () => {
    const [products, setProducts] = useProducts();
    const [cart] = usecart();
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>kichui tw order korlen na vai</h2>
            <h1>kahini ki</h1>
        </div>
    );
};

export default OrderRevew;