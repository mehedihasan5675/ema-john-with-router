import { getShoppingCart } from "./fakedb";

const loadReviewData = async () => {
    const response=await fetch('products.json')
    const products=await response.json()
    const savedCartData=[]
    const localStoredCart=getShoppingCart()
    for(const id in localStoredCart){
      const addedCartOneByOne=  products.find(pd=>pd.id=== id);
      const quantity=localStoredCart[id]
      addedCartOneByOne.quantity=quantity
      savedCartData.push(addedCartOneByOne);
    }
    // console.log(savedCartData);
    return savedCartData
};

export default loadReviewData;
// const obj={
//     name:'mehedi',
//     age:24
// }
// for (const proname in obj){
//     console.log(proname);
    
// }
// console.log(obj);
