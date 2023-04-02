import style from './primaryButton.module.css'

type Props = {
    type?: any;
    content: string;
}

const PrimaryButton: React.FC<Props> = ({ content, type = 'button' }) => {
    return (
        <button className={style.primaryButton} type={type}>
            {content}
        </button>
    )
}

export default PrimaryButton;