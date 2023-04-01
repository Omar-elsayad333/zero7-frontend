import style from './signUp.module.css'
import PrimaryInput from 'components/Inputs/PrimaryInput';
import PasswordInput from 'components/Inputs/PasswordInput';
import PrimaryButton from 'components/Buttons/PrimaryButton';
import SecondaryButton from 'components/Buttons/SecondaryButton';
import { Typography } from '@mui/material';
import useSignup from 'containers/useSignup';

// MUI

const Register = () => {

    const {
        state,
        handleChange,
        handleSubmit
    } = useSignup()

    return (
        <div className={`${style.container} grid`}>
            <form onSubmit={handleSubmit} className={style.formContainer} >
                <Typography variant='h3' fontWeight={700} color='primary'>
                    Sign Up for Zero7
                </Typography>
                <div className={style.inputsContainer}>
                    <PrimaryInput 
                        type='text'
                        name='name'
                        setValue={handleChange}
                        placeholder='Enter your name'
                        value={state.fields.name.value}
                        error={state.fields.name.error}
                        helperText={state.fields.name.helperText}
                    />
                    <PrimaryInput 
                        type='email'
                        name='email'
                        setValue={handleChange}
                        placeholder='Enter your email'
                        value={state.fields.email.value}
                        error={state.fields.email.error}
                        helperText={state.fields.email.helperText}
                    />
                    <PasswordInput 
                        name='password'
                        showHandler={() => {}}
                        setValue={handleChange}
                        placeholder='Enter your password'
                        show={state.fields.password.show}
                        value={state.fields.password.value}
                        error={state.fields.password.error}
                        helperText={state.fields.password.helperText}
                    />
                    <PasswordInput 
                        name='confirmPassword'
                        showHandler={() => {}}
                        setValue={handleChange}
                        placeholder='Confirm password'
                        show={state.fields.confirmPassword.show}
                        value={state.fields.confirmPassword.value}
                        error={state.fields.confirmPassword.error}
                        helperText={state.fields.confirmPassword.helperText}
                    />
                </div>
                <div className={style.buttonsContainer}>    
                    <PrimaryButton
                        content='sign up'
                    />
                    <SecondaryButton
                        content='log in'
                    />
                </div>
            </form>
        </div>
    )
}

export default Register;