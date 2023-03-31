import { InputHelperTextProps } from 'interfaces/inputInterface'
import { colors } from 'styles/colors'
import { IStyle } from 'styles/IStyle'

const InputHelperText: React.FC<InputHelperTextProps> = ({ content, type }) => {

    const style: IStyle = {
        color: () => {
            if(type === 'error') {
                return colors.error.main
            } else if(type === 'warrning') {
                return colors.warning.main
            } else {
                return colors.info.main
            }
        }
    }
    return (
        <label style={style}>
            {content}
        </label>
    );
}

export default InputHelperText;