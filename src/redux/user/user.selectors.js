import { createSelector } from 'reselect'

const selectUser = (state) => state.user
const selectCart = (state) => state.cart
export const selectCurrentUser = createSelector(
  //doesnt matter array  or not
  selectUser,
  selectCart,
  (user) => user.currentUser
)
