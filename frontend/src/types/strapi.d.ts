/* eslint camelcase: "off" */
export interface Recipe {
    id: 1;
    attributes: {
        title: string;
        content: string;
        completion_time: number;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

export interface Error {
    status: number | string;
    name: string;
    message: string;
    details: {
        // error info specific to the error type
    };
}
