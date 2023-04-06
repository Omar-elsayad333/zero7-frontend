import { userReducer } from 'reducers/userReducer'
import { getRefreshToken, getUserData, storeUser } from 'handlers/userHandlers'
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

    useLayoutEffect(() => {
        const checkUser = async () => {
            if(localStorage.getItem('zero7_access_token') || sessionStorage.getItem('zero7_access_token')) {
                if(userState.tokens.accessTokenExpireAt! < new Date().toISOString()) {
                    await getUser(userState.tokens.accessToken!)
                } else if (localStorage.getItem('zero7_access_token') || sessionStorage.getItem('zero7_access_token')) {
                    console.log('false')
                    if(userState.tokens.refreshTokenExpireAt! > new Date().toISOString()) {   
                        let rememberMe = true
                        const tokens = {
                            accessToken: userState.tokens.accessToken,
                            refreshToken: userState.tokens.refreshToken
                        }
                        localStorage.getItem('zero7_access_token') ? rememberMe = true : rememberMe = false
                        try {
                            userDispatch({type: 'setLoading'})
                            const newTokens: any = await getRefreshToken(tokens)
                            await getUser(newTokens.accessToken)
                            storeUser(newTokens, rememberMe)
                            userDispatch({
                                type: 'setTokens',
                                payload: {
                                    accessToken: newTokens.accessToken,
                                    refreshToken: newTokens.refreshToken,
                                    accessTokenExpireAt: newTokens.accessTokenExpireAt,
                                    refreshTokenExpireAt: newTokens.refreshTokenExpireAt
                                }
                            })
                        }
                        catch (error) {
                            console.log(error)
                        }
                        finally {
                            userDispatch({type: 'setLoading'})
                        }
                    }
                }
            }
        }

        checkUser()
    }, [userState.tokens])

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