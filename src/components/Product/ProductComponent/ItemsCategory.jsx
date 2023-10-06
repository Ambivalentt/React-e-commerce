import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductsByCategory from "./ProductsByCategory"
import Footer from '../../../Layouts/Footer'
import { getDocs, query, where, collection } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'
import PropagateLoader from "react-spinners/PropagateLoader";

const ItemsCategory = () => {
    const [products, setProductMoviles] = useState([])
    const { category } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const products = collection(db, 'products')
        const categoryQuery = query(products, where('category', '==', category))
        getDocs(categoryQuery)
            .then(snapshots => {
                const products = snapshots.docs.map(snapshot => ({ id: snapshot.id, ...snapshot.data() }))
                setProductMoviles(products)
            })
            .catch(error => console.error('Error database Firebase', error))
            .finally(() => setLoading(false))
    }, [category])
    return (
        <>
            {loading ? (<main className={`h-screen  fixed z-10 inset-0 grid place-items-center`}>
                <PropagateLoader color="#838d8b" />
            </main>
            ) : (
                <>
                    <main className='grid grid-cols-1 sm:grid-cols-2 place-items-center  gap-y-7 lg:grid-cols-3  w-full mx-auto max-w-5xl pb-4'>
                        {products.map(product => (
                            <ProductsByCategory
                                key={product.id}
                                title={product.title}
                                images={product.images}
                                stock={product.stock}
                                rating={product.rating}
                                id={product.id}
                                category={product.category}
                            />
                        ))}
                    </main>
                <Footer />
                </>)
            }
        </>
    )
}
export default ItemsCategory


