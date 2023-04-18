import { Routes } from './Routes';
import { ComponentType } from 'react';
import useCheckToken from 'hooks/useCheckToken';
import { Navigate, useNavigate } from 'react-router-dom';

export const withPublic = (WrappedComponent: ComponentType): any => (props: any) => {

    const navigate = useNavigate()
    const { checkTokens } = useCheckToken()

    if (!checkTokens()) {
        // If the user is not authenticated, render the wrapped component
        return <WrappedComponent {...props} />;
    }

    // If the user is authenticated, do not render the wrapped component
    return navigate(-1);
};

export const withAuth = (WrappedComponent: ComponentType): ComponentType => (props: any) => {

    const { checkTokens, checkAccessTokensExp, checkRefreshTokensExp, getNewTokens } = useCheckToken()

    if (!checkTokens()) {
        return <Navigate to={Routes.login} replace />;
    }
    
    if (checkAccessTokensExp()) {
        // If the user is authenticated, render the wrapped component
        return <WrappedComponent {...props} />;
    }
    
    if (!checkRefreshTokensExp()) {
        return <Navigate to={Routes.login} replace  />;
    }

    if(!getNewTokens()) {
        return <Navigate to={Routes.login} replace />;
    }

    // If the user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
}   