import React from 'react';

const Cart = (props) => {
    const {cart,children,handleClearBtn}=props
    let totalPrice=0
    let totalShipping=0
    let quantity=0;
    for(const singleProduct of cart){
        // singleProduct.quantity= singleProduct.quantity || 1
        totalPrice =totalPrice +singleProduct.price* singleProduct.quantity
        totalShipping=totalShipping + singleProduct.shipping *singleProduct.quantity
        quantity=quantity+singleProduct.quantity 

    }
    const tax= (totalPrice * 10) /100;
    const grandTotal=totalPrice +totalShipping+tax;

    // console.log('caart.jsx',cart);
    return (
        <div className='bg-order-body text-center sticky top-5  py-3 pr-5  pl-1 mr-2 md:mr-5 rounded-md'>
            <h1 className='text-base mb-8 font-bold '>Shopping summary</h1>
            <div className='text-left text-sm ml-3 md:ml-5 leading-8'>
                <p>Selected items: {quantity}</p>
                <p>Total Price: $ {totalPrice}</p>
                <p>Total Shipping Charge:$ {totalShipping}</p>
                <p>Tax: ${tax}</p>
                <p className='font-semibold mb-2'>Grand Total: $ {grandTotal}</p>
                <button onClick={handleClearBtn} className='flex w-full text-sm items-center  lg:text-lg font-semibold text-white bg-order_red justify-between'>Clear Cart

                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 rounded-full  h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                </button>


                {children}
            </div>
            
        </div>
    );
};

export default Cart;