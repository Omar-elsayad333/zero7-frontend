import { ComponentType } from 'react'
import { Routes } from 'routes/Routes';
import { Link } from 'react-router-dom';
import style from './register.module.css'
import useSignup from 'containers/useSignup';
import PrimaryInput from 'components/Inputs/PrimaryInput';
import PasswordInput from 'components/Inputs/PasswordInput';
import PrimaryButton from 'components/Buttons/PrimaryButton';
import SecondaryButton from 'components/Buttons/SecondaryButton';

// MUI
import Typography from '@mui/material/Typography';

const Register: ComponentType = () => {

    const { state, actions } = useSignup()

    return (
        <div className={`${style.container} grid`}>
            <form onSubmit={actions.handleSubmit} className={style.formContainer} >
                <Typography variant='h3' textAlign={'center'} fontWeight={700} color='primary'>
                    Sign Up for Zero7
                </Typography>
                {state.loading && <Typography variant='h4' color={'warrning'}>loading</Typography>}
                <div className={style.inputsContainer}>
                    <PrimaryInput 
                        type='text'
                        name='name' 
                        setValue={actions.handleChange}
                        placeholder='Enter your name'
                        value={state.fields.name.value}
                        error={state.fields.name.error}
                        helperText={state.fields.name.helperText}
                    />
                    <PrimaryInput 
                        type='email'
                        name='email'
                        setValue={actions.handleChange}
                        placeholder='Enter your email'
                        value={state.fields.email.value}
                        error={state.fields.email.error}
                        helperText={state.fields.email.helperText}
                    />
                    <PrimaryInput 
                        type='number'
                        name='phoneNumber'
                        setValue={actions.handleChange}
                        placeholder='Enter your phone number'
                        value={state.fields.phoneNumber.value}
                        error={state.fields.phoneNumber.error}
                        helperText={state.fields.phoneNumber.helperText}
                    />
                    <PasswordInput 
                        name='password'
                        setValue={actions.handleChange}
                        placeholder='Enter your password'
                        show={state.fields.password.show}
                        value={state.fields.password.value}
                        error={state.fields.password.error}
                        showHandler={actions.handleShowPass}
                        helperText={state.fields.password.helperText}
                    />
                    <PasswordInput 
                        name='confirmPassword'
                        setValue={actions.handleChange}
                        placeholder='Confirm password'
                        showHandler={actions.handleShowPass}
                        show={state.fields.confirmPassword.show}
                        value={state.fields.confirmPassword.value}
                        error={state.fields.confirmPassword.error}
                        helperText={state.fields.confirmPassword.helperText}
                    />
                </div>
                <div className={style.buttonsContainer}>    
                    <PrimaryButton
                        type='submit'
                        content='sign up'
                    />
                    <Link to={`/${Routes.login}`}>
                        <SecondaryButton
                            content='log in'
                        />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register;