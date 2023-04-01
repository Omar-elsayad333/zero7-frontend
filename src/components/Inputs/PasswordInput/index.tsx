import { style } from './style'
import { PasswordInputProps } from 'interfaces/inputInterface';
import InputHelperText from 'components/shared/InputHelperText';

// MUI
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordInput: React.FC<PasswordInputProps> = ({ name, placeholder, helperText, value, showHandler, show, setValue, error }) => {

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    return (
        <FormControl>
            <OutlinedInput
                autoComplete='off'
                name={name}
                error={error} 
                value={value}
                sx={style.root}
                placeholder={placeholder}
                type={show ? 'text' : 'password'}
                onChange={e => setValue(e)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => showHandler()}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {show ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {
                helperText &&
                <InputHelperText content={helperText} type='error' />
            }
        </FormControl>
    );
}

export default PasswordInput;