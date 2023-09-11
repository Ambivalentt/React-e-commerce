import React, { useState, useEffect } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa"

const AddAmountPrice = ({ price }) => {
    const [totalPrice, setTotalPrice] = useState(price)
    const [cantidad, setCantidad] = useState(1)

    const handleclickDecrease = () => {
        setCantidad(prev => prev - 1)
    };

    const handleclickSumIncrease = () => {
        setCantidad(prev => prev + 1)
    };

    useEffect(() => {
        setTotalPrice(price * cantidad);
    }, [cantidad])


    return (
        <footer className="fixed flex items-center flex-col  py-1 sm:flex-row justify-center gap-x-6 bottom-0 w-full h-20 bg-gray-200">
            <section className="flex items-center h-full justify-center gap-x-2 ">
                <p className="text-xl font-custom font-semibold ">AMOUNT</p>
                <button onClick={handleclickDecrease}
                    className={`px-[0.4rem] flex items-center text-2xl bg-gray-300 py-1 rounded-lg disabled:opacity-40`}
                    disabled={cantidad <= 1}><FaMinus />
                </button>
                <span className="flex items-center text-xl font-bold">{cantidad}</span>
                <button
                    onClick={handleclickSumIncrease}
                    className="px-[0.4rem] flex items-center text-2xl bg-gray-300 py-1 rounded-lg ">
                    <FaPlus />
                </button>
            </section>
            <section>
                <button className="bg-gray-900 text-white text-xl rounded-xl font-custom font-semibold p-2">Add to Card ${totalPrice}</button>
            </section>
        </footer>
    )
}

export default AddAmountPrice