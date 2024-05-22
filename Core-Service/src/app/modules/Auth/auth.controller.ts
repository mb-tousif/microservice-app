import httpStatus from "http-status";
import { AuthService } from "./auth.service";
import AsyncHandler from "../../../utils/asyncHandler";
import { Request, Response } from "express";
import ResponseHandler from "../../../utils/responseHandler";

const loginUser = AsyncHandler(async (req: Request, res: Response) => {
  const {...payload} = req.body;
  const user = await AuthService.loginUser(payload);
  ResponseHandler(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User signed up completed",
    data: user,
  });
});

const resetPassword = AsyncHandler(async (req: Request, res: Response) => {
  const {...payload} = req.body;
  const user = await AuthService.resetPassword(payload);
  ResponseHandler(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Password reset successful",
    data: user,
  });
});

export const AuthController = {
    loginUser,
    resetPassword
};

