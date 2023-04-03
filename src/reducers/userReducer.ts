import { UserState, UserAction } from 'interfaces/userInterfaces'

export const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'setTokens':
            return {
                ...state,
                tokens: {
                    accessToken: action.payload.accessToken,
                    refreshToken: action.payload.refreshToken,
                    accessTokenExpireAt: action.payload.accessTokenExpireAt,
                    refreshTokenExpireAt: action.payload.refreshTokenExpireAt
                }
            };
        case 'setUser':
            return {
                ...state,   
                user: action.payload,
            };
        case 'clearTokens':
            return {    
                ...state,
                user: null,
                tokens: {
                    accessToken: null,
                    refreshToken: null,
                    accessTokenExpireAt: null,
                    refreshTokenExpireAt: null
                }
            };
        case 'setLoading':
            return {
                ...state, 
                userLoading: !state.userLoading
            }
        default:
            throw new Error('Invalid action type');
    }
};