export interface ReviewProps {
    name: string;
    relativePublishTimeDescription: string;
    rating: number;
    text: {
        text: string;
        languageCode: string;
    },
    originalText: {
        text: string;
        languageCode: string;
    },
    authorAttribution: {
        displayName: string;
        uri: string;
        photoUri: string;
    },
    publishTime: string;
    flagContentUri: string;
    googleMapsUri: string;
}