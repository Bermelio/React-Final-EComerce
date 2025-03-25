import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
    const [cart] = useContext(CartContext);
    console.log("Carrito en Checkout:", cart); 
    return (
        <section>
            <h1>🛍️ Checkout</h1>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío 😢</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
