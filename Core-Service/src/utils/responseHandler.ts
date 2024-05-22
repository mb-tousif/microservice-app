import { Response } from "express";
type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    totalPages: number;
  };
  data?: T | null;
};

const ResponseHandler = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    meta: data.meta,
    data: data.data,
  };

  res.status(data.statusCode).json(responseData);
};

export default ResponseHandler;
