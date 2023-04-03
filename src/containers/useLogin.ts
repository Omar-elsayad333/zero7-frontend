import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "contexts/userContext";
import { loginUser, storeUser } from "handlers/userHandlers";
import { loginReducer } from "reducers/loginReducer";
import { LoginState, loginInitialValues } from "interfaces/loginInterface";

const useLogin = () => {

    let navigate = useNavigate();
    const { getUser, userDispatch } = useUser()
    const [pageError, setPageError] = useState<any>('')
    const [state, dispatch] = useReducer(loginReducer, loginInitialValues)

    // Controll inputs
    const handleChange = (event: any) => {
        // const name: keyof LoginState['fields'] = event.target.name
        dispatch({
            type: 'field',
            field: event.target.name,
            value: event.target.value
        })
    }

    // Show and hide password
    const handleShowPass = (event: any) => {
        dispatch({
            type: 'showPass',
            field: event.currentTarget.name
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
        Object.entries(state.fields).forEach(([key,value]) => {
            if(value.length === 0) {
                dispatch({
                    type: "error",
                    errorField: key as keyof LoginState['fields'],
                    error: 'This field must be filed'
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
            password: state.fields.password.value
        }

        return data
    }

    // Submit data to api
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(validator()) {
            try {
                dispatch({type: 'loading'})
                setPageError('')
                const data = collector()
                const userData = await loginUser(data)
                userDispatch({
                    type: 'setTokens',
                    payload: {
                        accessToken: userData.accessToken,
                        refreshToken: userData.refreshToken,
                        accessTokenExpireAt: userData.accessTokenExpireAt,
                        refreshTokenExpireAt: userData.refreshTokenExpireAt
                    }
                })
                storeUser(userData, state.remeberMe.value)
                await getUser(userData.accessToken)
                navigate(-1)
            } 
            catch (err: any) {
                console.log(err.message)
                setPageError(err.message)
            }
            finally {
                dispatch({type: 'loading'})
            }
        }
    }

    return (
        {
            state,
            pageError,
            actions: {
                handleChange,
                handleShowPass,
                handleRemeberMe,
                handleSubmit
            }
        }
    );
}

export default useLogin;