import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }



    return (
        <CartContext.Provider value={[cart, setCart, addToCart]}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;