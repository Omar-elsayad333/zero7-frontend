import { useState } from "react";
import { useUser } from "contexts/userContext";
import { logoutUser } from "handlers/userHandlers";

const useNavbar = () => {

    const [menuState, setMenuState] = useState<boolean>(false)
    const { userState, userDispatch } = useUser()

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
        userDispatch({ type: 'clearTokens' })
        await logoutUser()
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