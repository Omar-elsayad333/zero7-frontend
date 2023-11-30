import { useReducer, useState } from 'react'
import { Routes } from 'routes/Routes'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'contexts/userContext'
import { loginReducer } from 'reducers/loginReducer'
import { loginUser, storeUser } from 'handlers/userHandlers'
import { useGoogleLogin } from '@react-oauth/google'
import { LoginState, loginInitialValues } from 'interfaces/loginInterface'
import { axiosInstance } from 'config/axios'
import Urls from 'constants/urls'
import { postHandler } from 'handlers/requestHandlers'

const useLogin = () => {
  let navigate = useNavigate()
  const { getUser, userDispatch } = useUser()
  const [pageError, setPageError] = useState<any>('')
  const [state, dispatch] = useReducer(loginReducer, loginInitialValues)

  // Controll inputs
  const handleChange = (event: any) => {
    // const name: keyof LoginState['fields'] = event.target.name
    dispatch({
      type: 'field',
      field: event.target.name,
      value: event.target.value,
    })
  }

  // Show and hide password
  const handleShowPass = (event: any) => {
    dispatch({
      type: 'showPass',
      field: event.currentTarget.name,
    })
  }

  // Handler remeber me state
  const handleRemeberMe = () => {
    dispatch({ type: 'remeberMe' })
  }

  // Validate data before submit it
  const validator = () => {
    let validatorState = true

    // Check for the inputs
    Object.entries(state.fields).forEach(([key, value]) => {
      if (value.length === 0) {
        dispatch({
          type: 'error',
          errorField: key as keyof LoginState['fields'],
          error: 'This field must be filed',
        })
        validatorState = false
      }
    })

    return validatorState
  }

  // Collect data to submit it
  const collector = () => {
    const data = {
      email: state.fields.email.value,
      password: state.fields.password.value,
    }

    return data
  }

  // Submit data to api
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validator()) {
      try {
        dispatch({ type: 'loading' })
        setPageError('')
        const data = collector()
        const userData = await loginUser(data)
        userDispatch({
          type: 'setTokens',
          payload: {
            accessToken: userData.accessToken,
            refreshToken: userData.refreshToken,
            accessTokenExpireAt: userData.accessTokenExpireAt,
            refreshTokenExpireAt: userData.refreshTokenExpireAt,
          },
        })
        storeUser(userData, state.remeberMe.value)
        await getUser(userData.accessToken)
        navigate(Routes.home)
      } catch (err: any) {
        console.log(err.message)
        setPageError(err.message)
      } finally {
        dispatch({ type: 'loading' })
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
        dispatch({ type: 'loading' })
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
        const token = googleResponse.access_token
        socialRegisterSubmit(res.data, token)
      } catch (error) {
        setPageError('Failed to login with google')
        console.log(error)
        dispatch({ type: 'loading' })
      }
    }
  }

  // Call backend api to register user
  const socialRegisterSubmit = async (userData: any, token: string) => {
    try {
      const data = {
        firstName: userData.given_name,
        lastName: userData.family_name,
        email: userData.email,
        socialToken: token,
      }

      const res = await postHandler(Urls.socialRegister, data)
      userDispatch({
        type: 'setTokens',
        payload: {
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          accessTokenExpireAt: res.data.accessTokenExpireAt,
          refreshTokenExpireAt: res.data.refreshTokenExpireAt,
        },
      })
      storeUser(res.data, state.remeberMe.value)
      await getUser(res.data.accessToken)
      navigate(Routes.home)
    } catch (error) {
      console.log(error)
      setPageError('Failed to login with google')
    } finally {
      dispatch({ type: 'loading' })
    }
  }

  return {
    state,
    pageError,
    actions: {
      handleChange,
      handleShowPass,
      handleRemeberMe,
      handleSubmit,
      registerWithGoogle,
    },
  }
}

export default useLogin
