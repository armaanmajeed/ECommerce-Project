//Bismillah

const heartIcon = document.querySelectorAll('.Wishlist')
// const

document.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    for (let i = 0; i < heartIcon.length; i++) {
        if (target == heartIcon[i]) {
            const img = heartIcon[i].parentNode.parentNode.querySelector('img');
            const name = heartIcon[i].parentNode.parentNode.parentElement.querySelector('h3').textContent
            console.log(img, name)
        }
    }
})

// < tr >
//                     <td class="product-thumbnail">
//                       <a href="#"><img src="assets/images/cart/cart-1.jpg" alt="" /></a>
//                     </td>
//                     <td class="product-name"><a href="#">Simple Black T-Shirt</a></td>
//                     <td class="product-price-cart"><span class="amount">$260.00</span></td>
//                     <td class="product-quantity pro-details-quality">
//                       <div class="cart-plus-minus">
//                         <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
//                       </div>
//                     </td>
//                     <td class="product-subtotal">$110.00</td>
//                     <td class="product-wishlist-cart">
//                       <a href="#">add to cart</a>
//                     </td>
//                   </ >
