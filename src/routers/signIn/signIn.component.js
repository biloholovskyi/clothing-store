import { signInWithGooglePopup } from '../../utils/firebase/firebase.util'

const SignIn = () => {
  const googleAuthLog = async () => {
    const response = await signInWithGooglePopup()
    console.log(response)
  }

  return (
    <div>
      <h2>Sing In</h2>
      <button onClick={googleAuthLog}>Sign in</button>
    </div>
  )
}

export default SignIn
