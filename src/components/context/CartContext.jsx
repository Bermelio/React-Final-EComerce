import { createContext, useState } from "react";

export default CartContext = createContext(false);

//el contexto en si
//si uno se llama context el otro se llama provider

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={[cart, setCart]}> 
        {children}
        </CartContext.Provider>
    )
}