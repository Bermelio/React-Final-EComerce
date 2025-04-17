import ButtonsHud from "../ButtonNav/ButtonNav";
import chevron from '../../assets/images/up-down.png'
import './buyHud.css'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast, { Toaster } from 'react-hot-toast';

export default function BuyHud({product}){
    
    const notify = () => toast.success('Compra realizada con éxito!');
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
                    <a className="btn" onClick={() => { notify(); handleClick(); }}>Buy NOW!</a>
                    <Toaster
                        position="bottom-center"
                        reverseOrder={false}
                    />
                </div>
            </div>
        </>
    )
}