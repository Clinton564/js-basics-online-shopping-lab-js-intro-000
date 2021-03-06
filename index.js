var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
cart.push({itemName: item, itemPrice: Math.floor(Math.random() * Math.floor(100))})
return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length < 1) {
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if(cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    var message="In your cart, you have "
    for(let i = 0; i < cart.length; i++) {
      if(i === cart.length-1){
        message+=`and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else {
        message+=`${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
  }
return message
}

function total() {
  // write your code here
  let total =0;
  for(let i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName==item) {
      cart.splice(i, 1)
      break
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    let bill=total()
    cart.splice(0)
    return `Your total cost is $${bill}, which will be charged to the card ${cardNumber}.`
  }
}
