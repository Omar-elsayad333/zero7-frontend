import { useReducer } from "react";
import { loginUser } from "handlers/userHandlers";
import { loginReducer } from "reducers/loginReducer";
import { LoginState, loginInitialValues } from "interfaces/loginInterface";

const useLogin = () => {

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
                // dispatch({type: 'submit'})
                const data = collector()
                await loginUser(data)
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    return (
        {
            state,
            actions: {
                handleChange,
                handleShowPass,
                handleSubmit
            }
        }
    );
}

export default useLogin;