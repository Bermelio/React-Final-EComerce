import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart] = useState([1])

    const addToCart = (product) => {
        setCart([...cart, product])
    }



    return (
        <CartContext.Provider value={[cart, setCart]}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;