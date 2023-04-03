import { userReducer } from 'reducers/userReducer'
import { getUserData } from 'handlers/userHandlers'
import { createContext, useReducer, useContext, useEffect, useLayoutEffect } from 'react'
import { initialState, UserContextType, UserProviderProps } from 'interfaces/userInterfaces'

const UserContext = createContext<UserContextType>({
    getUser: () => null,
    userState: initialState,
    userDispatch: () => null
});

export const UserProvider = ({ children }: UserProviderProps) => {

    const [userState, userDispatch] = useReducer(userReducer, initialState);

    useLayoutEffect(() => {
        userDispatch({
            type: 'setTokens',
            payload: {
                accessToken: localStorage.getItem('zero7_access_token') || sessionStorage.getItem('zero7_access_token') || null,
                refreshToken: localStorage.getItem('zero7_refresh_token') || sessionStorage.getItem('zero7_refresh_token') || null,
                accessTokenExpireAt: localStorage.getItem('zero7_access_exp') || sessionStorage.getItem('zero7_access_exp') || null,
                refreshTokenExpireAt: localStorage.getItem('zero7_refresh_exp') || sessionStorage.getItem('zero7_refresh_exp') || null
            }
        })
    }, [])

    useEffect(() => {
        const checkUser = async () => {
            if(userState.tokens.accessToken) {
                await getUser(userState.tokens.accessToken)
            }
        }
        checkUser()
    }, [userState.tokens.accessToken])

    useEffect(() => {
        console.log(userState)
    }, [userState])

    const getUser = async (token: string) => {
        try {
            userDispatch({type: 'setLoading'})
            const response = await getUserData(token)
            userDispatch({
                type: 'setUser',
                payload: response
            })
        }
        catch (error) { 
            throw Error('No such user')
        }
        finally {
            userDispatch({type: 'setLoading'})
        }
    }

    return (
        <UserContext.Provider value={{ getUser, userState, userDispatch }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);