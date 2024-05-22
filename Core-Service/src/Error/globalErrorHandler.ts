import { ErrorRequestHandler } from "express";
import RateLimitError from "express-rate-limit";
import { ZodError } from "zod";
import config from "../Config";
import CustomApiError from "./customErrorHandler";
import {IGenericErrorMessage} from "../types/error"
import HandleZodError from "./zodError";
import httpStatus from "http-status";
import MongooseValidationError from "./mongooseValidationError";

const GlobalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === "development"
    ? console.log(`Global Error Stack 💥`, error)
    : console.log(`Global Error Stack 💥`, error);
  let statusCode;
  let message;
  let errorMessages: IGenericErrorMessage[] = [];
  if (error instanceof RateLimitError) {
    statusCode =  httpStatus.TOO_MANY_REQUESTS;
    message = "Exceeded the limit of requests";
    errorMessages = [
      {
        path: "rate-limit",
        message: "Too many requests, please try again later.",
      },
    ];
  }
  else if (error?.name === "ValidationError") {
    const simplifiedError = MongooseValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = HandleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof CustomApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(httpStatus.BAD_REQUEST).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? error?.stack : undefined,
  });

  next();
};

export default GlobalErrorHandler;