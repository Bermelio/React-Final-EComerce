import ButtonsHud from "../buttonNav/buttonNav";
import chevron from '../../assets/images/up-down.png'
import './buyHud.css'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function BuyHud({product}){
    
    const [cart, setCart, addToCart]=useContext(CartContext)

    const handleClick = () => {
        addToCart({product})
    }
    
    return(
        <>  
            <div className="hudContainer">
                <ButtonsHud miClase='stock' src={chevron} alt='stock minus/plus stock'/>
                <p>0</p>
                <ButtonsHud miClase='stock' src={chevron} alt='stock minus/plus stock'/>
                <div className="contenedor">
                    <a className="btn" onClick={handleClick}>Buy NOW!</a>
                </div>
            </div>
        </>
    )
}