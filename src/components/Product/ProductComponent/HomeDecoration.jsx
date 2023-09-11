import React, { useState, useEffect } from 'react'
import ProductsByCategory from "./ProductsByCategory"
import Footer from '../../../Layouts/Footer'


const HomeDecoration = () => {
    const [homeDecoration, setHomeDecoration] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then(response => response.json())
            .then(data => {
                setHomeDecoration(data.products.filter(item => item.category === 'home-decoration'))
            })
            .catch(error => console.error('Error fetching laptops', error))
    }, [])
    return (
        <>
            <main className='grid grid-cols-1 sm:grid-cols-2 place-items-center  gap-y-7 lg:grid-cols-3  w-full mx-auto max-w-5xl pb-4'>
                {homeDecoration.map(homeDecoration => (
                    <ProductsByCategory
                        key={homeDecoration.id}
                        title={homeDecoration.title}
                        images={homeDecoration.images}
                        stock={homeDecoration.stock}
                        rating={homeDecoration.rating}
                        id={homeDecoration.id}
                        category={homeDecoration.category}
                    />
                ))}
            </main>
            <Footer />
        </>

    )
}

export default HomeDecoration