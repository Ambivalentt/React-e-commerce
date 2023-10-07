import React, { useState, useEffect} from 'react'
import { BsBox2Fill } from "react-icons/bs";
import { useCartWidget } from '../Context/CartProvider';

const OrdersMenu = () => {
    const {orders} = useCartWidget()
    const [showOrders, setShowOrders] = useState(false)
    const handleShowOrders= () =>{
        setShowOrders(prev => !prev)
    }
    return(
        <section onClick={handleShowOrders} className={`text-2xl relative cursor-pointer`}>
      <BsBox2Fill />
      <span className="absolute text-white -top-4 text-sm bg-red-500 rounded-xl w-5 text-center font-bold -right-3">
        {orders.length}
      </span>
    
       <section className={`absolute top-7 rounded-xl bg-gray-800 p-3 ${showOrders ? 'block' : 'hidden'}`}>
       <h2 className="text-white text-xl font-bold mb-2">Orders:</h2>
       <ul className="text-white">
          {orders.map((order, index) => (
            <li key={index} className="mb-2 text-sm">
              <span className="font-bold">ID:</span> {order.id}<br />
              <span className="font-bold">Name:</span> {order.name}<br />
              <span className="font-bold">Phone:</span> {order.phone}<br />
              <span className="font-bold">Email:</span> {order.email}
            </li>
          ))}
        </ul>
      </section>
    </section>
    )
}

export default OrdersMenu