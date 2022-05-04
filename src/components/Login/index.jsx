import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

    const {
        isAuthenticated,
        loginWithRedirect,
        getAccessTokenSilently,
    } = useAuth0();

    useEffect(() => {
        getAccessTokenSilently()
            .then(res => localStorage.setItem('access_token', res))
            .catch(err => console.log(err))
    }, []);

    return !isAuthenticated && (
        <button onClick={loginWithRedirect}>Log in</button>
    );
}

export default Login;