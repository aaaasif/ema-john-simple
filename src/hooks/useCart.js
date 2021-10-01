import { useEffect, useState } from "react"
import {getStoredCart} from '../utilities/fakedb'
const useCart = products =>{
    const [cart, setCart] = useState([])
    useEffect( () =>{
        if(products.length){
            const saveCart = getStoredCart();
            const storedCart = [];
            for(const key of saveCart){
                const addedProduct =products.find(product => product.
                    key === key);
                    if(addedProduct){
                        //set qantity
                        const quantity = saveCart[key];
                        addedProduct.quantity = quantity;
                        storedCart.push(addedProduct);

                    }
            }
            setCart(storedCart);
        }
    } , [products])
}