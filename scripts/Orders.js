import { cart } from "../data/cart.js";
import { products } from "../data/products.js";



let Summary ;
let matchingItem
cart.forEach( cartItem  =>{ 
  const productId = cartItem.productId
    products.forEach( product  =>{
      
     if(product.id === productId ){
      matchingItem=product
     }
    })

Summary +=`<div class="product-image"> 
<img class="css-product-image" src="${matchingItem.image}" alt="">
</div>
<div class="product-details"> 
<div class="product-name">${matchingItem.name}</div>
<div class="product-arrivingDate">Arriving on: July 25</div>
<div class="product-size">Shoe size (US): ${matchingItem.priceCents}</div>
<div class="product-quantity"> Quantity: ${cartItem.quantity}</div>
<button class="product-BuyAgain">
   <img class="image-BuyAgain" src="images/buy-again.png">
   <span>Buy it again</span> 
  </button>
</div>
<div>
<button class="css-TrackPackage"> Track Your Package</button>
</div>`

})


document.querySelector('.js-item-grid')
.innerHTML=Summary

