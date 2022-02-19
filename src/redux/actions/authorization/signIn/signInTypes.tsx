export const POST_SIGNIN_REQUEST = 'POST_SIGNIN_REQUEST';
export const POST_SIGNIN_SUCCESS = 'POST_SIGNIN_SUCCESS';
export const POST_SIGNIN_FAILURE = 'POST_SIGNIN_FAILURE';

export interface PostSignInResponse {
    "Id": number
    "UserName": string,
    "FullName": string,
    "Email": string,
    "Initials": string,
    "AvatarUrl": string,
    "PhoneNumber": string,
    "ClientRoles": string[]
    "AuthorizationToken": {
        "Token": string,
        "TokenExpires": string
        "RefreshToken": string
    }
}

export interface SignInAsync {
    loading: boolean;
    response: PostSignInResponse | null,
    error: string,
}

interface PostSigninRequest extends SignInAsync {
    type: typeof POST_SIGNIN_REQUEST;
}

interface PostSigninSuccess extends SignInAsync {
    type: typeof POST_SIGNIN_SUCCESS;
}

interface PostSigninFailure extends SignInAsync {
    type: typeof POST_SIGNIN_FAILURE;
}

export type SignInActionTypes = PostSigninRequest | PostSigninSuccess | PostSigninFailure;