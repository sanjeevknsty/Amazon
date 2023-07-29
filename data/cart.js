

 
 export let cart =[{
  productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity  : 2,
 },{
  productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c4',
  quantity : 1,
 }
 ];

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
}

export function removeItem(productId){
  const newCart =[]
  cart.forEach((cartItem)=>{
    if(productId !== cartItem.productId){
      newCart.push(cartItem) 
     }
  })
  cart = newCart;
}