import { useEffect, useState } from "react"
import {getStoreCart, getStoredCart} from '../utilities/fakedb'
const useCart = products =>{
    const [cart, setCart] = useState([])
    useEffect( () =>{
        if(products.length){
            const saveCart = getStoredCart();
            const storedCart = [];
            
        }
    } , [products])
}