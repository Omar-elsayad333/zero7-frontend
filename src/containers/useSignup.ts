import Urls from 'constants/urls'
import { Routes } from 'routes/Routes'
import { axiosInstance } from 'config/axios'
import { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'contexts/userContext'
import { registerReducer } from 'reducers/registerReducer'
import { registerUser, storeUser } from 'handlers/userHandlers'
import { SignUpState, registerInitialState } from 'interfaces/registerInterface'
import { useGoogleLogin } from '@react-oauth/google'

const useSignup = () => {
  const navigate = useNavigate()
  const { userDispatch, getUser } = useUser()
  const [pageError, setPageError] = useState<any>('')
  const [state, dispatch] = useReducer(registerReducer, registerInitialState)

  // Controll inputs
  const handleChange = (event: any) => {
    const name: keyof SignUpState['fields'] = event.target.name
    dispatch({
      type: 'field',
      field: name,
      value: event.target.value,
    })
  }

  // Show and hide password
  const handleShowPass = (event: any) => {
    const name: keyof SignUpState['fields'] = event.currentTarget.name
    dispatch({
      type: 'showPass',
      field: name,
    })
  }

  // Validate data before submit it
  const validator = () => {
    let validatorState: boolean = true

    // Check for the inputs
    Object.entries(state.fields).forEach(([key, value]) => {
      if (value.length === 0) {
        dispatch({
          type: 'error',
          errorField: key as keyof SignUpState['fields'],
          error: 'This field must be filed',
        })
        validatorState = false
      }
      if (key === 'password' && value.length < 8) {
        dispatch({
          type: 'error',
          errorField: key as keyof SignUpState['fields'],
          error: 'Password must be at least 8 characters',
        })
        validatorState = false
      }
    })

    // Check for that confirm password matches password
    if (state.fields.confirmPassword.value !== state.fields.password.value) {
      dispatch({
        type: 'error',
        errorField: 'confirmPassword',
        error: 'passwords do not match',
      })
      validatorState = false
    }
    return validatorState
  }

  // Collect data to submit it
  const collector = () => {
    const encodedPhoneNumber = encodeURIComponent('+' + state.fields.phoneNumber.value)

    const data = {
      name: state.fields.name.value,
      email: state.fields.email.value.trim(),
      phoneNumber: encodedPhoneNumber.trim(),
      password: state.fields.password.value.trim(),
      confirmPassword: state.fields.confirmPassword.value.trim(),
    }

    return data
  }

  // Submit data to api
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validator()) {
      try {
        dispatch({ type: 'submit' })
        const data = collector()
        const res = await registerUser(data)
        userDispatch({
          type: 'setTokens',
          payload: {
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
            accessTokenExpireAt: res.accessTokenExpireAt,
            refreshTokenExpireAt: res.refreshTokenExpireAt,
          },
        })
        storeUser({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
          accessTokenExpireAt: res.accessTokenExpireAt,
          refreshTokenExpireAt: res.refreshTokenExpireAt,
        })
        await getUser(res.accessToken)
        navigate(Routes.home)
      } catch (err) {
      } finally {
        dispatch({ type: 'success' })
      }
    }
  }

  const registerWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse: any) => callGoogle(codeResponse),
    onError: (error: any) => console.log('Login Failed:', error),
  })

  // Call google api to get user data
  const callGoogle = async (googleResponse: any) => {
    if (googleResponse) {
      try {
        dispatch({ type: 'submit' })
        setPageError('')
        const res = await axiosInstance.get(
          `${Urls.googleApi}?access_token=${googleResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleResponse.access_token}`,
              Accept: 'application/json',
            },
          },
        )
        socialRegisterSubmit(res)
      } catch (error) {
        setPageError('Failed to sign up with google')
        console.log(error)
        dispatch({ type: 'submit' })
      }
    }
  }

  // Call backend api to register user
  const socialRegisterSubmit = async (userData: any) => {
    try {
      console.log(userData)
      // const data = {
      //   firstName: userData,
      //   lastName: userData,
      //   email: userData,
      //   socialToken: userData,
      // }

      // const res = await postHandler(Urls.socialRegister, data)
      // userDispatch({
      //   type: 'setTokens',
      //   payload: {
      //     accessToken: res.data.accessToken,
      //     refreshToken: res.data.refreshToken,
      //     accessTokenExpireAt: res.data.accessTokenExpireAt,
      //     refreshTokenExpireAt: res.data.refreshTokenExpireAt,
      //   },
      // })
      // storeUser(res.data, state.remeberMe.value)
      // await getUser(res.data.accessToken)
      // navigate(Routes.home)
    } catch (error) {
      console.log(error)
      setPageError('Failed to sign up with google')
    } finally {
      dispatch({ type: 'submit' })
    }
  }

  return {
    state,
    pageError,
    actions: {
      handleChange,
      handleSubmit,
      handleShowPass,
      registerWithGoogle,
    },
  }
}

export default useSignup
