import ButtonsHud from "../buttonNav/buttonNav";
import chevron from '../../assets/images/up-down.png'
import './buyHud.css'

export default function BuyHud(){
    
    
    
    return(
        <>  
            <div className="hudContainer">
                <ButtonsHud class='stock' src={chevron} alt='stock minus/plus stock'/>
                <p> 0 </p>
                <ButtonsHud class='stock' src={chevron} alt='stock minus/plus stock'/>
            </div>
        </>
    )
}