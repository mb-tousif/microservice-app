import { Request, Response } from "express";
import httpStatus from "http-status";
import AsyncHandler from "../../../utils/asyncHandler";
import { ProductTotalQuantityService } from "./productTotalQuantity.service";
import ResponseHandler from "../../../utils/responseHandler";
import { HandleQuery } from "../../../utils/handleQuery";
import { paginationFields } from "../../../types/common";

const createProductTotalQuantity = AsyncHandler(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await ProductTotalQuantityService.createProductTotalQuantity(payload);

    ResponseHandler(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Product Total Quantity created",
        data: result,
    });
});

const getAllProductTotalQuantity = AsyncHandler(async (req: Request, res: Response) => {
    const options = HandleQuery(req.query, paginationFields);
    const result = await ProductTotalQuantityService.getAllProductTotalQuantity( options );

    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product Total Quantity fetched",
        data: result,
    });
});

export const productTotalQuantityController = {
    createProductTotalQuantity,
    getAllProductTotalQuantity,
};

