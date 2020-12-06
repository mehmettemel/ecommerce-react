export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : //after removing {} from :{cartItem} we can add multiple product.?
          cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
