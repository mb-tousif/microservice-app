import { Model } from "mongoose";

export type TUserFilterableOptions = {
    search?: string;
    name?: string;
    role?: string;
    email?: string;
    address?: string;
}

export type TUser = {
  id?: string;
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
