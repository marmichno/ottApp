import {
    POST_MEDIALIST_REQUEST,
    POST_MEDIALIST_SUCCESS,
    POST_MEDIALIST_FAILURE
} from '../../../actions/media/mediaList/mediaListTypes';
// types
import { MediaListAsync } from '../../../actions/media/mediaList/mediaListTypes';
import { MediaListActionTypes } from '../../../actions/media/mediaList/mediaListTypes';
import { PostMediaListResponse } from '../../../actions/media/mediaList/mediaListTypes';

interface MediaListState {
    loading: boolean,
    response: PostMediaListResponse[],
    error: string
}

const initialState: MediaListState = {
    loading: false,
    response: [],
    error: ''
}

const mediaListReducer = (state = initialState, action: MediaListActionTypes): MediaListAsync => {
    switch (action.type) {
        case POST_MEDIALIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_MEDIALIST_SUCCESS:
            return {
                loading: false,
                response: state.response.length > 0 ? [...state.response, action.response[0]] : action.response,
                error: ''
            }
        case POST_MEDIALIST_FAILURE:
            return {
                loading: false,
                response: [],
                error: action.error
            }
        default: return state
    }
}

export default mediaListReducer