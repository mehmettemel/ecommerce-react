import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { connect } from 'react-redux'
const Header = ({ currentUser }) => {
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
            <a href='#'>Sign Out</a>
          </div>
        ) : (
          <Link className='option' to='/signIn-signUp'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)
