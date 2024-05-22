import { TLoginPayload, TResetPasswordPayload } from "./auth.interfaces";
import CustomApiError from "../../../Error/customErrorHandler";
import httpStatus from "http-status";
import Config from "../../../Config";
import {jwtHelpers} from "../../../utils/jwtHelper";
import { User } from "../User/user.model"; // Add this import statement

const loginUser = async ( payload: TLoginPayload ) => {
    const { email, password } = payload;
    const isUserExists = await User.findOne({ email});
    if (!isUserExists) {
        throw new CustomApiError( httpStatus.NOT_FOUND, 'No user found with this email');
    }
    // compare password
    const isPasswordMatch = await User.comparePassword(password, isUserExists.password);
    if (!isPasswordMatch) {
        throw new CustomApiError(
          httpStatus.UNAUTHORIZED,
          "Authentication failed 🕵🏿, incorrect credentials 💥!"
        );
    }
    // generate token
    const { _id:id, role } = isUserExists;
    const token = jwtHelpers.createToken({ id, role }, Config.jwt.secret as string, Config.jwt.expires_in as string);
    return { accessToken: token };
}

// Reset password
const resetPassword = async ( payload: TResetPasswordPayload ) => {
    const { email, password } = payload;
    const isUserExists = await User.findOne({ email });
    if (!isUserExists) {
        throw new CustomApiError(httpStatus.NOT_FOUND, 'No user found with this email');
    }
    isUserExists.password = password;
    const result = await isUserExists.save();
    return result;
}

export const AuthService = {
    loginUser,
    resetPassword
};

