
import { cartPrice } from "../scripts/checkout,js";
 
 export let cart = JSON.parse(localStorage.getItem('cart'))
 
  if(!cart){
  cart =[{
  productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity  : 2,
 },{
  productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c4',
  quantity : 1,
 }
 ];
  }
 

 
 

  function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
  }


 export function addToCart(productId){
  let matchingItem;
     
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId ){
      matchingItem = cartItem; 
    }
  })
  if(matchingItem){
    matchingItem.quantity += 1;
  }     
  else{
    cart.push({
      productId: productId,
      quantity :1
    })
  }
  saveToStorage()
}

export function removeItem(productId){
  const newCart =[]
  cart.forEach((cartItem)=>{
    if(productId !== cartItem.productId){
      newCart.push(cartItem) 
     }
  })
  cart = newCart;
  cartPrice()
  saveToStorage()
}

