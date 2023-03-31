import { userReducer } from 'reducers/userReducer'
import { createContext, useReducer, useContext } from 'react';
import { UserState, UserContextType, UserProviderProps } from 'interfaces/userInterfaces'

const initialState: UserState = {
    accessToken: null,
    refreshToken: null,
    user: null,
};

const UserContext = createContext<UserContextType>({
    state: initialState,
    dispatch: () => null,
});

export const UserProvider = ({ children }: UserProviderProps) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);