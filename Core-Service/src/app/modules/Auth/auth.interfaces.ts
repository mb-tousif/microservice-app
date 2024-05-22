
export type TLoginPayload = {
    email: string;
    password: string;
};

export type TResetPasswordPayload = {
    email: string;
    password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
};