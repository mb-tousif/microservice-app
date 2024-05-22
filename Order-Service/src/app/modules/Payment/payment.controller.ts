import { Request, Response } from "express";
import httpStatus from "http-status";
import AsyncHandler from "../../../utils/asyncHandler";
import { PaymentService } from "./payment.service";
import ResponseHandler from "../../../utils/responseHandler";
import { HandleQuery } from "../../../utils/handleQuery";
import { paginationFields } from "../../../types/common";

const createPayment = AsyncHandler(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await PaymentService.createPayment(payload);

    ResponseHandler(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Payment created",
        data: result,
    });
});

const getAllPayments = AsyncHandler(async (req: Request, res: Response) => {
    const options = HandleQuery(req.query, paginationFields);
    const result = await PaymentService.getAllPayments( options );

    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Payments fetched",
        data: result,
    });
});

export const PaymentController = {
    createPayment,
    getAllPayments,
};

