import { useEffect, useState } from "react";

function useProducts(){
    const [products , setProducts] = useState([])

    const [error, setError] = useState(null)

    useEffect(()=>{
        async function fetchProducts(){
            try{
                const response= await fetch("https://dummyjson.com/products")

                const data = await response.json()
            
                setProducts(data.products)

            }
            catch(err){
                setError("failed to fetch products")
            }
            
        }

        fetchProducts()
    },[])
}

export default useProducts;