import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { callEspecific } from '../../services/products.js'
import './moreDetails.css'

export default function moreDetails(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        callEspecific(id).then(data=>setProduct(data));
    }
    ,[id]);

    return (
        <>
            <section className="moreDetails">
                <h1 className="title">More Details of {product?.title}</h1>
                <div className="conteinerDet">
                    <img
                            src={product?.image}
                            alt={product?.description}
                            />
                </div>
                <div className="text">
                    <p>{product?.description} - ${product?.price}</p>
                </div>
            </section>
            
        </>
    )
}