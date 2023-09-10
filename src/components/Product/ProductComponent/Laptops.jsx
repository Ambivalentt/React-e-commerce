import React, { useState, useEffect } from 'react'
import ProductsByCategory from "./ProductsByCategory"
import Footer from '../../../Layouts/Footer'


const Laptops = () => {
    const [laptops, setLaptops] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then(response => response.json())
            .then(data => {
                setLaptops(data.products.filter(item => item.category === 'laptops'))
            })
            .catch(error => console.error('Error fetching laptops', error))
    },[])
    return (
        <>
            <main className='grid grid-cols-3 w-full mx-auto max-w-5xl pb-4'>
                {laptops.map(laptop => (
                    <ProductsByCategory
                        key={laptop.id}
                        title={laptop.title}
                        images={laptop.images}
                        stock={laptop.stock}
                        rating={laptop.rating}
                        id={laptop.id}
                        category={laptop.category}
                    />
                ))}
            </main>
            <Footer />
        </>

    )
}

export default Laptops