export const POST_MEDIALIST_REQUEST = 'POST_MEDIALIST_REQUEST';
export const POST_MEDIALIST_SUCCESS = 'POST_MEDIALIST_SUCCESS';
export const POST_MEDIALIST_FAILURE = 'POST_MEDIALIST_FAILURE';

export interface PostMediaListResponse {
    "Entities": {
        "Id": number,
        "Guid": string,
        "MediaTypeCode": string,
        "MediaTypeDisplayName": string,
        "MediaAgeRestrictionValueMin": number,
        "MediaAgeRestrictionImageUrl": string,
        "Title": string,
        "Description": string,
        "Year": number,
        "Duration": number,
        "ParentMediaId": number,
        "ParentMediaTitle": string,
        "ParentOrderInParent": number,
        "OrderInParent": number,
        "IsTrialContentAvailable": boolean,
        "AvailableFrom": string,
        "AvailableTo": string,
        "StartDateTime": string,
        "EndDateTime": string,
        "People": {
            "PersonId": number,
            "PersonFullName": string,
            "PersonRoleCode": string,
            "PersonRoleDisplayName": string
        }[],
        "Categories": {
            "CategoryId": number,
            "CategoryCode": string,
            "CategoryName": string
        }[],
        "Images": {
            "Id": number,
            "MediaId": number,
            "PlatformCode": string,
            "ImageTypeCode": string,
            "Url": string,
            "Width": number,
            "Height": number,
            "StorageSize": number
        }[],
        "Products": {
            "Id": number
        }[],
        "PurchaseOffers": {
            "MediaId": number,
            "MediaTitle": string,
            "MediaTypeCode": string,
            "MediaTypeDisplayName": string,
            "PurchasePeriodTypeCode": string,
            "PurchasePeriodTypeName": string,
            "PriceId": number,
            "Price": number,
            "CurrencyId": number,
            "CurrencyCode": string
        }[],
        "Media": {
            "Id": number,
            "Guid": string,
            "MediaTypeCode": string,
            "MediaTypeDisplayName": string,
            "MediaAgeRestrictionValueMin": number,
            "MediaAgeRestrictionImageUrl": string,
            "Title": string,
            "Description": string,
            "Year": number,
            "Duration": number,
            "ParentMediaId": number,
            "ParentMediaTitle": string,
            "ParentOrderInParent": number,
            "OrderInParent": number,
            "IsTrialContentAvailable": boolean,
            "AvailableFrom": string,
            "AvailableTo": string,
            "StartDateTime": string,
            "EndDateTime": string,
            "People": {
                "PersonId": number,
                "PersonFullName": string,
                "PersonRoleCode": string,
                "PersonRoleDisplayName": string
            }[],
            "Categories": {
                "CategoryId": number,
                "CategoryCode": string,
                "CategoryName": string
            }[],
            "Images": {
                "Id": number,
                "MediaId": number,
                "PlatformCode": string,
                "ImageTypeCode": string,
                "Url": string,
                "Width": number,
                "Height": number,
                "StorageSize": number
            }[],
            "Products": {
                "Id": number
            }[],
            "PurchaseOffers": {
                "MediaId": number,
                "MediaTitle": string,
                "MediaTypeCode": string,
                "MediaTypeDisplayName": string,
                "PurchasePeriodTypeCode": string,
                "PurchasePeriodTypeName": string,
                "PriceId": number,
                "Price": number,
                "CurrencyId": number,
                "CurrencyCode": string
            }[],
            "Media": null[],
            "SimilarMedia": null[]
        }[],
        "SimilarMedia": {
            "Id": number,
            "Guid": string,
            "MediaTypeCode": string,
            "MediaTypeDisplayName": string,
            "MediaAgeRestrictionValueMin": number,
            "MediaAgeRestrictionImageUrl": string,
            "Title": string,
            "Description": string,
            "Year": number,
            "Duration": number,
            "ParentMediaId": number,
            "ParentMediaTitle": string,
            "ParentOrderInParent": number,
            "OrderInParent": number,
            "IsTrialContentAvailable": boolean,
            "AvailableFrom": string,
            "AvailableTo": string,
            "StartDateTime": string,
            "EndDateTime": string,
            "People": {
                "PersonId": number,
                "PersonFullName": string,
                "PersonRoleCode": string,
                "PersonRoleDisplayName": string
            }[],
            "Categories": {
                "CategoryId": number,
                "CategoryCode": string,
                "CategoryName": string
            }[],
            "Images": {
                "Id": number,
                "MediaId": number,
                "PlatformCode": string,
                "ImageTypeCode": string,
                "Url": string,
                "Width": number,
                "Height": number,
                "StorageSize": number
            }[],
            "Products": {
                "Id": number
            }[],
            "PurchaseOffers": {
                "MediaId": number,
                "MediaTitle": string,
                "MediaTypeCode": string,
                "MediaTypeDisplayName": string,
                "PurchasePeriodTypeCode": string,
                "PurchasePeriodTypeName": string,
                "PriceId": number,
                "Price": number,
                "CurrencyId": number,
                "CurrencyCode": string
            }[],
            "Media": null[],
            "SimilarMedia": null[]
        }[],
        "PageSize": number,
        "PageNumber": number,
        "TotalCount": number,
        "CacheDataValidTo": string,
        "SourceType": string
    }[],
}

export interface MediaListAsync {
    loading: boolean;
    response: PostMediaListResponse[],
    error: string,
}

interface PostMediaListRequest extends MediaListAsync {
    type: typeof POST_MEDIALIST_REQUEST;
}

interface PostMediaListSuccess extends MediaListAsync {
    type: typeof POST_MEDIALIST_SUCCESS;
}

interface PostMediaListFailure extends MediaListAsync {
    type: typeof POST_MEDIALIST_FAILURE;
}

export type MediaListActionTypes = PostMediaListRequest | PostMediaListSuccess | PostMediaListFailure;