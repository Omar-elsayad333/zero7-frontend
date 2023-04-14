import style from './primaryButton.module.css'

type Props = {
    type?: any;
    content: string;
    onClick?: Function;
    fullWidth?: boolean;
}

const PrimaryButton: React.FC<Props> = ({ onClick = () => null, content, fullWidth, type = 'button' }) => {
    return (
        <button 
            onClick={() => onClick()}
            type={type}
            className={style.primaryButton} 
            style={{width: fullWidth ? '100%' : 'static'}}
        >
            {content}
        </button>
    )
}

export default PrimaryButton;