export const addItemToCart = (cartItems, newCartItem) => {
  const existCartItem = cartItems.find(
    cartItem => cartItem.id === newCartItem.id
  );

  if (existCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { cartItem }
    );
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
};
