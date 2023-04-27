const heartIcon = document.querySelectorAll(".Wishlist");
const items = document.getElementById("items");
// console.log(items);
// let img;
// let productName;
// let randomPrice;
// // let text = [];
// document.addEventListener("click", addToWish);

// function addToWish(event) {
//   // event.preventDefault();
//   const target = event.target;
//   // console.log(target.id);
//   // console.log(heartIcon[0].id);
//   // if (target.id == heartIcon[0].id) {
//   //   console.log("True");
//   // } else {
//   //   console.log("False");
//   // }
//   for (let i = 0; i < heartIcon.length; i++) {
//     if (target.id == heartIcon[i].id) {
//       img = heartIcon[i].parentNode.parentNode.querySelector("img");
//       productName = heartIcon[i].parentNode.parentNode.parentElement.querySelector("h3").textContent;
//       randomPrice = Math.floor(Math.random() * (300 - 100 + 1)) + 100;

//       // console.log(img);
//       // console.log(productName);
//       // console.log(randomPrice);
//       // localStorage.setItem("Wishes", text);
//     }
//   }
// }
items.innerHTML += `<tr><td class="product-thumbnail">
                          <a href="#">img</a>
                        </td>
                        <td class="product-name"><a href="#">productName</a></td>
                        <td class="product-price-cart"><span class="amount">$randomPrice</span></td>
                        <td class="product-quantity pro-details-quality">
                          <div class="cart-plus-minus">
                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="4" />
                            </div>
                            </td>
                            <td class="product-subtotal">randomPrice - 50</td>
                            <td class="product-wishlist-cart">
                            <a href="#">add to cart</a>
                            </td></tr>`;