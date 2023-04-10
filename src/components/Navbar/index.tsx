import Menu from 'components/Menu'
import { colors } from 'styles/colors'
import { Routes } from 'routes/Routes'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import logo from 'assets/images/logo.png'
import useNavbar from 'containers/useNavbar'

// MUI
import Typography from '@mui/material/Typography'

const Navbar: React.FC = () => {

    const { userState, menuState, actions } = useNavbar()

    return (
        <div className={`${style.container} grid`} id='navbar'>
            { menuState && <Menu closeMenuAction={actions.closeMenu} logoutAction={actions.logout} /> }
            <Link to={'/'}>
                <img data-aos="fade-right" data-aos-duration="1000" src={logo} width={100} alt='Zero7' /> 
            </Link>
            <ul className={style.menuList} data-aos="fade-left" data-aos-duration="1000">
                <Link to={'/'} className={style.linkContainer}>
                    <li className={style.link}>
                        <Typography variant={'h4'} color='secondary' fontWeight={700} >
                            Home
                        </Typography>
                    </li>
                </Link>
                <Link to={Routes.shop} className={style.linkContainer}>
                    <li className={style.link}>
                        <Typography variant={'h4'} color='secondary' fontWeight={700} >
                            Shop
                        </Typography>
                    </li>
                </Link>
                <Link to={Routes.aboutUs} className={style.linkContainer}>
                    <li className={style.link}>
                        <Typography variant={'h4'} color='secondary' fontWeight={700} >
                            About Us
                        </Typography>
                    </li>
                </Link>
                <Link to={Routes.cart} className={style.linkContainer}>
                    <li className={style.link}>
                        <Typography variant={'h4'} color='secondary' fontWeight={700} >
                            Cart
                        </Typography>
                    </li>
                </Link>
                <Link to={Routes.wishlist} className={style.linkContainer}>
                    <li className={style.link}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill={colors.secondary.main} xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5.02765C9.64418 2.91689 6.02125 2.99347 3.75736 5.25736C1.41421 7.60051 1.41421 11.3995 3.75736 13.7426L10.5858 20.5711C11.3668 21.3521 12.6332 21.3521 13.4142 20.5711L20.2426 13.7426C22.5858 11.3995 22.5858 7.60051 20.2426 5.25736C17.9787 2.99347 14.3558 2.91689 12 5.02765ZM10.8284 6.67157L11.2929 7.13604C11.6834 7.52656 12.3166 7.52656 12.7071 7.13604L13.1716 6.67157C14.7337 5.10948 17.2663 5.10948 18.8284 6.67157C20.3905 8.23367 20.3905 10.7663 18.8284 12.3284L12 19.1569L5.17157 12.3284C3.60948 10.7663 3.60948 8.23367 5.17157 6.67157C6.73367 5.10948 9.26633 5.10948 10.8284 6.67157Z" fill="inherit"/>
                        </svg>
                    </li>
                </Link>
                {
                    userState.user &&
                    <Link to={Routes.profile} className={style.linkContainer}>
                        <li className={style.link}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill={colors.secondary.main} xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM8 18C6.34315 18 5 19.3431 5 21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21C3 18.2386 5.23858 16 8 16H16C18.7614 16 21 18.2386 21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 19.3431 17.6569 18 16 18H8Z" fill="inherit"/>
                            </svg>
                        </li>
                    </Link> 
                }
                {
                    userState.user ?
                    <li className={style.link} onClick={actions.logout}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={colors.secondary.main} xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11 20C11 19.4477 10.5523 19 10 19H5V5H10C10.5523 5 11 4.55228 11 4C11 3.44771 10.5523 3 10 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H10C10.5523 21 11 20.5523 11 20Z" fill="inherit"/>
                            <path d="M21.7136 12.7005C21.8063 12.6062 21.8764 12.498 21.9241 12.3828C21.9727 12.2657 21.9996 12.1375 22 12.003L22 12L22 11.997C21.9992 11.7421 21.9016 11.4874 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11H9C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13H18.5858L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7064 12.7078L21.7136 12.7005Z" fill="inherit"/>
                        </svg>
                    </li> :
                    <Link to={Routes.login} className={style.linkContainer}>
                        <li className={style.link}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill={colors.secondary.main} xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 19C13.4477 19 13 19.4477 13 20C13 20.5523 13.4477 21 14 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H14C13.4477 3 13 3.44771 13 4C13 4.55228 13.4477 5 14 5H19V19H14Z" fill="inherit"/>
                                <path d="M15.7136 12.7005C15.8063 12.6062 15.8764 12.498 15.9241 12.3828C15.9727 12.2657 15.9996 12.1375 16 12.003L16 12L16 11.997C15.9992 11.7421 15.9016 11.4874 15.7071 11.2929L11.7071 7.29289C11.3166 6.90237 10.6834 6.90237 10.2929 7.29289C9.90237 7.68342 9.90237 8.31658 10.2929 8.70711L12.5858 11H3C2.44771 11 2 11.4477 2 12C2 12.5523 2.44771 13 3 13H12.5858L10.2929 15.2929C9.90237 15.6834 9.90237 16.3166 10.2929 16.7071C10.6834 17.0976 11.3166 17.0976 11.7071 16.7071L15.7064 12.7078L15.7136 12.7005Z" fill="inherit"/>
                            </svg>
                        </li>
                    </Link>
                }
            </ul>
            <ul className={style.mobileNav} data-aos="fade-left" data-aos-duration="1000">
                <div className={style.navWraper}>
                    <Link to={Routes.cart} className={style.linkContainer}>
                        <li className={style.link}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill={colors.secondary.main} xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.1421 4.5L6.00913 16.6357C6.02271 16.7358 6.05113 16.8313 6.0921 16.9198C6.21543 17.1861 6.45246 17.3889 6.74088 17.4661C6.82899 17.4898 6.92133 17.5016 7.01578 17.5H18C18.4416 17.5 18.8309 17.2103 18.9578 16.7873L21.9578 6.78735C22.0487 6.48457 21.991 6.15668 21.8023 5.90307C21.6136 5.64946 21.3161 5.5 21 5.5H6.31948L5.99058 3.36219C5.97826 3.27281 5.95413 3.1872 5.91981 3.10698C5.85751 2.9609 5.76213 2.83437 5.64429 2.73519C5.53497 2.643 5.40561 2.57382 5.26367 2.53513C5.17434 2.51066 5.0806 2.49841 4.9847 2.5H3C2.44772 2.5 2 2.94772 2 3.5C2 4.05228 2.44772 4.5 3 4.5H4.1421ZM7.85794 15.5L6.62717 7.5H19.656L17.256 15.5H7.85794Z" fill="inherit"/>
                                <path d="M10 20.5C10 21.6046 9.10457 22.5 8 22.5C6.89543 22.5 6 21.6046 6 20.5C6 19.3954 6.89543 18.5 8 18.5C9.10457 18.5 10 19.3954 10 20.5Z" fill="inherit"/>
                                <path d="M19 20.5C19 21.6046 18.1046 22.5 17 22.5C15.8954 22.5 15 21.6046 15 20.5C15 19.3954 15.8954 18.5 17 18.5C18.1046 18.5 19 19.3954 19 20.5Z" fill="inherit"/>
                            </svg>
                        </li>
                    </Link>
                    <Link to={Routes.wishlist} className={style.linkContainer}>
                        <li className={style.link}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill={colors.secondary.main} xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5.02765C9.64418 2.91689 6.02125 2.99347 3.75736 5.25736C1.41421 7.60051 1.41421 11.3995 3.75736 13.7426L10.5858 20.5711C11.3668 21.3521 12.6332 21.3521 13.4142 20.5711L20.2426 13.7426C22.5858 11.3995 22.5858 7.60051 20.2426 5.25736C17.9787 2.99347 14.3558 2.91689 12 5.02765ZM10.8284 6.67157L11.2929 7.13604C11.6834 7.52656 12.3166 7.52656 12.7071 7.13604L13.1716 6.67157C14.7337 5.10948 17.2663 5.10948 18.8284 6.67157C20.3905 8.23367 20.3905 10.7663 18.8284 12.3284L12 19.1569L5.17157 12.3284C3.60948 10.7663 3.60948 8.23367 5.17157 6.67157C6.73367 5.10948 9.26633 5.10948 10.8284 6.67157Z" fill="inherit"/>
                            </svg>
                        </li>
                    </Link>
                    <li className={style.link} onClick={actions.openMenu}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill={colors.secondary.main} xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7.5C4 6.94772 4.44772 6.5 5 6.5H19C19.5523 6.5 20 6.94772 20 7.5C20 8.05228 19.5523 8.5 19 8.5H5C4.44772 8.5 4 8.05228 4 7.5ZM4 12.5C4 11.9477 4.44772 11.5 5 11.5H19C19.5523 11.5 20 11.9477 20 12.5C20 13.0523 19.5523 13.5 19 13.5H5C4.44772 13.5 4 13.0523 4 12.5ZM4 17.5C4 16.9477 4.44772 16.5 5 16.5H19C19.5523 16.5 20 16.9477 20 17.5C20 18.0523 19.5523 18.5 19 18.5H5C4.44772 18.5 4 18.0523 4 17.5Z" fill="inherit"/>
                        </svg>
                    </li>
                </div>
            </ul>
        </div>
    );
}
 
export default Navbar;