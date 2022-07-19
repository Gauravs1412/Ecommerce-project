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
    var cartRowContent = `            <div id="${title}">
    <h3 class="shop-item-title">${title}</h3>
    <div class="image-container">
        <img class="prod-images" src="${imageSrc}" width='100' height='100' alt="IMAGE">
    </div>
    <div class="prod-details">
        
            
            <span class="shop-item-price">${price}</span>
        
        
    </div>
    </div>`
    // console.log(cartItems)
    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow);
}
