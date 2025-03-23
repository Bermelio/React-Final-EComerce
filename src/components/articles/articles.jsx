import { useEffect, useState } from 'react'
import { callApi } from '../../services/products.js'
import './articles.css'
// import ButtonBuy from "../buttonNav/buttonNav";
// import BuyNow from "../../assets/images/carro-vacio.png";
import ButtonDetails from "../buttonNav/buttonNav";
import Details from "../../assets/images/detailButton.png";
import { Link } from 'react-router-dom';



export default function ArticlesPost(){
const [articles, setArticles] = useState(null);

useEffect(()=>{
    callApi().then(data=>setArticles(data));
},[]);

    return(
    <>
        <main className='articles'>
                <ul>
                    {articles?.map(articles =>
                    <li key={articles?.id}>
                        <img
                        src={articles?.image}
                        alt={articles?.description}
                        />
                    <div>
                        <strong>{articles?.title} - ${articles?.price}</strong>
                    </div>
                    <div>
                        <p>{articles?.category}</p>
                    </div>
                    <br />
                    <div className='buyButton'>
                        {/* <ButtonBuy src={BuyNow} alt='Buy button' /> */}
                        <Link to={`/products/${articles?.id}`}>
                            <ButtonDetails class='Icons' src={Details} alt='Details button' />
                        </Link>
                    </div>
                    </li>
                    )}
                </ul>
        </main>
    </>
    )
}