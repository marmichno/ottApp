export const POST_MEDIAPLAYINFO_REQUEST = 'POST_MEDIAPLAYINFO_REQUEST';
export const POST_MEDIAPLAYINFO_SUCCESS = 'POST_MEDIAPLAYINFO_SUCCESS';
export const POST_MEDIAPLAYINFO_FAILURE = 'POST_MEDIAPLAYINFO_FAILURE';
export const CLOSE_MEDIAPLAYER = 'CLOSE_MEDIAPLAYER';

export interface PostMediaPlayInfoResponse {
    "MediaId": number,
    "Title": string,
    "Description": string,
    "MediaTypeCode": string,
    "MediaTypeDisplayName": string,
    "Timestamp": {
        "Hour": number,
        "Minute": number,
        "Second": number,
        "ClientTimestamp": string,
        "ApiTimestamp": string
    },
    "StreamId": number,
    "Provider": string,
    "ContentUrl": string,
    "ContentType": string,
    "DrmLicenseServer": string,
    "DrmToken": string,
    "DrmType": string,
}

export interface MediaPlayInfoAsync {
    loading: boolean;
    response: PostMediaPlayInfoResponse | null,
    playerOpen: boolean,
    error: string,
}

interface PostMediaPlayInfoRequest extends MediaPlayInfoAsync {
    type: typeof POST_MEDIAPLAYINFO_REQUEST;
}

interface PostMediaPlayInfoSuccess extends MediaPlayInfoAsync {
    type: typeof POST_MEDIAPLAYINFO_SUCCESS;
}

interface PostMediaPlayInfoFailure extends MediaPlayInfoAsync {
    type: typeof POST_MEDIAPLAYINFO_FAILURE;
}

interface CloseMediaplayer extends MediaPlayInfoAsync {
    type: typeof CLOSE_MEDIAPLAYER;
}

export type MediaPlayInfoActionTypes = PostMediaPlayInfoRequest | PostMediaPlayInfoSuccess | PostMediaPlayInfoFailure | CloseMediaplayer;