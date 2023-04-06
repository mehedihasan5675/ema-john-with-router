import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const OrderReview = () => {
    const products=useLoaderData()
    const [cart,setCart]=useState(products)
    const handleTrushBtn=(id)=>{
        const remaining=cart.filter(pd=>pd.id!==id)
        removeFromDb(id)
        setCart(remaining)

    }
    const handleClearBtn=()=>{
        setCart([])
        deleteShoppingCart()
    }
    console.log(cart);
    return (
        <div className='flex gap-5 mt-5 md:flex-row flex-col justify-between mx-10 md:mx-24'>
            <div className='md:w-5/12 w-full'>
                {
                    cart.map(c=><ReviewDetails handleTrushBtn={handleTrushBtn} key={c.id} oneCart={c}></ReviewDetails>)
                }
            </div>

            <div className='md:w-5/12 w-full'><Cart handleClearBtn={handleClearBtn} cart={cart}>
            <Link className='' to="/checkout">
            <button className='flex w-full items-center  lg:text-lg text-sm  font-semibold text-white bg-yellow justify-between my-3'>Proceed Checkout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg></button>
            


            </Link>
            </Cart>
            
            </div>
        </div>
    );
};

export default OrderReview;