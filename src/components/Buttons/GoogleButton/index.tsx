import style from './googleButton.module.css'
import GoogleIcon from '@mui/icons-material/Google'

type Props = {
  type?: any
  content: string
  clickEvent: any
  fullWidth?: boolean
}

const GoogleButton: React.FC<Props> = ({ clickEvent, content, fullWidth, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={clickEvent}
      className={style.googleButton}
      style={{ width: fullWidth ? '100%' : 'static' }}
    >
      <GoogleIcon />
      {content}
    </button>
  )
}

export default GoogleButton
