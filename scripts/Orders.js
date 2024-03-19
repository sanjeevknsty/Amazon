import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
let headerSection =JSON.parse(localStorage.getItem('headerSection'));

headerSection =`<div class="orderHeader-grid">
<div class="left-section">
  <div class="order-Date">
    <div class="text-orderPlaced">Order Placed</div>
    <div> Date: july</div>
  </div>

  <div class="order-Total">
    <div class="text-Total">Total:</div>
    <div>$222</div>
  </div>
</div>
<div class="right-section">
  <div class="text-OrderId">Order Id :</div>
  <div>lmgfnfngsddfffdfnon-9</div>
</div>
</div>`


let Summary =JSON.parse(localStorage.getItem('Summary')) ;

let matchingItem;
cart.forEach( cartItem  =>{ 
  const productId = cartItem.productId
    products.forEach( product  =>{
      
     if(product.id === productId ){
      matchingItem=product
     }
    })

Summary +=`  

<div class="item-grid js-item-grid-${matchingItem.id}">
  <div class="product-image"> 
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
        <button class="js-delete-item " data-Product-id="${matchingItem.id}">
          Delete
         </button>
  </div>
  <div>
      <button class="css-TrackPackage"> Track Your Package</button>
  </div>
</div>`

})


  document.querySelector('.js-Order-summary')
        .innerHTML=headerSection+Summary

        document.querySelectorAll('.js-delete-item')
        .forEach((link) => {
          link.addEventListener('click',()=>{
          const productId = link.dataset.productId
          const container = document.querySelector(`.js-item-grid-${productId}`)
          container.remove();
          console.log(container)
          })
        }) 
       


localStorage.setItem('Summary',JSON.stringify(Summary))
localStorage.setItem('headerSection',JSON.stringify(headerSection))

  
