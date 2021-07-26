import { BaseResponse } from './base-response';

export interface SuccessWithDataResponse<TData> extends BaseResponse {
  data: TData;
}
