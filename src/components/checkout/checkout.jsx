import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
    const [cart] = useContext(CartContext);
    console.log("Carrito en Checkout:", cart); 
    return (
        <section>
            <h1>🛍️ Ultimos pasos</h1>
            {cart.length === 0 ? (
                <h3>Tu carrito está vacío 😢</h3>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                    <div key={index}>
                        <h2>{item.product.title}</h2>
                        <img
                        src={item.product.image}
                        alt={item.product.description}
                        />
                        <p>Precio: ${item.product.price}</p>
                    </div>
                ))}
                </ul>
            )}
        </section>
    );
}
