import {cart,addToCart} from '../data/cart.js';
import { products} from '../data/products.js';
import { formatCurrancy } from './utilis/price.js';


 let productHTML='';

 products.forEach((product) => {
 
  productHTML += `
  <div class="css-product-container">
  <div class="css-product-image">
      <img class="item-image" src="${product.image}">
  </div>
  <div class="css-product-description">
    <p> ${product.name}</p>
    
  </div>
  <div class="css-product-price">
    <p><b>$${formatCurrancy(product.priceCents)}</b> </p>
  </div>
  <div class="product-quantity"> 
    <select class="css-select js-select">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>

    <div class="css-addded-to-cart js-addded-to-cart">
      <img src="images/checkmark.png" >
        Added
    </div>

      <button class="js-cart-button css-cart-button "
      data-product-id="${product.id}"
      >Add to Cart</button>
</div>

  `;
 });
  document.querySelector('.js-products-grid').innerHTML=productHTML;

 
  document.querySelectorAll('.js-cart-button')
  .forEach( (button)=>{
   button.addEventListener('click',()=>{
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity()
    })
  })
  updateCartQuantity();

 function updateCartQuantity(){ 
      let cartQuantiy=0;
      cart.forEach((cartItem)=>[
        cartQuantiy += cartItem.quantity
      ])
     document.querySelector('.js-cart-quantity')
     .innerHTML=cartQuantiy
    }

    
  