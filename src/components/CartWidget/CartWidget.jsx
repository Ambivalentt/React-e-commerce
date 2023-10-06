import { useCartWidget } from '../Context/CartProvider'
import { BsCart3 } from "react-icons/bs";
import { BsFillTrash3Fill, BsFillXCircleFill } from "react-icons/bs";
import MyTable from './TableProducts';

export const CartWidget = () => {
    const { handleCart, cartWidget, cartProducts } = useCartWidget()
    
    return (
        <>
            <button className='relative' onClick={handleCart}>
                <BsCart3 className={`text-4xl relative`} />
                <span className='absolute -top-2 -right-2 bg-red-500 rounded-full w-5 text-center text-white font-bold select-none'>{cartProducts.length}</span>
            </button>
            <main className={`bg-gray-100 z-[60] fixed h-full w-full max-w-lg top-0 right-0 ${cartWidget ? 'block' : 'hidden'}`}>
                <section>
                    <header className='text-black p-3 text-xl'>
                      <button onClick={handleCart}> <BsFillXCircleFill /></button>  
                    </header>
                    <main className='text-white'>
                        <MyTable />
                    </main>
                </section>
            </main>
        </>

    )
}