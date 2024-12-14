import { redirect } from '@sveltejs/kit';
import { handleRedirectCallback } from '$lib/auth';

export async function load() {
    await handleRedirectCallback(); // Gère le rappel après la connexion
    throw redirect(302, '/'); // Redirige vers la page d'accueil après la connexion
}
