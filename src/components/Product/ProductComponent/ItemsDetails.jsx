import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemDetails from '../../../Layouts/ItemDetail'
import AddAmountPrice from '../../../Layouts/AddAmountPrice'
import PropagateLoader from "react-spinners/PropagateLoader";
import { useTheme } from '../../Context/ThemeProvider';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig';


const ItemsDetails = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const { theme } = useTheme()

    useEffect(() => {
        const product = doc(db, 'products', id)
        getDoc(product)
            .then(snapshot => {
                const foundProduct = {id:snapshot.id, ...snapshot.data()}
                setProduct(foundProduct)
            })
            .catch(error => console.error('not item found', error))
    }, [id])

    if (product === null) {
        return <main className={`h-screen  fixed z-10 inset-0 grid place-items-center ${theme === 'light' ? 'bg-white' : 'bg-gradient-to-r  from-[#1a202c] to-[#2d3748]'}`}>
            <PropagateLoader color="#838d8b" />
        </main>
    }
    return (
        <>
            <main className=''>
                <ItemDetails
                    img={product.images}
                    title={product.title}
                    description={product.description}
                    brand={product.brand}
                    price={product.price}
                    stock={product.stock}
                />
            </main>
            <AddAmountPrice price={product.price} productToAdd={product}/>
        </>
    )
}

export default ItemsDetails