import { InputHelperTextProps } from 'interfaces/inputsInterface'
import { colors } from 'styles/colors'
import { IStyle } from 'styles/IStyle'

const InputHelperText: React.FC<InputHelperTextProps> = ({ content, type }) => {

    const style: IStyle = {
        color: type === 'error' ? colors.error.main : colors.warning.main
    }
    
    return (
        <label style={style}>
            {content}
        </label>
    );
}

export default InputHelperText;