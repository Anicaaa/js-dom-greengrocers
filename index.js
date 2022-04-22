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
}
