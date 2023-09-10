import React, { useState, useEffect } from 'react'
import ProductsByCategory from "./ProductsByCategory"
import Footer from '../../../Layouts/Footer'


const Moviles = () => {
    const [productMoviles, setProductMoviles] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then(response => response.json())
            .then(data => {
                setProductMoviles(data.products.filter(product => product.category === 'smartphones'))
            })
            .catch(error => console.error('Error fetching Moviles', error))
    }, [])
    return (
     <>
       <main className='grid grid-cols-3 w-full mx-auto max-w-5xl pb-4'>
         {productMoviles.map(product => (
             <ProductsByCategory
                key={product.id}
                title={product.title}
                images={product.images}
                stock={product.stock}
                rating={product.rating}
                id={product.id}
                category={'moviles'}
            />
        ))}
       </main>
     <Footer/>
     </>
    )
}
export default Moviles