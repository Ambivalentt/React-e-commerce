import React, { useState, useEffect } from 'react'
import SliderItems from "../../../Layouts/sliderItems"
import Footer from '../../../Layouts/Footer'
import PropagateLoader from "react-spinners/PropagateLoader";

const SliderContainer = () => {

    const [loader, setLoader] = useState(true)
    const [categories, setCategories] = useState({
        moviles: [],
        laptops: [],
        decoration: [],
        furniture: []
    });
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then(response => response.json())
            .then(data => {
                setCategories(prevState => ({
                    ...prevState,
                    moviles: data.products.filter(item => item.category === 'smartphones'),
                    laptops: data.products.filter(item => item.category === 'laptops'),
                    decoration: data.products.filter(item => item.category === 'home-decoration'),
                    furniture: data.products.filter(item => item.category === 'furniture')
                }));
            });
               setTimeout(() => {
                setLoader(false)
                }, 500);
            
    }, [])
    return (
        <>
            {loader ?
                <main className='h-screen fixed inset-0 grid place-items-center overflow-y-scroll'>
                    <PropagateLoader color="#838d8b" />
                </main>
                :
                <>
                    <main className="grid grid-cols-1  lg:grid-cols-2 justify-center gap-y-10 items-center" >
                        {Object.keys(categories).map((category) => (
                            <SliderItems key={category} products={categories[category]} />

                        ))}
                    </main>
                    <Footer/>
                </>

            }

        </>

    )
}

export default SliderContainer