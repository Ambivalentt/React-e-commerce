import React, { useContext, createContext, useState, useEffect } from 'react';
import { Storage } from './Storage';
export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartWidget, setCartWidget] = useState(false)
    const [cartProducts, setCartProducts] = useState(() => Storage.get('products') || [])
    const [priceTotalProducts, setPriceTotalProducts] = useState(0)
    const [closeCheckout, setCloseCheckOut] = useState(false)

    const removeFromCart = (productKey) => {
        setCartProducts((prev) => prev.filter((product) => product.key !== productKey));
      };

    const handleCart = () =>{
        setCartWidget(prev => !prev)
    }

    useEffect(() => {
        Storage.add('products', cartProducts)
      }, [cartProducts])
    
    return(
        <CartContext.Provider value={{handleCart, 
        cartWidget,
        cartProducts, 
        setCartProducts,  
        priceTotalProducts,
        setPriceTotalProducts,
        removeFromCart,
        closeCheckout,
        setCloseCheckOut
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartWidget = () => useContext(CartContext)