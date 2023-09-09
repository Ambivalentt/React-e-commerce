import React from "react"
import { Routes, Route } from "react-router-dom"
import Moviles from "./ProductComponent/Moviles"
import Laptops from "./ProductComponent/Laptops"
import HomeDecoration from "./ProductComponent/HomeDecoration"
import Furniture from "./ProductComponent/furniture"
import NavbarProducts from "./ProductComponent/NavbarProducts"
import SliderContainer from "./ProductComponent/items"
const ProductsNavbar = () => {
    return (
        <>
            <NavbarProducts />
            <Routes>
                <Route path='/' element={<SliderContainer />} />
                <Route path='/moviles' element={<Moviles />} />
                <Route path='/laptops' element={<Laptops />} />
                <Route path='/home-decoration' element={<HomeDecoration />} />
                <Route path='/furniture' element={<Furniture />} />
            </Routes>
        </>

    )
}


export default ProductsNavbar