import style from './signUp.module.css'
import PrimaryInput from 'components/Inputs/PrimaryInput';
import PasswordInput from 'components/Inputs/PasswordInput';
import PrimaryButton from 'components/Buttons/PrimaryButton';
import SecondaryButton from 'components/Buttons/SecondaryButton';

// MUI

const Register = () => {
    return (
        <form action="" className={`${style.container} grid`} >
            <PrimaryInput 
                value=''
                type='email'
                error={false}
                helperText=''
                setValue={() => {}}
                placeholder='Enter your email...'
            />
            <PasswordInput 
                value=''
                show={false}
                error={false}
                helperText=''
                setValue={() => {}}
                showHandler={() => {}}
                placeholder='Enter your email...'
            />
            <div className={style.buttonsContainer}>    
                <PrimaryButton
                    content='sign up'
                />
                <SecondaryButton
                    content='log in'
                />
            </div>
        </form>
    )
}

export default Register;