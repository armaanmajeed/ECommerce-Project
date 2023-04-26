import * as shop from './shop.js';
shop.tableBody.innerHTML += `
<tr tr >
                    <td class="product-thumbnail">
                      <a href="#">${shop.img}</a>
                    </td>
                    <td class="product-name"><a href="#">${shop.productName}</a></td>
                    <td class="product-price-cart"><span class="amount">$260.00</span></td>
                    <td class="product-quantity pro-details-quality">
                      <div class="cart-plus-minus">
                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                      </div>
                    </td>
                    <td class="product-subtotal">$110.00</td>
                    <td class="product-wishlist-cart">
                      <a href="#">add to cart</a>
                    </td>
                  </tr >
`;
