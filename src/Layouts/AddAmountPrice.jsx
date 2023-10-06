import React, { useState, useEffect } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa"
import { useCartWidget } from '../components/Context/CartProvider'
import { v4 as uuidv4 } from 'uuid';

const AddAmountPrice = ({ price, productToAdd  }) => {
    const [totalPrice, setTotalPrice] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const { setCartProducts } = useCartWidget()

    const handleclickDecrease = () => {
        setQuantity(prev => prev - 1)
    };

    const handleclickSumIncrease = () => {
        setQuantity(prev => prev + 1)
    };

    const handleAddToCart = () => {
        if (productToAdd) {
            const uniqueKey = uuidv4();

            const productWithKey = { ...productToAdd, 
                key: uniqueKey, 
                quantity:quantity, 
                totalPrice:totalPrice.toFixed(2) };

            setCartProducts((prev) => [...prev, productWithKey]);
          }
    }

    useEffect(() => {
        setTotalPrice(price * quantity);
    }, [quantity])


    return (
        <footer className="fixed flex items-center flex-col  py-1 sm:flex-row justify-center gap-x-6 bottom-0 w-full h-20 bg-gray-200">
            <section className='flex items-center h-full justify-center gap-x-2 text-black'>
                <p className="text-xl font-custom font-semibold ">AMOUNT</p>
                <button onClick={handleclickDecrease}
                    className={`px-[0.4rem] flex items-center text-2xl bg-gray-300 py-1 rounded-lg disabled:opacity-40`}
                    disabled={quantity <= 1}><FaMinus />
                </button>
                <span className="flex items-center text-xl font-bold">{quantity}</span>
                <button
                    onClick={handleclickSumIncrease}
                    className="px-[0.4rem] flex items-center text-2xl bg-gray-300 py-1 rounded-lg ">
                    <FaPlus />
                </button>
            </section>
            <section>
                <button
                    onClick={handleAddToCart}
                    className="bg-gray-900 text-white text-xl rounded-xl font-custom font-semibold p-2">Add to Card ${totalPrice}</button>
            </section>
        </footer>
    )
}

export default AddAmountPrice