import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

    const {
        isAuthenticated,
        loginWithRedirect,
        getAccessTokenSilently,
        user,
    } = useAuth0();

    useEffect(() => {
        getAccessTokenSilently()
            .then(res => localStorage.setItem('access_token', res))
            .catch(err => console.log(err))
        if (isAuthenticated) {
            createUser();
        }
    }, []);

    async function createUser() {
        const token = localStorage.getItem('access_token')
        const userBody = {
            email: user.email,
            id: user.sub,
            username: user.nickname,
        };

        return await fetch(`http://localhost:8000/users/`, {

            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: userBody,
        });
    }

    return !isAuthenticated && (
        <button onClick={loginWithRedirect}>Log in</button>
    );
}

export default Login;