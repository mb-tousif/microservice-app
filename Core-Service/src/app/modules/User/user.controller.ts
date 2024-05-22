import httpStatus from "http-status";
import AsyncHandler from "../../../utils/asyncHandler";
import { Request, Response } from "express";
import ResponseHandler from "../../../utils/responseHandler";
import { UserService } from "./user.service";

const createUser = AsyncHandler(async (req: Request, res: Response) => {
  const payload = req.body;
  const user = await UserService.createUser(payload);
  ResponseHandler(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User signed up completed",
    data: user,
  });
});

// Get all users
const getAllUsers = AsyncHandler(async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  ResponseHandler(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All users retrieved successfully",
    data: users,
  });
});

export const UserController = {
    createUser,
    getAllUsers
};
