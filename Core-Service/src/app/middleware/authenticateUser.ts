import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { JwtPayload, Secret } from "jsonwebtoken";
import { jwtHelpers } from "../../utils/jwtHelper";
import CustomApiError from "../../Error/customErrorHandler";
import Config from "../../Config";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload | null;
    }
  }
}

const AuthenticateUser = () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new CustomApiError(
          httpStatus.UNAUTHORIZED,
          "Access denied, token missing 💥"
        );
      }
      // verify token
      let verifiedUser: JwtPayload | null = null;
      verifiedUser = jwtHelpers.verifyToken(token, Config.jwt.secret as Secret);
      req.user = verifiedUser;
      next();
    } catch (error) {
      next(error);
    }
  };

export default AuthenticateUser;
