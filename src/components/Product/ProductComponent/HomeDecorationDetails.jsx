import React,{useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

const HomeDecorationDetails = () =>{
    const [product, setProduct] = useState(null)
    const {id} = useParams()
    
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
        .then(response => response.json())
        .then(data =>{
            const foundProduct = data.products.find((item) => item.id === Number(id));
            setProduct(foundProduct)
        })
        .catch(error=> console.error('error finding this product', error))
    },[id])
    if (product === null) {
        return <p>Loading... </p>;
      }
    return(
        <h1>  {product.title}</h1>
    )   
}

export default HomeDecorationDetails