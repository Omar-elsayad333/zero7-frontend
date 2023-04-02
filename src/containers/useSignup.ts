import { useReducer } from "react";
import { registerUser } from "handlers/userHandlers";
import { registerReducer } from "reducers/registerReducer";
import { SignUpState, registerInitialState } from 'interfaces/registerInterface'

const useSignup = () => {

    const [state, dispatch] = useReducer(registerReducer, registerInitialState);

    // Controll inputs
    const handleChange = (event: any) => {
        const name: keyof SignUpState['fields'] = event.target.name
        dispatch({
            type: 'field',
            field: name,
            value: event.target.value
        });
    };

    // Show and hide password
    const handleShowPass = (event: any) => {
        const name: keyof SignUpState['fields'] = event.currentTarget.name
        dispatch({
            type: 'showPass',
            field: name,
        });
    };

    // Validate data before submit it
    const validator = () => {
        let validatorState: boolean = true

        // Check for the inputs
        Object.entries(state.fields).forEach(([key,value]) => {
            if(value.length === 0) {
                dispatch({
                    type: "error",
                    errorField: key as keyof SignUpState['fields'],
                    error: 'This field must be filed'
                })
                validatorState = false
            }
            if(key === 'password' && value.length < 8) {
                dispatch({
                    type: "error",
                    errorField: key as keyof SignUpState['fields'],
                    error: 'Password must be at least 8 characters'
                })
                validatorState = false
            }
        })

        // Check for that confirm password matches password
        if(state.fields.confirmPassword.value !== state.fields.password.value) {
            dispatch({
                type: "error",
                errorField: 'confirmPassword',
                error: 'passwords do not match'
            })
            validatorState = false
        }
        return validatorState
    }

    // Collect data to submit it
    const collector = () => {
        const data = {
            name: state.fields.name.value,
            email: state.fields.email.value.trim(),
            phoneNumber: state.fields.phoneNumber.value.trim(),
            password: state.fields.password.value.trim(),
            confirmPassword: state.fields.confirmPassword.value.trim()
        }
        return data
    }

    // Submit data to api
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(validator()) {
            try {
                dispatch({type: 'submit'})
                const data = collector()
                await registerUser(data)
            }
            catch (err) {
                
            }
            finally {
                dispatch({type: 'success'})
            }
        }
    };

    return (
        {
            state,
            actions: {
                handleChange,
                handleSubmit,
                handleShowPass
            }
        }
    );
}

export default useSignup;