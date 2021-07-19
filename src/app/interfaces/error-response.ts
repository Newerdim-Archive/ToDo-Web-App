import { BaseResponse } from "./base-response";

export interface ErrorResponse extends BaseResponse {
    errors?: [{
        title: string,
        messages: string[]
    }]
}