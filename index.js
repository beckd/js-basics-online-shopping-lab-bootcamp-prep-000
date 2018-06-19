var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var price = Math.floor((Math.random() * 100) + 1)
  var newItem = {[itemName]: price};
    cart.push(newItem);
    console.log(`${itemName} has been added to your cart.`);
  return cart
};
addToCart('bananas')
addToCart('pancake batter')
addToCart('apples')
addToCart('daikon')
addToCart('eggplant')
addToCart('carrots')
/*
function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  else {
    var myCart = "In your cart, you have "
      for (var i = 0, 1 = cart.length; i < 1; i++) {
        for (var myList in cart[i]) {
          myCart += '${myList} at $$ {cart[i][list]}'
          if(i!==cart.length-1) {
            myCart +=","
          }
          else {
            myCart += "."
          }
        }
      }
  }
  console.log(myCart)
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
*/
