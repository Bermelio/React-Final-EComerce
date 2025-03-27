import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }
    const deleteFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };
    

    return (
        <CartContext.Provider value={[cart, setCart, addToCart, deleteFromCart]}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;