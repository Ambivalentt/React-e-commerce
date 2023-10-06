import React, { useContext, createContext, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartWidget, setCartWidget] = useState(false)
    const [cartProducts, setCartProducts] = useState([])
    const [priceTotalProducts, setPriceTotalProducts] = useState()

    const removeFromCart = (productKey) => {
        setCartProducts((prev) => prev.filter((product) => product.key !== productKey));
      };

    const handleCart = () =>{
        setCartWidget(prev => !prev)
    }
    return(
        <CartContext.Provider value={{handleCart, 
        cartWidget,
        cartProducts, 
        setCartProducts,  
        priceTotalProducts,
        setPriceTotalProducts,
        removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartWidget = () => useContext(CartContext)