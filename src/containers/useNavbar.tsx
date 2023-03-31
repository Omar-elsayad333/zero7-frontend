import { useLayoutEffect } from "react";

const useNavbar = () => {

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
    
    return (
        {
            
        }
    );
}

export default useNavbar;