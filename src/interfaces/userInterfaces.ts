import { ReactNode } from 'react'

interface User {
    name: string;
    email: string;
    phoneNumber: string;
};

export interface UserState {
    user: User | null;
    userLoading: boolean;
    tokens: {
        accessToken: string | null;
        refreshToken: string | null;
        accessTokenExpireAt: string | null;
        refreshTokenExpireAt: string | null;
    },
};

export type UserAction =
    | { type: 'setLoading' }
    | { type: 'clearTokens' }
    | { type: 'setUser'; payload: User }
    | { type: 'setTokens'; payload: UserState['tokens'] };

export interface UserContextType {
    getUser: Function;  
    userState: UserState;
    userDispatch: React.Dispatch<UserAction>;
};

export interface UserProviderProps {
    children: ReactNode;
};

export const initialState: UserState = {
    user: null,
    userLoading: false,
    tokens: {
        accessToken: null,
        refreshToken: null,
        accessTokenExpireAt: null,
        refreshTokenExpireAt: null
    }
};