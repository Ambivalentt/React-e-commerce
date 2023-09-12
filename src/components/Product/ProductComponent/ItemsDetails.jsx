import React,{useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import ItemDetails from '../../../Layouts/ItemDetail'
const ItemsDetails = () =>{
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
           <main className='mt-10 flex items-center'>
             <ItemDetails 
            img={product.images} 
            title={product.title}
            description={product.description} 
            brand={product.brand}
            price={product.price}
            stock={product.stock}
            />
           </main>
    )   
}

export default ItemsDetails