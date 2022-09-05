import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB7pUMS-7wVYDBXfix-7qRZXN9F6fya9W0',
  authDomain: 'shop-b93ff.firebaseapp.com',
  projectId: 'shop-b93ff',
  storageBucket: 'shop-b93ff.appspot.com',
  messagingSenderId: '646163118637',
  appId: '1:646163118637:web:40eb41dad8f58759fc56a4',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.user.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth.user
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (e) {
      console.log('error creating the user', e.message)
    }
  }

  return userDocRef
}