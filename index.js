var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1)
    cart.push(new Object({[itemName]:itemPrice}))
  console.log(`${itemName} has been added to your cart.`);
  return cart
};

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
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
