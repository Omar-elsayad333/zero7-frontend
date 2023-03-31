import { colors } from 'styles/colors'
import style from './primaryInput.module.css'
import { InputProps } from 'interfaces/inputInterface'

// MUI
import Typography from '@mui/material/Typography';

const PrimaryInput: React.FC<InputProps> = ({ name, type, value, error, placeholder, setValue, helperText }) => {
    return (
        <div className={style.container}>
            <input
                name={name}
                type={type}
                value={value} 
                placeholder={placeholder}
                className={style.primrayInput} 
                onChange={(e) => setValue(e.target.value)}
                style={{borderColor: error ? colors.error.main : colors.primary.main}}
            />
            <label className={style.helperText} htmlFor="">
                <Typography 
                    variant={'h6'} 
                    color={'error'} 
                    fontWeight={700} 
                    textTransform={'capitalize'}
                > 
                    {helperText}
                </Typography>
            </label>
        </div>
    );
}

export default PrimaryInput;