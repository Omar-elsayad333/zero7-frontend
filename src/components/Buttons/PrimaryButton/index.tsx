import style from './primaryButton.module.css'

type Props = {
    type?: any;
    content: string;
    fullWidth?: boolean;
}

const PrimaryButton: React.FC<Props> = ({ content, fullWidth, type = 'button' }) => {
    return (
        <button 
            type={type}
            className={style.primaryButton} 
            style={{width: fullWidth ? '100%' : 'static'}}
        >
            {content}
        </button>
    )
}

export default PrimaryButton;