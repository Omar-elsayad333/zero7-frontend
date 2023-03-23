import style from './primaryButton.module.css'

type Props = {
    content: string;
}

const PrimaryButton: React.FC<Props> = ({ content }) => {
    return (
        <button className={style.primaryButton}>
            {content}
        </button>
    )
}

export default PrimaryButton;