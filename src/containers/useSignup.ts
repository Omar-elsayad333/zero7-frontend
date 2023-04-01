import axiosInstance from "config/axios";
import Urls from "constants/urls";
import { useReducer } from "react";
import { registerReducer } from "reducers/registerReducer";
import { registerInitialState } from 'interfaces/registerInterface'

const useSignup = () => {

    const [state, dispatch] = useReducer(registerReducer, registerInitialState);

    const handleChange = (event: any) => {
        dispatch({
            type: 'field',
            field: event.target.name,
            value: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        dispatch({
            type: 'submit'
        });
    
        try {
            const response = await axiosInstance.post(Urls.register, {
                name: state.fields.name.value,
                email: state.fields.email,
                password: state.fields.password,
                confirmPassword: state.fields.confirmPassword
            });
            dispatch({
                type: 'success'
            });
            console.log(response)
        } catch (error: any) {
            dispatch({
                type: 'error',
                error: error.message
            });
        }
    };

    return (
        {
            state,
            handleChange,
            handleSubmit
        }
    );
}
 
export default useSignup;