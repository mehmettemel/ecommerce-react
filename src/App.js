import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
          // console.log(snapShot.data())
          // this.setState(
          //   {
          //     currentUser: {
          //       id: snapShot.id,
          //       ...snapShot.data(),
          //     },
          //   },
          //   () => {
          //     // console.log(this.state)
          //   }
          // )
        })
      }
      setCurrentUser({ userAuth })
      // this.setState({ currentUser: userAuth })

      // createUserProfileDocument(userAuth)
      // this.setState({ currentUser: userAuth })
      // console.log(userAuth)
      // console.log(this.state.currentUser)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route path='/signIn-signUp' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
