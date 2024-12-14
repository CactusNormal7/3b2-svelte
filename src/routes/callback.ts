import { redirect } from '@sveltejs/kit';
import { handleRedirectCallback } from '$lib/auth';

export async function load() {
    await handleRedirectCallback(); 
    throw redirect(302, '/'); 
}
