import type { Handle } from '@sveltejs/kit';
import { isAuthenticated } from '$lib/auth';

export const handle: Handle = async ({ event, resolve }) => {
    const authenticated = await isAuthenticated();

    if (!authenticated && event.url.pathname.startsWith('/protected')) {
        return Response.redirect('/login', 302);
    }

    return resolve(event);
};
