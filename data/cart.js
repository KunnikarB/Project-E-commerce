export const cart = [{
  productId: 'woman-01',
  quantity: 2,

}, 
{
  productId: 'woman-02',
  quantity: 1,
}
];

// Add to cart functionality 
 export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}
