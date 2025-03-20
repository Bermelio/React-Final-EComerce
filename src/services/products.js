// fetch('https://fakestoreapi.com/products?limit=10')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//             .catch((error)=>console.log(error));
export default async function callApi(){
    try{
        const res = await fetch('https://fakestoreapi.com/products')

        if(!res.ok){
            throw new Error ('FATAL ERROR API 503')
        }

        const data = await res.json();
        console.log(data);
        return data;

    }
    catch(error){
        console.error('Api error:'+error)
        return [];
    }
}

