import React from 'react';

const ReviewDetails = ({oneCart,handleTrushBtn}) => {
    const {img,name,price,quantity,id}=oneCart
console.log(img);
    return (
        <div className='flex border justify-between  p-2 border-border_color rounded-lg mb-3'>
            <div className='w-10/12 flex justify-start items-center'>
            <img src={img} className='w-24 rounded-lg h-24' alt="" />
            <div className='text-left ml-3'>
                    <h1 className='text-xs sm:text-lg lg:text-base font-semibold'>{name}</h1>
                    <h1 className='text-sm font-medium my-1'>Price: <span className='text-yellow '>${price}</span></h1>
                    <h1 className='text-sm font-medium' >Quantity: <span className='text-yellow'>{quantity}</span></h1>
                </div>
            </div>
            <div className=' w-2/12   flex items-center justify-end'>
                
                <button onClick={()=>handleTrushBtn(id)} className='text-order_red   w-10 h-10 t  bg-order_red bg-opacity-25 p-2 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                </button>
            </div>
        </div>
    );
};

export default ReviewDetails;