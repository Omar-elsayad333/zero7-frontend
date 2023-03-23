import style from './secondaryButton.module.css'

type Props = {
    content: string;
}

const SecondaryButton: React.FC<Props> = ({ content }) => {
    return (
        <button className={style.secondaryButton}>
            {content}
        </button>
    )
}

export default SecondaryButton;