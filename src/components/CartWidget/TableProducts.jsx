import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useCartWidget } from '../Context/CartProvider'
import CartEmpty from '../../assets/CartEmpty.png';
import { BsFillDashCircleFill } from "react-icons/bs";
import CheckoutForm from '../CheckOutForm/CheckOutForm';

function MyTable() {
  const { cartProducts, removeFromCart, priceTotalProducts, setPriceTotalProducts, closeCheckout, setCloseCheckOut } = useCartWidget();

  const totalPrice = cartProducts.reduce((acc, product) => {
    const productPrice = parseFloat(product.totalPrice)
    return (acc + productPrice)
  }, 0);
  
 const handleShowCheckOut = () =>{
  setCloseCheckOut(true)
 }

  useEffect(() => {
    setPriceTotalProducts(totalPrice);
  }, [cartProducts]);

  const cellStyle = {
    color: 'red',
    fontSize: '20px'
  };
  const tableContainerStyle = {
    maxHeight: '600px',
    overflowY: 'scroll',
  };

  return (
    <main>
      {cartProducts.length > 0 ? (
        <section >
          <TableContainer style={tableContainerStyle}>
            <Table style={cellStyle}>
              <TableHead>
                <TableRow  >
                  <TableCell >Amount</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>images</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {cartProducts.map((product) => (
                  <TableRow key={product.key}>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell><img className='w-20' src={product.images[0]} alt="" /></TableCell>
                    <TableCell>${product.totalPrice}</TableCell>
                    <TableCell style={cellStyle} ><button onClick={() => removeFromCart(product.key)}><BsFillDashCircleFill /></button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className='flex justify-center pt-3'>
            <button onClick={handleShowCheckOut} className='bg-green-700 font-semibold w-60 py-1 flex justify-center items-center hover:bg-green-900 rounded-xl'>
              Purchase: ${priceTotalProducts.toFixed(2)}
            </button>
          </div>
          {closeCheckout ?
            <div className='fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center'>
              <CheckoutForm />
            </div> : null}
        </section>
      ) : (
        <section className='w-full h-screen flex justify-center items-center pb-40'>
          <img className='max-w-xs' src={CartEmpty} alt="IMG " />
        </section>
      )}
    </main>


  );
}

export default MyTable;
