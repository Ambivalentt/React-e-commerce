import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ProductsByCategory from "./ProductsByCategory"
import Footer from '../../../Layouts/Footer'


const ItemsCategory = () => {
    const [productMoviles, setProductMoviles] = useState([])
    const {category} = useParams()
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then(response => response.json())
            .then(data => {
                setProductMoviles(data.products.filter(product => product.category === category))
            })
            .catch(error => console.error('Error fetching Moviles', error))
    }, [category])
    return (
     <>
       <main className='grid grid-cols-1 sm:grid-cols-2 place-items-center  gap-y-7 lg:grid-cols-3  w-full mx-auto max-w-5xl pb-4'>
         {productMoviles.map(product => (
             <ProductsByCategory
                key={product.id}
                title={product.title}
                images={product.images}
                stock={product.stock}
                rating={product.rating}
                id={product.id}
                category={product.category}
            />
        ))}
       </main>
     <Footer/>
     </>
    )
}
export default ItemsCategory