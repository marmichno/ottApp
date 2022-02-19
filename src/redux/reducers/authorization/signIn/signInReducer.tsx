import {
    POST_SIGNIN_REQUEST,
    POST_SIGNIN_SUCCESS,
    POST_SIGNIN_FAILURE
} from '../../../actions/authorization/signIn/signInTypes';
// types
import { SignInAsync } from '../../../actions/authorization/signIn/signInTypes';
import { SignInActionTypes } from '../../../actions/authorization/signIn/signInTypes';

const initialState: SignInAsync = {
    loading: false,
    response: null,
    error: ''
}

const signInReducer = (state = initialState, action: SignInActionTypes): SignInAsync => {
    switch (action.type) {
        case POST_SIGNIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_SIGNIN_SUCCESS:
            localStorage.setItem("token", JSON.stringify(action.response?.AuthorizationToken));
            return {
                loading: false,
                response: action.response,
                error: ''
            }
        case POST_SIGNIN_FAILURE:
            return {
                loading: false,
                response: null,
                error: action.error
            }
        default: return state
    }
}

export default signInReducer