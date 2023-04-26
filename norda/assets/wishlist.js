// //Bismillah
// // import * as wishFile from './wishlist.js';
// let tableBody = document.querySelector('.wishTable')
// const heartIcon = document.querySelectorAll('.Wishlist')
// let img;
// let productName;
// let randomPrice;
// console.log(tableBody)
// document.addEventListener('click', addToWish);

// function addToWish(event) {
// 	event.preventDefault();
// 	const target = event.target;
// 	for (let i = 0; i < heartIcon.length; i++) {
// 		if (target == heartIcon[i]) {
// 			img = heartIcon[i].parentNode.parentNode.querySelector('img');
// 			productName = heartIcon[i].parentNode.parentNode.parentElement.querySelector('h3').textContent;
// 			randomPrice = Math.floor(Math.random() * (300 - 100 + 1)) + 100;

// 		}
// 	}
// };
// tableBody.innerHTML += `
//   <tr>
//                         <td class="product-thumbnail">
//                           <a href="#">${img}</a>
//                         </td>
//                         <td class="product-name"><a href="#">${productName}</a></td>
//                         <td class="product-price-cart"><span class="amount">$${randomPrice}</span></td>
//                         <td class="product-quantity pro-details-quality">
//                           <div class="cart-plus-minus">
//                             <input class="cart-plus-minus-box" type="text" name="qtybutton" value="4" />
//                             </div>
//                             </td>
//                             <td class="product-subtotal">$${randomPrice - 50}</td>
//                             <td class="product-wishlist-cart">
//                             <a href="#">add to cart</a>
//                             </td></tr>
//                         `
