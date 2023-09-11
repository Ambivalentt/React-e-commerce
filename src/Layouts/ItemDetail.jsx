import React,{useState, useEffect} from 'react'
import './font-custom.css'
import AddAmountPrice from './AddAmountPrice'


const ItemDetails = ({ img, title, description, brand, price, stock }) => {
    return (
            <>
            <section className="w-full max-w-xl mb-44 lg:mb-0 sm:mx-auto mx-2 lg:max-w-4xl lg:mx-auto flex flex-col lg:flex-row p-2 lg:p-0  shadow-xl bg-gray-100 lg:h-96 rounded-e-xl">
                <section className="lg:w-2/6 b">
                    <figure className="w-full h-full">
                        <img className="w-full h-full object-cover" src={img[0]} alt="" />
                    </figure>
                </section>
                <section className=" lg:ps-20 lg:w-4/6">
                    <h1 className="font-semibold text-4xl">{title}</h1>
                    <article className="pt-6 flex flex-col gap-y-2">
                        <h2 className="text-xl">{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, exercitationem?.</h2>
                        <span className="text-lg font-light">Stock: {stock}</span>
                        <h3 className="text-lg">Brand: {brand}</h3>
                        <span className='text-xl'>Price: ${price}</span>
                    </article>
                </section>
            </section>
        <AddAmountPrice price={price} />
        </>
    )
}

export default ItemDetails