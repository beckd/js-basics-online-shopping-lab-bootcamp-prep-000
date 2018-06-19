var cart = [itemName];

const stuff = [
  {itemName: "bananas", itemPrice: Math.floor((Math.random() * 100) + 1)},
  {itemName: "pancake batter", itemPrice: Math.floor((Math.random() * 100) + 1)},
  {itemName: "eggs", itemPrice: Math.floor((Math.random() * 100) + 1)},
];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push(itemName)
  return `${itemName} has been added to your cart.`
};

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
