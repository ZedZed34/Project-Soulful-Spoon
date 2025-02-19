import { PUBLIC_API_BASE_URL } from "$env/static/public";

export const BASE_URL = PUBLIC_API_BASE_URL;

// Used for getting / updating info about the currently authenticated user
export const USER_URL = `${BASE_URL}/users/me`;

// Used for logging in and out
export const AUTH_URL = `${BASE_URL}/auth`;

// Used for getting / updating info about the currently authenticated user
export const TODO_URL = `${BASE_URL}/users/todos`;

export const ARTICLE_URL = `${BASE_URL}/articles`;

export const POST_URL = `${BASE_URL}/articles/article`;

export const SIGNUP_URL = `${BASE_URL}/signup`;

export const USERPROFILE_URL = `${BASE_URL}/userprofile`;

export const GETARTICLE_URL = `${BASE_URL}/articles/link`;

export const PATCH_URL = `${BASE_URL}/articles`;

//----------------------------------------------------------------------------------------------------

export const COMMENT_URL = `${BASE_URL}/comments`;




