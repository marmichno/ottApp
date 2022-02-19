import axios from 'axios';
import {
    POST_SIGNIN_REQUEST,
    POST_SIGNIN_SUCCESS,
    POST_SIGNIN_FAILURE
} from './signInTypes';
// types
import { Dispatch } from 'redux';
import { SignInActionTypes } from './signInTypes';
import { PostSignInResponse } from './signInTypes';

const postSignInRequest = (): SignInActionTypes => {
    return {
        type: POST_SIGNIN_REQUEST,
        loading: true,
        response: null,
        error: ''
    }
}

const postSignInSuccess = (response: PostSignInResponse): SignInActionTypes => {
    return {
        type: POST_SIGNIN_SUCCESS,
        loading: false,
        response: response,
        error: ''
    }
}

const postSignInFailure = (error: string): SignInActionTypes => {
    return {
        type: POST_SIGNIN_FAILURE,
        loading: false,
        response: null,
        error: error
    }
}

export const postSignIn = (username: string, password: string) => {
    return async (dispatch: Dispatch<SignInActionTypes>) => {
        dispatch(postSignInRequest());

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        let body = {};

        body = {
            "username": username,
            "password": password,
            "device": {
                "platformCode": "WEB",
                "Name": "4e5c1161-bcfd-4afc-826e-f1fa9fb0095b"
            }
        }
        
        try {
            const request = await axios.post('https://thebetter.bsgroup.eu/Authorization/SignIn', JSON.stringify(body), config);
            const response = request.data;
            dispatch(postSignInSuccess(response));
        } catch (error: any) {
            dispatch(postSignInFailure("Internal server error"));
        }
    }
}