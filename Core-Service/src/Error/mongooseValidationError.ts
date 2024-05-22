import mongoose from "mongoose";
import { IGenericErrorResponse } from "../types/common";
import { IGenericErrorMessage } from "../types/error";
import httpStatus from "http-status";

const MongooseValidationError = (
  error: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );
  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: "Validation Error",
    errorMessages: errors,
  };
};

export default MongooseValidationError;
