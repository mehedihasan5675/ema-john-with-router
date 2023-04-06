import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    const handleClearBtn=()=>{
        setCart([])
        deleteShoppingCart()
    }
    const handleCart=(product)=>{
        // console.log(product.name);
         let newCart=[]
        const existProduct=cart.find(cartPd=>cartPd.id ==product.id)
        if(!existProduct){
        product.quantity=1;
        newCart=[...cart,product]
        }else{
            // existProduct.quantity= existProduct.quantity + 1;
            product.quantity= product.quantity + 1;
        const remaining= cart.filter(cartPd => cartPd.id != product.id)
        // newCart=[...remaining,existProduct]
        newCart=[...remaining,product]

        }
        setCart(newCart)
        console.log('cart from clickFunction',newCart);
        addToDb(product.id)
    }
   
    // console.log(products);
    useEffect(()=>{
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart=getShoppingCart();
        const savedCartFromLocal=[];
        for(const id in storedCart){
          const afterAddedCart=  products.find(pd=>pd.id == id);
          if(afterAddedCart){
            const quantity=storedCart[id];
            afterAddedCart.quantity=quantity;
            savedCartFromLocal.push(afterAddedCart)
          }
        }
        setCart(savedCartFromLocal)
        console.log('cart from local storage,',savedCartFromLocal);

    },[products])
    return (
        
            
        
        <div className='flex flex-row mt-10 gap-2 md:gap-5 mx-5 '>
        <div className='w-full sm:w-8/12 md:w-7/12  md:mx-16  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-5 mb-20'>
            
            {
                products.map(product=><SingleProduct handleCart={handleCart} product={product} key={product.id}></SingleProduct>)
            }
            
        </div>
        <div className='w-full   md:w-5/12 sm:w-4/12 '>
            <Cart handleClearBtn={handleClearBtn} cart={cart}>
            <Link className=''  to="/review">
            <button className='flex w-full items-center  lg:text-lg text-sm  font-semibold text-white bg-yellow justify-between my-3'>Review Order
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>

            </button>
            </Link>

            </Cart>
        </div>
        
    </div>
    );
};

export default Shop;