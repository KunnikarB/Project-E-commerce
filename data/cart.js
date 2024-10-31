export let cart = [
  {
    productId: 1,
    quantity: 0,
  },
  {
    productId: 2,
    quantity: 0,
  },

];

// Add to cart functionality 
 export function addToCart(productId) {
  let productInCart;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      productInCart = cartItem;
    }
  });

  // If the item is already in the cart, increase the quantity
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

  const quantity = Number(quantitySelector.value);

  if (productInCart) {
    productInCart.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}

// Remove from cart functionality
export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  }); 
  cart = newCart;
}

// Update quantity functionality