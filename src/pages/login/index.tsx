import { ComponentType } from 'react'
import style from './login.module.css'
import { Routes } from 'routes/Routes'
import { colors } from 'styles/colors'
import { Link } from 'react-router-dom'
import useLogin from 'containers/useLogin'
import { withPublic } from 'routes/withRouts'
import Loading from 'components/Loading/Loading'
import PrimaryInput from 'components/Inputs/PrimaryInput'
import PasswordInput from 'components/Inputs/PasswordInput'
import PrimaryButton from 'components/Buttons/PrimaryButton'
import SecondaryButton from 'components/Buttons/SecondaryButton'

// MUI
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

const Login: ComponentType = () => {
  const { state, pageError, actions } = useLogin()

  return (
    <div className={`${style.container} grid`}>
      {state.loading && <Loading />}
      <form onSubmit={actions.handleSubmit} className={style.formContainer}>
        <Typography variant="h3" textAlign={'center'} fontWeight={700} color="primary">
          Log in for Zero7
        </Typography>
        <div className={style.inputsContainer}>
          <PrimaryInput
            type="text"
            name="email"
            setValue={actions.handleChange}
            placeholder="Enter your email or phone number"
            value={state.fields.email.value}
            error={state.fields.email.error}
            helperText={state.fields.email.helperText}
          />
          <PasswordInput
            name="password"
            setValue={actions.handleChange}
            placeholder="Enter your password"
            show={state.fields.password.show}
            value={state.fields.password.value}
            error={state.fields.password.error}
            showHandler={actions.handleShowPass}
            helperText={state.fields.password.helperText}
          />
          <div className={style.optionsContainer}>
            <Link to={'/'}>
              <Typography paddingLeft={'10px'} variant="h6" color={'secondary'}>
                Forget Password?
              </Typography>
            </Link>
            <div className={style.remeberMe}>
              <Checkbox
                onClick={actions.handleRemeberMe}
                checked={state.remeberMe.value}
                color="primary"
                sx={{
                  '.MuiSvgIcon-root': {
                    width: '20px',
                    height: '20px',
                    color: colors.primary.main,
                  },
                }}
              />
              <Typography color={'secondary'} variant="h6">
                Remember me
              </Typography>
            </div>
          </div>
        </div>
        <div className={style.buttonsContainer}>
          {pageError && (
            <Typography variant="h6" color={'error'} sx={{ flex: '100%', width: 'fit-content' }}>
              {pageError}
            </Typography>
          )}
          <PrimaryButton fullWidth type="submit" content="log in" />
          <Link to={`${Routes.register}`} style={{ width: '100%' }}>
            <SecondaryButton fullWidth content="sign up" />
          </Link>
        </div>
      </form>
    </div>
  )
}

export default withPublic(Login)
