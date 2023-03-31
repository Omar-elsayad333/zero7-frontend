import { ReactNode } from 'react'

interface User {
    id: number;
    name: string;
    email: string;
};

export interface UserState {
    accessToken: string | null;
    refreshToken: string | null;
    user: User | null;
};

export type UserAction =
    | { type: 'setTokens'; payload: { accessToken: string; refreshToken: string } }
    | { type: 'setUser'; payload: User }
    | { type: 'clearTokens' };

export interface UserContextType {
    state: UserState;
    dispatch: React.Dispatch<UserAction>;
};

export interface UserProviderProps {
    children: ReactNode;
};