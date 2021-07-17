export type ErrorResponse = {
    message: string,
    errors?: {
        title: string,
        messages: string[]
    }
}

export type SuccessResponse = {
    message: string
}

export type SuccessWithDataResponse<TData> = {
    message: string,
    data: TData
}