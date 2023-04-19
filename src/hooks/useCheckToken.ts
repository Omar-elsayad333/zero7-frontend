import { useUser } from "contexts/userContext"
import { getRefreshToken, logoutUser, storeUser } from "handlers/userHandlers"

const useCheckToken = () => {

    const { userDispatch, getUser } = useUser()

    // Check if the user have tokens
    const checkTokens = () => {

        if (!localStorage.getItem('zero7_access_token') && !sessionStorage.getItem('zero7_access_token')) {
            return false
        }
    
        if (!localStorage.getItem('zero7_refresh_token') && !sessionStorage.getItem('zero7_refresh_token')) {
            return false
        }
    
        if (!localStorage.getItem('zero7_access_exp') && !sessionStorage.getItem('zero7_access_exp')) {
            return false
        }
    
        if (!localStorage.getItem('zero7_refresh_exp') && !sessionStorage.getItem('zero7_refresh_exp')) {
            return false
        }
    
        return true
    }

    // Check for the expireation date of access token
    const checkAccessTokensExp = () => {
        const accessTokenExpireAt: string | null = localStorage.getItem('zero7_access_exp') || sessionStorage.getItem('zero7_access_exp') || null;

        // Create a Date object from the API date string
        const apiDate = new Date(accessTokenExpireAt!);

        // Get the current date and time
        const currentDate = new Date();

        if (currentDate.getTime() >= apiDate.getTime()) {
            return false
        }
    
        return true
    }

    // Check for the expireation date of refresh token
    const checkRefreshTokensExp = () => {
        const refreshTokenExpireAt: string | null = localStorage.getItem('zero7_refresh_exp') || sessionStorage.getItem('zero7_refresh_exp') || null;
        
        // Create a Date object from the API date string
        const apiDate = new Date(refreshTokenExpireAt!);

        // Get the current date and time
        const currentDate = new Date();

        if (currentDate.getTime() >= apiDate.getTime()) {
            logoutUser()
            return false
        }
    
        return true
    }
    
    // Give the user new tokens with the refresh token
    const getNewTokens = async () => {
        let rememberMe = true
        localStorage.getItem('zero7_access_token') ? rememberMe = true : rememberMe = false

        const tokens = {
            accessToken: localStorage.getItem('zero7_access_token') || sessionStorage.getItem('zero7_access_token'),
            refreshToken: localStorage.getItem('zero7_refresh_token') || sessionStorage.getItem('zero7_refresh_token')
        }
        
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
            return true
        }
        catch (error) {
            console.log(error)
            logoutUser()
            return false
        } 
        finally {
            userDispatch({type: 'setLoading'})
        }
    }

    return (
        {
            checkTokens,
            checkAccessTokensExp,
            checkRefreshTokensExp,
            getNewTokens
        }
    );
}

export default useCheckToken;