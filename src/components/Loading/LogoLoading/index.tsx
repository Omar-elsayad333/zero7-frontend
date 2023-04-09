import style from './logoLoading.module.css'
import logo from 'assets/images/logo_gold.png'

const LogoLoading: React.FC = () => {
    return (
        <div className={style.container}>
            <img className={style.loader} src={logo} alt="zero7" width='100' />
        </div>
    );
}

export default LogoLoading;