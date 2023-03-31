import { UserState, UserAction } from 'interfaces/userInterfaces'

export const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'setTokens':
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            };
        case 'setUser':
            return {
                ...state,
                user: action.payload,
            };
        case 'clearTokens':
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                user: null,
            };
        default:
            throw new Error('Invalid action type');
    }
};