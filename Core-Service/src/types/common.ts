import { IGenericErrorMessage } from "./error";

export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export const paginationFields = ["page", "limit", "sortBy", "sortOrder"];

export interface IBookingInfo {
  roomNo: string;
  date: string;
  status: string;
}