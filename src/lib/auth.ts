import { Auth0Client, createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client: Auth0Client;

export const initAuth0 = async () => {
    if (!auth0Client) {
        auth0Client = await createAuth0Client({
            domain: 'dev-2vjtyykglzeiev8f.us.auth0.com', // Remplacez par votre domaine Auth0
            clientId: '76bdUcFkJIDb6LhZKbizCrJoVFFMuokk', // Remplacez par votre ID client
            authorizationParams: {
                redirect_uri: window.location.origin,
            },
        });
    }
    return auth0Client; // Retourne le client Auth0
};

export const login = async () => {
    const client = await initAuth0();
    await client.loginWithRedirect();
};

export const logout = () => {
    // auth0Client.logout({ returnTo: window.location.origin });
};

export const isAuthenticated = async (): Promise<boolean> => {
    const client = await initAuth0();
    return await client.isAuthenticated();
};

export const getUser = async (): Promise<any> => {
    const client = await initAuth0();
    return await client.getUser();
};

export const handleRedirectCallback = async () => {
    const client = await initAuth0();
    return await client.handleRedirectCallback();
};
