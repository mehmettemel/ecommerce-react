import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  //we didnt use payload in reducer so we dont need to define it in here
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
})
