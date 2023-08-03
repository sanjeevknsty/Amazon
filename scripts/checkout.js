import {cart,removeItem} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrancy } from './utilis/price.js';


let cartSummaryHTML;
let paymentSummaryHTML;
let sum =0;

 cart.forEach( (cartItem)=>{
  
    const productId =cartItem.productId;
    let matchingItem;

      products.forEach((product) => {
        if(productId  ===  product.id){
          matchingItem = product
        }
        
      })



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
        
      sum =sum + Number(`${cartItem.quantity * formatCurrancy(matchingItem.priceCents)}`)
       
})


document.querySelector('.js-cart-summary').innerHTML=cartSummaryHTML


console.log(sum)

function shipingSummary(sum){
  let  shiping;
  if(sum <= 50){
    shiping = 10
  }
  else{
    shiping =0
  }
  return shiping
}

let items,shipping,beforeTax,tax;
let orderTotal
 
    if (sum >0 ){
    items = sum,
    shipping = shipingSummary(sum),
    beforeTax = shipping + items,
    tax = beforeTax /10,
    orderTotal = tax +beforeTax
    }
    else{
    items = 0,
    shipping = 0,
    beforeTax = 0,
    tax = 0,
    orderTotal = 0
    }

  


paymentSummaryHTML =`<div class="payment-summary">Order Summary</div>
                    <div class="payment-summary-row">
                      <div> Items :</div>
                      <div class="payment-summary-money">$${items}</div>
                    </div>
                    <div class="payment-summary-row">
                      <div> Shipping & handling :</div>
                      <div class="payment-summary-money">$${shipping}</div>

                    </div>

                    <div class="payment-summary-row">
                      <div> Total before Tax:</div>
                      <div class="payment-summary-money">$${beforeTax}</div>+
                    </div>
                    <div class="payment-summary-row">
                      <div> Estimated Tax(10%) :</div>
                      <div class="payment-summary-money">$${tax}</div>
                    </div>
                    <div class="payment-summary-row total-row">
                      <div>  Order-Total</div>
                      <div class="payment-summary-money">$${orderTotal}</div>
                    </div>
                    <div class="paypal-info">
                      Use Paypal
                      <input type="checkbox" >
                    </div>
                    <a href="Orders.html">
                      <button class="order-button js-order-button" >Place your Order</button>
                    </a>`
document.querySelector('.js-payment-info')
.innerHTML=paymentSummaryHTML


document.querySelectorAll('.js-delete-link')
.forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId=link.dataset.productId
      removeItem(productId);
      const container = document.querySelector(
        `.js-checkout-details-${productId}`
        ) 
        container.remove();

    })
   
})
export let newOrder =[]

const placeOrder = document.querySelector('.js-order-button')
placeOrder.addEventListener('click',cart.forEach((cartItem)=>{
  newOrder.push(cartItem)

}))
    

    
   
 
      console.log(newOrder)