// axios
import axios from 'axios';
import axiosInstance from '../../../../utils/axios/axiosInstance';
// actions
import {
    POST_MEDIALIST_REQUEST,
    POST_MEDIALIST_SUCCESS,
    POST_MEDIALIST_FAILURE,
} from './mediaListTypes';
// types
import { Dispatch } from 'redux';
import { MediaListActionTypes } from './mediaListTypes';
import { PostMediaListResponse } from './mediaListTypes';


const postMediaListRequest = (): MediaListActionTypes => {
    return {
        type: POST_MEDIALIST_REQUEST,
        loading: true,
        response: [],
        error: ''
    }
}

const postMediaListSuccess = (response: PostMediaListResponse): MediaListActionTypes => {
    return {
        type: POST_MEDIALIST_SUCCESS,
        loading: false,
        response: [response],
        error: ''
    }
}

const postMediaListFailure = (error: string): MediaListActionTypes => {
    return {
        type: POST_MEDIALIST_FAILURE,
        loading: false,
        response: [],
        error: error
    }
}

export const postMediaList = (mediaListId: number) => {
    return async (dispatch: Dispatch<MediaListActionTypes>) => {
        dispatch(postMediaListRequest());
        
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const body = {
            "MediaListId": mediaListId,
            "IncludeCategories": true,
            "IncludeImages": true,
            "IncludeMedia": false,
            "PageNumber": 1,
            "PageSize": 15

        }

        try {
            const request = await axiosInstance.post('/Media/GetMediaList', JSON.stringify(body), config);
            const response = request.data;
            dispatch(postMediaListSuccess(response));
        } catch (error: any) {
            if (error.response.status !== 401) {
                dispatch(postMediaListFailure("Internal server error"));
            }
        }
    }
}