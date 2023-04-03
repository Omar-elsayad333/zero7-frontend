import { userReducer } from 'reducers/userReducer'
import { getUserData } from 'handlers/userHandlers'
import { createContext, useReducer, useContext, useEffect } from 'react'
import { UserState, UserContextType, UserProviderProps } from 'interfaces/userInterfaces'

const initialState: UserState = {
    user: null,
    loading: false,
    tokens: {
        accessToken: null,
        refreshToken: null,
        accessTokenExpireAt: null,
        refreshTokenExpireAt: null
    }
};

const UserContext = createContext<UserContextType>({
    state: initialState,
    dispatch: () => null,
});

export const UserProvider = ({ children }: UserProviderProps) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        if(state.tokens.accessToken) {
            getUser(state.tokens.accessToken)
        }else if(state.tokens.refreshToken) {
            
        }
    }, [state.tokens.accessToken])

    const getUser = async (token: string) => {
        try {
            dispatch({type: 'setLoading'})
            const response = await getUserData(token)
            dispatch({
                type: 'setUser',
                payload: response
            })
        }
        catch (error) {
            
        }
        finally {
            dispatch({type: 'setLoading'})
        }
    }

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);