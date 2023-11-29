import axios from 'axios'
import { useState, useEffect } from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'

const Test = () => {
  const [user, setUser] = useState<any>([])
  const [profile, setProfile] = useState<any>([])

  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => setUser(codeResponse),
    onError: (error: any) => console.log('Login Failed:', error),
  })

  useEffect(() => {
    if (user) {
      console.log(user)
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setProfile(res.data)
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }
  }, [user])

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout()
    setProfile(null)
  }

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  )
}

export default Test

// email: 'omarelsayad313@gmail.com'
// family_name: 'Elsayad'
// given_name: 'Omar'
// id: '109974485051537660429'
// locale: 'en-GB'
// name: 'Omar Elsayad'
// picture: 'https://lh3.googleusercontent.com/a/ACg8ocIK9au01W_PzY4UGInS23ynOWGfcNT_ldiC2M7TiC8tQQ=s96-c'
// verified_email: true
