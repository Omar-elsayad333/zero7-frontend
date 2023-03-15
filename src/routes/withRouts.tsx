// import {useContext} from 'react';
// import { UserContext } from 'context/userContext';
// import { Routes } from './Routes';
import Loading from 'components/Loading/Loading';
import { useUser } from 'contexts/userContext';
// import { navigate  } from 'react-router-dom';

export const withPublic = (Component: any) => (props: any) => {

    // const router = useRouter();
    const { authToken } = useUser();

    if(typeof window !== 'undefined'){
        if (localStorage.getItem('athena-token') || localStorage.getItem('athena-token') || authToken) {  
            return <Loading />;
        }
    }

    return <Component {...props} />;
};

export const withProtected = (Component: any) => (props: any) => {  

    // const router = useRouter();
    // const { authToken } = useUser();
    
    if(typeof window !== 'undefined'){
        if (!localStorage.getItem('athena-token') && !sessionStorage.getItem('athena-token')) {
            // router.replace(Routes.teacherLogin);
            return <Loading />;
        }
    }
    
    return <Component {...props} />;
};