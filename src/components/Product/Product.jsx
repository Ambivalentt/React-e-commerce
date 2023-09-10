import React from "react"
import { Routes, Route } from "react-router-dom"
import Moviles from "./ProductComponent/Moviles"
import Laptops from "./ProductComponent/Laptops"
import HomeDecoration from "./ProductComponent/HomeDecoration"
import Furniture from "./ProductComponent/Furniture"
import NavbarProducts from "./ProductComponent/NavbarProducts"
import SliderContainer from "./ProductComponent/itemsSlider"
import MovilDetails from "./ProductComponent/MovilDetails"
import LaptopsDetails from "./ProductComponent/LaptopsDetails"
import HomeDecorationDetails from "./ProductComponent/HomeDecorationDetails"
import FurnitureDetails from "./ProductComponent/FurnitureDetails"

const ProductsNavbar = () => {
  
    return (
        <>
            <NavbarProducts />
            <Routes>
                <Route path='/' element={<SliderContainer />} />
                <Route path='/moviles' element={<Moviles />} />
                <Route path='/moviles/:id' element={<MovilDetails />} />
                <Route path='/laptops' element={<Laptops />} />
                <Route path='/laptops/:id' element={<LaptopsDetails />} />
                <Route path='/home-decoration' element={<HomeDecoration />} />
                <Route path='/home-decoration/:id' element={<HomeDecorationDetails />} />
                <Route path='/furniture' element={<Furniture />} />
                <Route path='/furniture/:id' element={<FurnitureDetails />} />
            </Routes>
        </>

    )
}


export default ProductsNavbar