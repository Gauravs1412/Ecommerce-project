//  function addToCart(event){
//      const whichButtonClickedId = event.target.id
//         console.log(whichButtonClickedId)
    
//  } 


const cart = document.getElementsByClassName('shop-item-button');
const notification = document.getElementById('for-notif');

const showCart = document.getElementById('cart-holder1');
const wholeCart = document.getElementById('cart');

showCart.addEventListener('click',() => {
    wholeCart.classList.toggle('active');
    getCartDetails();

})

// console.log(showCart)



// console.log(cart);

for(var i=0; i<cart.length; i++){
    const btn = cart[i]

    btn.addEventListener('click',function(event){
        var button = event.target;
        var  shopItem = button.parentElement.parentElement
        // console.log(shopItem)
        var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        // console.log(title);
        var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        // console.log(price)
        var imageSrc = shopItem.getElementsByClassName('prod-images')[0].src

        addItemToCart(title,price,imageSrc)
    })

    btn.addEventListener('click', () => {
        const notif = document.createElement('div');
        notif.classList.add('toast');

        notif.innerText = 'product is added to the cart'
        notification.appendChild(notif);

        setTimeout(() => {
            notif.remove();
            
        }, 2000);


    })
}

function addItemToCart(title,price,imageSrc){
    var cartRow = document.createElement('div')
    // cartRow.innerText = title
    
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartRowContent = `            
    <h3 class="shop-item-title">${title}</h3>
     <div class="image-container">
        <img class="prod-images" src="${imageSrc}" width='100' height='100' alt="IMAGE">
     </div>
    <span class="prod-details">
        
            
        <span class="shop-item-price">${price}</span>
        
        
    </span>
    `
    // console.log(cartItems)
    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow);
}




window.addEventListener('DOMContentLoaded', () => {
    // console.log('loaded');

    axios.get('http://localhost:9000/products').then((data) => {
        // console.log(data);

         if(data.request.status === 200){
            const products = data.data.products;
            const parentNode = document.getElementById('products');
            products.forEach(product => {
                const productHtml = `
                    <div id="album-${product.id}">
                        <h3>${product.title}</h3>
                        <div class="image-container">
                            <img class="prod-images" src=${product.imageUrl} alt="">
                        </div>
                                        <div class="prod-details">
                            <span>$<span>${product.price}</span></span>
                            <button onClick='addToCarts(${product.id})'>ADD TO CART</button>
                        </div>
                    </div>`
                parentNode.innerHTML += productHtml
    
            })
         }
       
    })

})

function addToCarts(productId){
    axios.post('http://localhost:9000/cart',{productId:productId})
      .then(response =>{
        if(response.status === 200){
            console.log(response)
        }
      })
      .catch(err =>{
        console.log(err);
      })
}

function getCartDetails(){
    axios.get('http://localhost:9000/cart')
      .then(response =>{
        
        if(response.status === 200){
            response.data.products.forEach(product => {
                const cartContainer = document.getElementById('cart-item')
                cartContainer.innerHTML += `<li>${product.title} - ${product.cartItem.quantity} - ${product.price}`
            })
            document.querySelector('#cart').style="display:block"
        }
      })
      .catch(err => {
        console.log(err)
      })
}


const order = document.getElementById('order');

order.addEventListener('click' ,() =>{
    axios.post('http://localhost:9000/create-order',{})
      .then(response =>{
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })

    showMessage()
})

function showMessage(){

    const notif = document.createElement('div');
        notif.classList.add('toast');

        notif.innerText = 'Your order has been sucessfully placed'
        notification.appendChild(notif);

        setTimeout(() => {
            notif.remove();
            
        }, 2000);
}





