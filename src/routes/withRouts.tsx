// import {useContext} from 'react';
// import { UserContext } from 'context/userContext';
// import { Routes } from './Routes';
import Loading from 'components/Loading/Loading';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Routes } from './Routes';
import LogoLoading from 'components/Loading/LogoLoading';
import { useUser } from 'contexts/userContext';
// import { useUser } from 'contexts/userContext';
import { Navigate } from 'react-router-dom';

// import { navigate  } from 'react-router-dom';

export const withPublic = (Component: any) => (props: any) => {

    // const router = useRouter();
    // const { authToken } = useUser();

    if(typeof window !== 'undefined'){
        if (localStorage.getItem('athena-token') || localStorage.getItem('athena-token')) {  
            return <Loading />;
        }
    }

    return <Component {...props} />;
};

export const WithProtected = ({ Component, pageProps }: any) => {  

    const navigate = useNavigate()

    useLayoutEffect(() => {
        checkUser()
    })
    
    const checkUser = () => {
        if(!localStorage.getItem('zero7_access_token') && !sessionStorage.getItem('zero7_access_token')) {
            navigate('/login',{ replace: true })
            return <LogoLoading />
        }

        return <Component {...pageProps} /> ;
    }
};

export const withAuth = (Component: React.ComponentType<any>) => {
    const WithAuth = (props: any) => {
        const { userState } = useUser()

        if (userState.userLoading) {
            return <LogoLoading />
        }

        if (!localStorage.getItem('zero7_access_token') && !sessionStorage.getItem('zero7_access_token')) {
            // Redirect to login page or show an unauthorized message
            return <Navigate to="/login" />;
        }

        // If the user is authenticated, render the wrapped component
        return <Component {...props} />;
    };

    return WithAuth;
};