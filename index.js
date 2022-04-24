/* ## Plan
- Iterate each state items
- createElemens ('li'), ('div'), ('img'), ('button'). Available in the store-item.html
- append each element created with store--item-list
- createElemens ('li'), ('img'), ('p'), ('button') ('span'), ('button'). Available in the cart-item.html
- append each element created with cart--item-list
- use addeventListener for the + and - buttons
- if statement item === 0 then .remove() item from cart
- function for the sum of item price added in cart - items.price */

const stateItemsUl = document.querySelector(".store--item-list");
for (let i = 0; i < state.items.length; i++) {
  const products = state.items[i];
  console.log(products);

  // ---- Store ---- //
  //create and add an li to ul
  const storeLi = document.createElement("li");
  stateItemsUl.append(storeLi);

  //create and add div to ul
  const storeDiv = document.createElement("div");
  storeDiv.setAttribute("class", "store--item-icon");
  storeLi.append(storeDiv);

  //create and add img to ul
  const storeImg = document.createElement("img");
  storeImg.src = `assets/icons/${products.id}.svg`;
  storeDiv.append(storeImg);

  //create and add img to ul
  const storeBtn = document.createElement("button");
  storeBtn.innerHTML = "Add to cart";
  storeLi.append(storeBtn);

  storeLi.addEventListener("click", function () {
    // ---- Cart ---- //
    const cartUl = document.querySelector(".cart--item-list");
    //create and add an li to cart ul
    const cartLi = document.createElement("li");
    cartUl.append(cartLi);

    //create and add img to cart ul
    const cartImg = document.createElement("img");
    cartImg.setAttribute("class", "cart--item-icon");
    cartImg.src = `assets/icons/${products.id}.svg`;
    cartUl.append(cartImg);

    // create p tag for the product name in cart
    const productName = document.createElement("p");
    productName.innerText = products.name;
    cartUl.append(productName);

    //create remove button
    const cartRemoveBtn = document.createElement("button");
    cartRemoveBtn.setAttribute("class", "remove-btn");
    cartRemoveBtn.innerHTML = "-";
    cartUl.append(cartRemoveBtn);

    //create span for the number
    const cartNum = document.createElement("span");
    cartNum.setAttribute("class", "quantity-text");
    cartNum.innerHTML = "1";
    cartUl.append(cartNum);

    //create add button
    const cartAddBtn = document.createElement("button");
    cartAddBtn.setAttribute("class", "add-btn");
    cartAddBtn.innerHTML = "+";
    cartUl.append(cartAddBtn);
  });
}
/* <li>
  <img
    class="cart--item-icon"
    src="assets/icons/001-beetroot.svg"
    alt="beetroot"
  />
  <p>beetroot</p>
  <button class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">1</span>
  <button class="quantity-btn add-btn center">+</button>
</li> */

//
