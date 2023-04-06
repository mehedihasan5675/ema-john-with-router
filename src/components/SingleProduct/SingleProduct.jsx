import React from 'react';

const SingleProduct = (props) => {
    
    // console.log(props.handleCart);
    const {img,name,price,seller,ratings,id}=props.product;
    return (
        <div className='text-left relative border border-border_color  rounded-md'>
            
                <img className='rounded-md mx-auto my-3 w-11/12 ' src={img?img:'No image available'} alt="img" />
                <div className='m-2 pb-12'>
                <h1 className='text-sm md:text-base font-semibold'>{name}</h1>
                <h1 className='text-sm md:text-base font-semibold mb-5'>Price: ${price}</h1>
                <p className='text-sm'>Manufacturer:{seller} </p>
                <p className='text-sm '>Rating: {ratings} star </p>
                </div>
                <button onClick={()=>props.handleCart(props.product)} className='absolute bg-cart_color bottom-0 w-full '>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 inline-block h-6">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>
</button>
        </div>
                    
                
            
        
    );
};

export default SingleProduct;