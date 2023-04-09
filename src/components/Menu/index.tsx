import style from './menu.module.css'
import { Routes } from 'routes/Routes';
import { colors } from 'styles/colors';
import { Link } from 'react-router-dom';
import { useUser } from 'contexts/userContext';

// MUI
import Typography from '@mui/material/Typography'

type Props = {
    logoutAction: Function;
    closeMenuAction: Function;
}

const Menu: React.FC<Props> = ({logoutAction, closeMenuAction}) => {
    
    const { userState } = useUser()

    return (
        <div className={`${style.container} mobileMenu`}>
            <ul className={style.menuList}>
                <svg data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000" onClick={() => closeMenuAction()} width="35" height="35" viewBox="0 0 24 24" fill={colors.primary.main} xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="inherit"/>
                </svg>
                <Link to={Routes.home} className='notLink' onClick={() => closeMenuAction()}>
                    <li data-aos="fade-right" data-aos-delay="700" data-aos-duration="1000">
                        <Typography variant='h2' color={'secondary'}>
                            Home
                        </Typography>
                    </li>
                </Link>
                <Link to={Routes.shop} className='notLink' onClick={() => closeMenuAction()}>
                    <li data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">
                        <Typography variant='h2' color={'secondary'}>
                            Shop
                        </Typography>
                    </li>
                </Link>
                <Link to={Routes.aboutUs} className='notLink' onClick={() => closeMenuAction()}>
                    <li data-aos="fade-right" data-aos-delay="700" data-aos-duration="1000">
                        <Typography variant='h2' color={'secondary'}>
                            About Us
                        </Typography>
                    </li>
                </Link>
                {
                    userState.user ?
                    <li 
                        data-aos="fade-left" 
                        data-aos-delay="700" 
                        data-aos-duration="1000" 
                        onClick={() => {logoutAction(); closeMenuAction()}}
                    >
                        <Typography variant='h2' color={'secondary'}>
                            Log Out
                        </Typography>
                    </li> : 
                    <Link to={Routes.login} className='notLink' onClick={() => closeMenuAction()}>
                        <li data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">
                            <Typography variant='h2' color={'secondary'}>
                                Log In
                            </Typography>
                        </li>
                    </Link>
                }
            </ul>
        </div>
    );
}
 
export default Menu;