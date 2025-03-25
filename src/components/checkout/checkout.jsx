import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import './checkout.css'

export default function Checkout() {
    const [cart] = useContext(CartContext);
    
    const handleClick = async () => {
        try {
            const totalPrice = cart.reduce((total, item) => {
                const price = parseFloat(item.product.price);
                return total + price;
            }, 0);
            const docRef = await addDoc(collection(db, "compras"), {
                items: cart.map(item => ({
                    title: item.product.title,
                    price: item.product.price,
                    image: item.product.image,
                })),
                total: totalPrice,
                fecha: serverTimestamp(),
            });

            console.log("Compra registrada con ID:", docRef.id);
            alert(`¡Compra exitosa! Total: $${totalPrice.toFixed(2)}`);
        } catch (error) {
            console.error("Error al guardar la compra:", error);
            alert("Hubo un error al procesar tu compra.");
        }
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