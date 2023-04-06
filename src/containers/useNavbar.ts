import { useLayoutEffect } from "react";
import { useUser } from "contexts/userContext";
import { logoutUser } from "handlers/userHandlers";

const useNavbar = () => {

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

    const logout = async () => {
        userDispatch({ type: 'setLoading' })
        await logoutUser()
        userDispatch({ type: 'clearTokens' })
        userDispatch({ type: 'setLoading' })
    }
    
    return (
        {
            userState,
            actions: {
                logout
            }
        }
    );
}

export default useNavbar;