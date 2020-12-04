//if we import like this we can import others just writing their name
import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyACi3aWMjmP9Gl7EkJT_ZbJ4CXsdJEwjdo',
  authDomain: 'ecommerce-clothing-2cd85.firebaseapp.com',
  projectId: 'ecommerce-clothing-2cd85',
  storageBucket: 'ecommerce-clothing-2cd85.appspot.com',
  messagingSenderId: '165094273362',
  appId: '1:165094273362:web:a099c6ee990a91cc308a8b',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
