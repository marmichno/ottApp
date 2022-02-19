// axios
import axios from 'axios';
import axiosInstance from '../../../../utils/axios/axiosInstance';
// actions
import {
    POST_MEDIAPLAYINFO_REQUEST,
    POST_MEDIAPLAYINFO_SUCCESS,
    POST_MEDIAPLAYINFO_FAILURE,
    CLOSE_MEDIAPLAYER
} from './mediaPlayInfoTypes';
// types
import { Dispatch } from 'redux';
import { MediaPlayInfoActionTypes } from './mediaPlayInfoTypes';
import { PostMediaPlayInfoResponse } from './mediaPlayInfoTypes';


const postMediaPlayInfoRequest = (): MediaPlayInfoActionTypes => {
    return {
        type: POST_MEDIAPLAYINFO_REQUEST,
        loading: true,
        response: null,
        playerOpen: true,
        error: ''
    }
}

const postMediaPlayInfoSuccess = (response: PostMediaPlayInfoResponse): MediaPlayInfoActionTypes => {
    return {
        type: POST_MEDIAPLAYINFO_SUCCESS,
        loading: false,
        response: response,
        playerOpen: true,
        error: ''
    }
}

const postMediaPlayInfoFailure = (error: string): MediaPlayInfoActionTypes => {
    return {
        type: POST_MEDIAPLAYINFO_FAILURE,
        loading: false,
        response: null,
        playerOpen: true,
        error: error
    }
}

export const closeMediaplayer = (): MediaPlayInfoActionTypes => {
    return {
        type: CLOSE_MEDIAPLAYER,
        loading: false,
        response: null,
        playerOpen: false,
        error: ""
    }
}

export const postMediaPlayInfo = (MediaId: number) => {
    return async (dispatch: Dispatch<MediaPlayInfoActionTypes>) => {
        dispatch(postMediaPlayInfoRequest());

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const body = {
            "MediaId": MediaId,
            "StreamType": "TRIAL"

        }

        try {
            const request = await axiosInstance.post('/Media/GetMediaPlayInfo', JSON.stringify(body), config);
            const response = request.data;
            dispatch(postMediaPlayInfoSuccess(response));
        } catch (error: any) {
            if (error.response.status === 403) {
                dispatch(postMediaPlayInfoFailure("You have no valid subscription"));
            } else if (error.response.status !== 401) {
                dispatch(postMediaPlayInfoFailure("Internal server error"));
            }
        }
    }
}