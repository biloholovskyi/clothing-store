import SignUpForm from '../../components/signUpForm/signUpForm.component'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.util'

const SignIn = () => {
  const googleAuthLog = async () => {
    const response = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(response)
  }

  return (
    <div>
      <h2>Sing In</h2>
      <button onClick={googleAuthLog}>Sign in</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
