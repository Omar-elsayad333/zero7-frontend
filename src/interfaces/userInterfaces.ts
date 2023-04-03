import { ReactNode } from 'react'

interface User {
    name: string;
    email: string;
    phoneNumber: string;
};

export interface UserState {
    user: User | null;
    loading: boolean;
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
    state: UserState;
    dispatch: React.Dispatch<UserAction>;
};

export interface UserProviderProps {
    children: ReactNode;
};