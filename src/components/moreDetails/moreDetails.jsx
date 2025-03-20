import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { callEspecific } from '../../services/products.js'

export default function moreDetails(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        callEspecific(id).then(data=>setProduct(data));
    }
    ,[id]);

    return (
        <>
            <section>
                <h1>More Details</h1>
                <h3>{product?.title}</h3>
            </section>
        </>
    )
}