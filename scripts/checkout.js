import {cart,removeItem} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrancy } from './utilis/price.js';

let cartSummaryHTML;

 cart.forEach( (cartItem)=>{
  
  const productId =cartItem.productId;
  let matchingItem;

  products.forEach((product) => {
     if(product.id === productId){
      matchingItem = product
     }
    
  });

 

  cartSummaryHTML +=`<div class="checkout-details js-checkout-details-${matchingItem.id}">
<div class="checkout-details-tittle">Delivery Date : Sunday,July 16</div>
  <div class="details-grid">
    <div> 
        <img class="item-image" src="${matchingItem.image}" > 
    </div>
    <div class="item-details">
        <div> <b>${matchingItem.name}</b></div>
        <div class="item-price">${formatCurrancy(matchingItem.priceCents)}</div>
        <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingItem.id}">
              Delete
            </span>
         </div>
    </div>
    <div class="delivery-options">
      <div> <b>Choose delivery Options</b></div>
      <div class="delivery-dates"> 
        <input class="radio-input" type="radio" name="delivey-options-${matchingItem.id}">
        <div >
            <div class="delivery-day"> Tuesday</div>
            <div class="delivery-fee"> FREE shiping</div>
        </div>
      </div>
      <div class="delivery-dates"> 
        <input class="radio-input" type="radio" name="delivey-options-${matchingItem.id}">
        <div>
          <div class="delivery-day"> Tuesday</div>
          <div class="delivery-fee"> FREE shiping</div>
      </div>
      </div>
      <div class="delivery-dates"> 
        <input class="radio-input" type="radio" name="delivey-options-${matchingItem.id}">
        <div>
          <div class="delivery-day"> Tuesday</div>
          <div class="delivery-fee"> FREE shiping</div>
        </div>
      </div>
      
    </div>
  </div>
</div>`
 })

document.querySelector('.js-cart-summary')
.innerHTML=cartSummaryHTML

document.querySelectorAll('.js-delete-link')
.forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId=link.dataset.productId
      removeItem(productId)
      const container = document.querySelector(
        `.js-checkout-details-${productId}`
        ) 
        container.remove();
    })
   
   
})