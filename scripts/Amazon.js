
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
    <p><b>$${(product.priceCents/100).toFixed(2)}</b> </p>
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

      <button class="js-cart-button css-cart-button data-product-id">Add to Cart</button>
</div>

  `;
 });
  document.querySelector('.js-products-grid').innerHTML=productHTML;

 

  const cart =[];
   

     document.querySelectorAll('.js-cart-button')
      .forEach( (button)=>{
       button.addEventListener('click',()=>{
       /* const productId = button.dataset.productId;
        let matchingItem;
       
        cart.forEach((item)=>{
          if(productId === item.productId ){
            matchingItem = item; 
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
        
        let cartQuantiy=0;
        cart.forEach((item)=>[
          cartQuantiy += item.quantity
        ])*/
        let cartQuantiy=0;
         const inputElement=document.querySelector('.js-select')
          quantiy= Number(inputElement.value); 

         cartQuantiy += quantiy;
        
         document.querySelector('.js-cart-quantity').innerHTML=cartQuantiy
       })
       
        
      })
  