import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
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

export default App
