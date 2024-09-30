// get elements
const products = document.querySelectorAll('.product-item');
const cartList = document.querySelector('.cart ul');
const total = document.querySelector('.total');
const checkoutButton = document.querySelector('.checkout');

// initialize cart
let cart = [];

// add event listeners to products
products.forEach(product => {
  const addButton = product.querySelector('.add-to-cart-button');
  addButton.addEventListener('click', () => {
    addToCart(product);
  });
});

// add item to cart
function addToCart(product) {
  // get product details
  const name = product.querySelector('h2').innerText;
  const price = parseFloat(product.querySelector('p').innerText.slice(7));
  
  // check if item is already in cart
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  
  // update cart UI
  updateCart();
}

// update cart UI
function updateCart() {
  // clear existing cart
  cartList.innerHTML = '';
  
  // populate cart with items
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} <span>$${item.price.toFixed(2)} x ${item.quantity}</span>`;
    cartList.appendChild(li);
  });
  
  // update total
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  total.innerText = `$${cartTotal.toFixed(2)}`;
}

// checkout
checkoutButton.addEventListener('click', () => {
  // send cart data to server for processing
  console.log(cart);
  alert('Checkout completed!');
  
  // clear cart
  cart = [];
  updateCart();
});
