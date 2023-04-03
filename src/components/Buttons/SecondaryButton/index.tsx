import style from './secondaryButton.module.css'

type Props = {
    type?: any;
    content: string;
    fullWidth?: boolean;
}

const SecondaryButton: React.FC<Props> = ({ content, fullWidth, type = 'button' }) => {
    return (
        <button 
            type={type}
            className={style.secondaryButton} 
            style={{width: fullWidth ? '100%' : 'static'}}
        >
            {content}
        </button>
    )
}

export default SecondaryButton;