import { useUser } from "contexts/userContext";
import { useLayoutEffect, useState } from "react";
import { logoutUser } from "handlers/userHandlers";

const useNavbar = () => {

    const [menuState, setMenuState] = useState<boolean>(false)
    const { userState, userDispatch } = useUser()

    useLayoutEffect(() => {
        const navbar: any = document.querySelector('#navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > navbar.offsetTop) {    
                navbar.style.position = 'fixed'
            } else {
                navbar.style.position = 'static'
            }
        });
    }, [])

    // Handle open menu
    const openMenu = () => {
        setMenuState(true)
    }

    // Handle close menu
    const closeMenu = () => {
        const mobileMenu: any = document.getElementsByClassName('mobileMenu')
        mobileMenu[0].style.height = '0'
        setTimeout(() => {
            setMenuState(false)
        }, 500)
    }

    // Logout user
    const logout = async () => {
        userDispatch({ type: 'setLoading' })
        await logoutUser()
        userDispatch({ type: 'clearTokens' })
        userDispatch({ type: 'setLoading' })
    }
    
    return (
        {
            userState,
            menuState,
            actions: {
                logout,
                openMenu,
                closeMenu
            }
        }
    );
}

export default useNavbar;