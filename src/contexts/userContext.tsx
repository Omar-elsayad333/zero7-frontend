// import { Routes } from 'routes/Routes';
// import { userObjectHandler } from 'handlers/userHandler';
import { useState, createContext, useContext, useEffect } from 'react';

type ContextState = {
    user: any;
    authToken: string;
    loginUser: Function;  
};

const initialValues = {
    user: null, 
    authToken: '',
    loginUser: () => {}
};

type IProps = { 
    children: React.ReactElement<any, any> & React.ReactNode;
};

export const UserContext = createContext<ContextState>(initialValues);

export const UserProvider: React.FC<IProps> = ({ children }) => {

    const [ user ] = useState<any>('')
    const [ authToken, setAuthToken ] = useState<string>('')
    const [ expireDate, setExpireDate ] = useState<any>('')
    const [ , setRefreshToken ] = useState<any>('')
    
    useEffect(() => {
        if(user) {
            console.table(user)
            if(new Date(expireDate) < new Date()) {
                setAuthToken('')
                setRefreshToken('')
                setExpireDate('')
                localStorage.clear()
                sessionStorage.clear()
                console.log('Token expired')
                // router.replace(Routes.teacherLogin)
            }
        }
    }, [user])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            checkForToken()
        }
    }, [])
    
    const checkForToken = () => {
        if(localStorage.getItem('zero7-token') && authToken == '') {
            // getUserData(localStorage.getItem('zero7-token')!)
            setAuthToken(localStorage.getItem('zero7-token')!)
            setRefreshToken(localStorage.getItem('zero7-refresh-token')!)
            setExpireDate(localStorage.getItem('zero7-refresh-token-expiryTime')!)
            return null
        }
        if(sessionStorage.getItem('zero7-token') && authToken == '') {
            // getUserData(sessionStorage.getItem('zero7-token')!)
            setAuthToken(sessionStorage.getItem('zero7-token')!)
            setRefreshToken(sessionStorage.getItem('zero7-refresh-token')!)
            setExpireDate(sessionStorage.getItem('zero7-refresh-token-expiryTime')!)
            return null
        }

        return null
    }

    // const getUserData = async (token: any) => {
    //     try {
    //         const res = await userObjectHandler(token)
    //         setUser(res)
    //     }
    //     catch(error) {
    //         console.log(error)
    //         setAuthToken('')
    //         setRefreshToken('')
    //         setExpireDate('')
    //         localStorage.clear()
    //         sessionStorage.clear()
    //         console.log('error from loginUser')
    //         router.replace(Routes.teacherLogin)
    //     }
    // }

    const loginUser = async (userData: any, rememberMe: boolean) => { 
        // await getUserData(userData.token)
        setAuthToken(userData.token)
        setRefreshToken(userData.refreshToken)
        setExpireDate(userData.refreshTokenExpiryTime)
        console.log(rememberMe)
        if(rememberMe) {
            localStorage.setItem('zero7-token', userData.token)
            localStorage.setItem('zero7-refresh-token', userData.refreshToken)
            localStorage.setItem('zero7-refresh-token-expiryTime', userData.refreshTokenExpiryTime)
        }else {
            sessionStorage.setItem('zero7-token', userData.token)
            sessionStorage.setItem('zero7-refresh-token', userData.refreshToken)
            sessionStorage.setItem('zero7-refresh-token-expiryTime', userData.refreshTokenExpiryTime)
        }

        // router.replace(Routes.teacherHome)
    }

    return (
        <UserContext.Provider value={{ user, authToken, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);