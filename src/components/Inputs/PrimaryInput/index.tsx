import { colors } from 'styles/colors'
import style from './primaryInput.module.css'
import { InputProps } from 'interfaces/inputInterface'
import InputHelperText from 'components/shared/InputHelperText';

const PrimaryInput: React.FC<InputProps> = ({ name, type, value, error, placeholder, setValue, helperText }) => {
    return (
        <div className={style.container}>
            <input
                name={name}
                type={type}
                value={value} 
                placeholder={placeholder}
                className={style.primrayInput} 
                onChange={(e) => setValue(e)}
                style={{borderColor: error ? colors.error.main : colors.primary.main}}
            />
            {
                helperText &&
                <InputHelperText content={helperText} type='error' />
            }
        </div>
    );
}

export default PrimaryInput;