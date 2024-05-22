import { Request, Response } from "express";
import httpStatus from "http-status";
import AsyncHandler from "../../../utils/asyncHandler";
import { ShippingService } from "./shipping.service";
import ResponseHandler from "../../../utils/responseHandler";
import { HandleQuery } from "../../../utils/handleQuery";
import { paginationFields } from "../../../types/common";

const createShipping = AsyncHandler(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await ShippingService.createShipping(payload);

    ResponseHandler(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Shipping created",
        data: result,
    });
});

const getAllShipping = AsyncHandler(async (req: Request, res: Response) => {
    const options = HandleQuery(req.query, paginationFields);
    const result = await ShippingService.getAllShipping( options );

    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Shipping fetched",
        data: result,
    });
});

export const ShippingController = {
    createShipping,
    getAllShipping,
};

