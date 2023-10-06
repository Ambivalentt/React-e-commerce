import React, { useState } from 'react'
import Footer from '../../Layouts/Footer'
import { useTheme } from '../Context/ThemeProvider'
const AboutUs = () => {
    const { theme } = useTheme()
    return (
        <>
            <main className={`min-h-screen flex gap-y-5 items-center justify-center flex-col 
            ${theme === 'light' ?  ' bg-white text-black' : 'text-gray-100 bg-gradient-to-r  from-[#1a202c] to-[#2d3748]'}
            `}>
                <h4 className='text-6xl font-bold'>About Us</h4>
                <p className='max-w-3xl text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam ratione fuga, libero impedit asperiores placeat quam iure quaerat quas reprehenderit, saepe aliquam dicta aspernatur velit natus cumque consequuntur neque suscipit autem facere id dolorem reiciendis esse! Repellendus, accusamus ipsum?</p>
            </main>
            <Footer />
        </>
    )
}

export default AboutUs