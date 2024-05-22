import httpStatus from "http-status";
import CustomApiError from "../../../Error/customErrorHandler";
import { TUser, TUserFilterableOptions } from "./user.interfaces";
import { User } from "./user.model";
import { IPaginationOptions } from "../../../types/common";
import { PaginationHandler } from "../../../utils/paginationHelper";
import { userSearchableFields } from "./user.constants";
import { SortOrder } from "mongoose";

// Create a new user
const createUser = async (userInfo: TUser) => {
  const result = await User.create(userInfo);
  if (!result) {
    throw new CustomApiError(httpStatus.BAD_REQUEST, "User not created");
  }
  return result;
};

// Get all users
const getAllUsers = async ( options:IPaginationOptions, filters:TUserFilterableOptions) => {
   const { search, ...filtersData } = filters;
   const { page, skip, limit, sortBy, sortOrder } = PaginationHandler(options);
   const andConditions = [];
    if (search) {
        andConditions.push({
          $or: userSearchableFields.map((field) => ({
            [field]: { $regex: search, $options: "i" },
          })),
        });
    }

    if (Object.keys(filtersData).length) {
      andConditions.push({
        $and: Object.entries(filtersData).map(([field, value]) => ({
          [field]: value,
        })),
      });
    }

    const sortConditions: { [key: string]: SortOrder } = {};
    if (sortBy && sortOrder) {
      sortConditions[sortBy] = sortOrder;
    }
    const whereConditions =
      andConditions.length > 0 ? { $and: andConditions } : {};

    const result = await User.find(whereConditions)
    .skip(skip).limit(limit);
    const total = await User.countDocuments(whereConditions);
    return {
      meta: {
        page,
        limit,
        total,
      },
      data: result,
    };
};

export const UserService = {
    createUser,
    getAllUsers
};

