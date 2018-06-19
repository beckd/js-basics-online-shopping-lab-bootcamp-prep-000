var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getCart(){
  return cart;
}

function addToCart(itemName){
  var price = Math.floor(Math.random() * 100)
  cart.push({[itemName]: price})
  console.log("${itemName} + has been added to your cart.")
  return cart;
}
addToCart('bananas')
addToCart('pancake batter')
addToCart('apples')
addToCart('daikon')
addToCart('eggplant')
addToCart('carrots')
addToCart('ice cream')
