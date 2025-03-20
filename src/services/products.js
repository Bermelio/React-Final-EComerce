export async function callApi(){
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

export async function callEspecific(id){
    try{
        const res = await fetch('https://fakestoreapi.com/products/'+id)

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