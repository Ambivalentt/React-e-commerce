import React from "react"
import { Routes, Route } from "react-router-dom"
import NavbarProducts from "./ProductComponent/NavbarProducts"
import SliderContainer from "./ProductComponent/itemsSlider"
import ItemsCategory from './ProductComponent/ItemsCategory'
import ItemsDetails from './ProductComponent/ItemsDetails'
import { useTheme } from "../Context/ThemeProvider"

const ProductsNavbar = () => {
    const {theme} = useTheme()
    return (
        <>
            <main className={`transition-all duration-150 min-h-screen 
            ${theme === 'light' ? 'bg-white text-black':'bg-gradient-to-r  from-[#1a202c] to-[#2d3748] text-white'}`}>
                <NavbarProducts />
                <Routes>
                    <Route path='/' element={<SliderContainer />} />
                    <Route path='/:category' element={<ItemsCategory />} />
                    <Route path='/:category/:id' element={<ItemsDetails />} />
                </Routes>
            </main>
        </>

    )
}


export default ProductsNavbar