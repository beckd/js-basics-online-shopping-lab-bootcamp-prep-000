var cart = [];

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
  if (!cart.length) {
    return "Your cart is currently empty."
  }
  const stuff = []
  for (let i = 0, l = cart.length; i < l; i++) {
    stuff.push(`${i + 1}. ${cart[i]}`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  var cardNumber = parseInt("123456789");
}
