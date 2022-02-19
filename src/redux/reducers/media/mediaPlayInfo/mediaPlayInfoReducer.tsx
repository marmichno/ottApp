import {
    POST_MEDIAPLAYINFO_REQUEST,
    POST_MEDIAPLAYINFO_SUCCESS,
    POST_MEDIAPLAYINFO_FAILURE,
    CLOSE_MEDIAPLAYER
} from '../../../actions/media/mediaPlayInfo/mediaPlayInfoTypes';
// types
import { MediaPlayInfoAsync } from '../../../actions/media/mediaPlayInfo/mediaPlayInfoTypes';
import { MediaPlayInfoActionTypes } from '../../../actions/media/mediaPlayInfo/mediaPlayInfoTypes';

const initialState: MediaPlayInfoAsync = {
    loading: false,
    response: null,
    playerOpen: false,
    error: ''
}

const mediaPlayInfoReducer = (state = initialState, action: MediaPlayInfoActionTypes): MediaPlayInfoAsync => {
    switch (action.type) {
        case POST_MEDIAPLAYINFO_REQUEST:
            return {
                ...state,
                loading: true,
                playerOpen: action.playerOpen,
            }
        case POST_MEDIAPLAYINFO_SUCCESS:
            return {
                loading: false,
                response: action.response,
                playerOpen: action.playerOpen,
                error: ''
            }
        case POST_MEDIAPLAYINFO_FAILURE:
            return {
                loading: false,
                response: null,
                playerOpen: action.playerOpen,
                error: action.error
            }
        case CLOSE_MEDIAPLAYER:
            return {
                ...state,
                playerOpen: false
            }
        default: return state
    }
}

export default mediaPlayInfoReducer