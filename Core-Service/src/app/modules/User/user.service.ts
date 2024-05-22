import httpStatus from "http-status";
import CustomApiError from "../../../Error/customErrorHandler";
import { TUser } from "./user.interfaces";
import { User } from "./user.model";

// Create a new user
const createUser = async (userInfo: TUser) => {
  const result = await User.create(userInfo);
  if (!result) {
    throw new CustomApiError(httpStatus.BAD_REQUEST, "User not created");
  }
  return result;
};

// Get all users
const getAllUsers = async () => {
  const result = await User.find()
    .select("-password");
  if (!result) {
    throw new CustomApiError(httpStatus.NOT_FOUND, "No users found");
  }
  return result;
};

export const UserService = {
    createUser,
    getAllUsers
};

