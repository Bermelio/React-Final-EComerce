import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './checkout.css'

export default function Checkout() {
    const [cart] = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.product.price);
        return total + price;
    }, 0);
    
    const handleClick = () => {
        alert('Gracias por tu compra!')
        alert('El monto total de tu compra es de $' + totalPrice)
    }
    return (
        <section className="checkoutContainer">
            <h1>🛍️ Ultimos pasos</h1>
            {cart.length === 0 ? (
                <h3>Tu carrito está vacío 😢</h3>
            ) : (
                <ul className="checkoutList">
                    {cart.map((item, index) => (
                        <div key={index} className="productCheckout">
                        <h2>{item.product.title}</h2>
                        <img
                        src={item.product.image}
                        alt={item.product.description}
                        />
                        <p>Precio: ${item.product.price}</p>
                    </div>
                    
                ))}
                    <div className="contenedor">
                        <a className="btn" onClick={handleClick}>Finalizar Compra</a>
                    </div>
                </ul>
            )}
        </section>
    );
}