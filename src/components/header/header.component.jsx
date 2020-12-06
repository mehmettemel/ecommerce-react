import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className='option' to='/signIn-signUp'>
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}
//its just another way to doing that
const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser,
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

// const mapStateToProps = (state) => ({
//   // currentUser: state.user.currentUser,
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// })

export default connect(mapStateToProps)(Header)
