var shopPage = `

<div class="shopitems">
          <div class="shop" style="text-align: center;">

            <h5>SHOP</h5>
            <div class="card-deck">
              <div class="card h-600" style="width: 100px">
                <img src="Screenshot (1).png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h6 class="card-title">SALR t-shirt</h6>
                  <p class="card-text"> </p>
                  <p class="card-text"><small class="text-muted"></small></p>
                </div>
              </div>
              <div class="card h-600">
                <img src="Screenshot (2).png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h6 class="card-title">"Feelings" hoodie</h6>
                  <p class="card-text"> </p>
                  <p class="card-text"><small class="text-muted"></small></p>
                </div>
              </div>
              <div class="card h-600">
                <img src="IMG_2037.PNG" class="card-img-top" alt="...">
                <div class="card-body">
                  <h6 class="card-title">"Feelings" Vinyl</h6>
                  <p class="card-text"> </p>
                  <p class="card-text"><small class="text-muted"></small></p>
                </div>
              </div>
            </div>

          </div>
          <div class="shopcart">
            <p>ORDER SUMMARY</p>
            <table id="cart">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Unit Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr class="product">
                  <td class="name">
                    <span>SALR t-Shirt</span>
                  </td>
                  <td class="quantity">
                    <input type="number" value="0" min="0" placeholder="Quantity" />
                  </td>
                  <td class="subtotal"></td>
                  <td class="price">$<span>20.00</span></td>
                  <td class="action">
                    <button class="btn btn-remove">X</button>
                  </td>
                </tr>
                <td class="name">
                  <span>"Feelings" hoodie</span>
                </td>
                <td class="quantity">
                  <input type="number" value="0" min="0" placeholder="Quantity" />
                </td>
                <td class="subtotal"></td>
                <td class="price">$<span>25.00</span></td>
                <td class="action">
                  <button class="btn btn-remove">X</button>
                </td>
                </tr>
                <td class="name">
                  <span>"Feelings" vinyl</span>
                </td>
                <td class="quantity">
                  <input type="number" value="0" min="0" placeholder="Quantity" />
                </td>
                <td class="subtotal"></td>
                <td class="price">$<span>15.00</span></td>
                <td class="action">
                  <button class="btn btn-remove">X</button>
                </td>
                </tr>


                </tr>

              </tbody>

            </table>
            <p id="subtotal-value">Subtotal: $<span>0</span></p>
            <div class="checkout-btn">
              <button type="button" class="btn btn-primary">CHECKOUT</button>
            </div>
          </div>
        </div>

    </div>`