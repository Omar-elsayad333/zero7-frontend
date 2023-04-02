import style from './login.module.css'
import { Routes } from 'routes/Routes'
import { Link } from 'react-router-dom'
import useLogin from 'containers/useLogin'
import PrimaryInput from 'components/Inputs/PrimaryInput'
import PasswordInput from 'components/Inputs/PasswordInput'
import PrimaryButton from 'components/Buttons/PrimaryButton'
import SecondaryButton from 'components/Buttons/SecondaryButton'

// MUI
import Typography from '@mui/material/Typography';

const Login: React.FC = () => {

    const { state, actions } = useLogin()

    return (
        <div className={`${style.container} grid`}>
            <form onSubmit={actions.handleSubmit} className={style.formContainer} >
                <Typography variant='h3' textAlign={'center'} fontWeight={700} color='primary'>
                    Login Up for Zero7
                </Typography>
                {state.loading && <Typography variant='h4' color={'warrning'}>loading</Typography>}
                <div className={style.inputsContainer}>
                    <PrimaryInput 
                        type='text'
                        name='email'
                        setValue={actions.handleChange}
                        placeholder='Enter your email'
                        value={state.fields.email.value}
                        error={state.fields.email.error}
                        helperText={state.fields.email.helperText}
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
                </div>
                <div className={style.buttonsContainer}>    
                    <PrimaryButton
                        type='submit'
                        content='log in'
                    />
                    <Link to={`/${Routes.register}`}>
                        <SecondaryButton
                            content='sign up'
                        />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;