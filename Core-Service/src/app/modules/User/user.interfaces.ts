import { Model } from "mongoose";

export type TUserFilterableOptions = {
    search?: string;
}

export type TUser = {
  _id?: string;
  name?: string;
  email: string;
  password: string;
  profilePic?: string;
  role: string;
  gender?: string;
  contactNo?: string;
  address?: string;
  orderId?: string[];
};

export type UserModel = {
  comparePassword(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<TUser>;
