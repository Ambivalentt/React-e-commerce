import { useState, useEffect } from 'react'
import { BsFillXCircleFill } from "react-icons/bs";
import { useCartWidget } from '../Context/CartProvider';
import { useAuth } from '../Context/AuthProvider';
import { v4 as uuidv4 } from 'uuid';
const CheckoutForm = () => {
  const { setCloseCheckOut, setCartProducts, handleCart, setShowCheckoutMessage, oders, setOrders } = useCartWidget()
  const { user } = useAuth()
  const closeCheckOut = () => {
    setCloseCheckOut(prev => !prev)
  }

  const orderId = uuidv4();
  
  const [form, setForm] = useState({
    id: orderId,
    name: '',
    phone: '',
    email: ''
  })
  const handleOnChange = (event) => {
    const { name, value } = event.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setOrders(prev => [...prev, form])
    setCartProducts([])
    handleCart()
    setCloseCheckOut(prev => !prev)
    setShowCheckoutMessage(true);
    setTimeout(() => {
      setShowCheckoutMessage(false);
    }, 4000);

  }

  return (
    <div className='w-full relative'>
      <form onSubmit={handleOnSubmit} className='bg-white relative max-w-lg m-auto flex flex-col justify-center gap-4 px-8 pt-12 pb-4 rounded-md shadow-sm'>
        <button onClick={closeCheckOut} className='absolute text-green-800 top-3 right-4'>
          <BsFillXCircleFill />
        </button>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 '>Name</label>
          <input type='text' name='name' value={form.name} onChange={handleOnChange} placeholder='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 '>Phone</label>
          <input type='text' name='phone' value={form.phone} onChange={handleOnChange} placeholder='phone' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label className='block  mb-2 text-sm font-medium text-gray-900 '>Email</label>
          <input disabled={user === null} type='text' name='email' value={form.email} onChange={handleOnChange} placeholder='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <button disabled={user === null} className={`${user === null ? 'disabled:opacity-70 cursor-not-allowed' : ''
          } bg-green-700 px-5 py-1.5 rounded-lg text-white flex gap-2 justify-center items-center disabled:opacity-70`}>
          Checkout
        </button>
        {user === null && (
          <span className='text-black font-semibold'>You need to be registered to buy something!</span>)}
      </form>
      
    </div>
  )
}

export default CheckoutForm