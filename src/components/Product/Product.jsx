import React from "react"
import { Routes, Route } from "react-router-dom"
import NavbarProducts from "./ProductComponent/NavbarProducts"
import SliderContainer from "./ProductComponent/itemsSlider"
import ItemsCategory from './ProductComponent/ItemsCategory'
import ItemsDetails from './ProductComponent/ItemsDetails'

const ProductsNavbar = () => {
  
    return (
        <>
            <NavbarProducts />
            <Routes>
                <Route path='/' element={<SliderContainer />} />
                <Route path='/:category' element={<ItemsCategory/>}/>
                <Route path='/:category/:id' element={<ItemsDetails/>}/>
            </Routes>
        </>

    )
}


export default ProductsNavbar