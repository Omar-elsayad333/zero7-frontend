import { colors } from 'styles/colors'
import style from './navbar.module.css'
import logo from 'assets/images/logo.png'

// MUI
import Typography from '@mui/material/Typography'

const Navbar: React.FC = () => {
    return (
        <div className={`${style.container} grid`}>
            <img data-aos="fade-right" data-aos-duration="1000" src={logo} width={100} alt='Zero7' /> 
            <ul className={style.menuList} data-aos="fade-left" data-aos-duration="1000">
                <li className={style.link}>
                    <Typography variant={'h4'} color='secondary' fontWeight={700} >
                        Home
                    </Typography>
                </li>
                <li className={style.link}>
                    <Typography variant={'h4'} color='secondary' fontWeight={700} >
                        Shop
                    </Typography>
                </li>
                <li className={style.link}>
                    <Typography variant={'h4'} color='secondary' fontWeight={700} >
                        About Us
                    </Typography>
                </li>
                <li className={style.link}>
                    <Typography variant={'h4'} color='secondary' fontWeight={700} >
                        Cart
                    </Typography>
                </li>
                <li className={style.link}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill={colors.secondary.main} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5.02765C9.64418 2.91689 6.02125 2.99347 3.75736 5.25736C1.41421 7.60051 1.41421 11.3995 3.75736 13.7426L10.5858 20.5711C11.3668 21.3521 12.6332 21.3521 13.4142 20.5711L20.2426 13.7426C22.5858 11.3995 22.5858 7.60051 20.2426 5.25736C17.9787 2.99347 14.3558 2.91689 12 5.02765ZM10.8284 6.67157L11.2929 7.13604C11.6834 7.52656 12.3166 7.52656 12.7071 7.13604L13.1716 6.67157C14.7337 5.10948 17.2663 5.10948 18.8284 6.67157C20.3905 8.23367 20.3905 10.7663 18.8284 12.3284L12 19.1569L5.17157 12.3284C3.60948 10.7663 3.60948 8.23367 5.17157 6.67157C6.73367 5.10948 9.26633 5.10948 10.8284 6.67157Z" fill="inhret"/>
                    </svg>
                </li>
                <li className={style.link}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill={colors.secondary.main} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12.75C11.2583 12.75 10.5333 12.5301 9.91661 12.118C9.29993 11.706 8.81928 11.1203 8.53545 10.4351C8.25163 9.74984 8.17736 8.99584 8.32206 8.26841C8.46675 7.54098 8.8239 6.8728 9.34835 6.34835C9.8728 5.8239 10.541 5.46675 11.2684 5.32206C11.9958 5.17736 12.7498 5.25162 13.4351 5.53545C14.1203 5.81928 14.706 6.29993 15.118 6.91661C15.5301 7.5333 15.75 8.25832 15.75 9C15.75 9.99456 15.3549 10.9484 14.6517 11.6517C13.9484 12.3549 12.9946 12.75 12 12.75ZM12 6.75C11.555 6.75 11.12 6.88196 10.75 7.12919C10.38 7.37643 10.0916 7.72783 9.92127 8.13896C9.75098 8.5501 9.70642 9.0025 9.79323 9.43895C9.88005 9.87541 10.0943 10.2763 10.409 10.591C10.7237 10.9057 11.1246 11.12 11.561 11.2068C11.9975 11.2936 12.4499 11.249 12.861 11.0787C13.2722 10.9084 13.6236 10.62 13.8708 10.25C14.118 9.88002 14.25 9.44501 14.25 9C14.25 8.40326 14.0129 7.83097 13.591 7.40901C13.169 6.98705 12.5967 6.75 12 6.75Z" fill="inhret"/>
                        <path d="M19 19.75C18.8019 19.7474 18.6126 19.6676 18.4725 19.5275C18.3324 19.3874 18.2526 19.1981 18.25 19C18.25 17.05 17.19 15.75 12 15.75C6.81 15.75 5.75 17.05 5.75 19C5.75 19.1989 5.67098 19.3897 5.53033 19.5303C5.38968 19.671 5.19891 19.75 5 19.75C4.80109 19.75 4.61032 19.671 4.46967 19.5303C4.32902 19.3897 4.25 19.1989 4.25 19C4.25 14.25 9.68 14.25 12 14.25C14.32 14.25 19.75 14.25 19.75 19C19.7474 19.1981 19.6676 19.3874 19.5275 19.5275C19.3874 19.6676 19.1981 19.7474 19 19.75Z" fill="inhret"/>
                    </svg>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;