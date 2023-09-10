import React, { useState, useEffect } from 'react'
import ProductsByCategory from "./ProductsByCategory"
import Footer from '../../../Layouts/Footer'


const Furniture = () => {
    const [furniture, setFurniture] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then(response => response.json())
            .then(data => {
                setFurniture(data.products.filter(item => item.category === 'furniture'))
            })
            .catch(error => console.error('Error fetching laptops', error))
    }, [])
    
    return (
        <>
            <main className='grid grid-cols-3 w-full mx-auto max-w-5xl pb-4'>
                {furniture.map(furniture => (
                    <ProductsByCategory
                        key={furniture.id}
                        title={furniture.title}
                        images={furniture.images}
                        stock={furniture.stock}
                        rating={furniture.rating}
                        id={furniture.id}
                        category={furniture.category}
                    />
                ))}
            </main>
            <Footer />
        </>

    )
}

export default Furniture