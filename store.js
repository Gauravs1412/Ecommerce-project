//  function addToCart(event){
//      const whichButtonClickedId = event.target.id
//         console.log(whichButtonClickedId)
    
//  } 


const cart = document.getElementsByClassName('shop-item-button');


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
}

function addItemToCart(title,price,imageSrc){
    var cartRow = document.createElement('div')
    cartRow.innerText = title
    
    var cartItems = document.getElementsByClassName('cart-items')[0];
    // console.log(cartItems)
    cartItems.append(cartRow);
}
