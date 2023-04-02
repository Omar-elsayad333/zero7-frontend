import style from './secondaryButton.module.css'

type Props = {
    type?: any;
    content: string;
}

const SecondaryButton: React.FC<Props> = ({ content, type = 'button' }) => {
    return (
        <button className={style.secondaryButton} type={type}>
            {content}
        </button>
    )
}

export default SecondaryButton;