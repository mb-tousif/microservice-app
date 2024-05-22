import { Request, Response } from "express";
import httpStatus from "http-status";
import AsyncHandler from "../../../utils/asyncHandler";
import { OrderService } from "./order.service";
import ResponseHandler from "../../../utils/responseHandler";
import { HandleQuery } from "../../../utils/handleQuery";
import { paginationFields } from "../../../types/common";

const createOrder = AsyncHandler(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await OrderService.createOrder(payload);
    
    ResponseHandler(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Order created",
        data: result,
    });
});

const getAllOrders = AsyncHandler(async (req: Request, res: Response) => {
    const options = HandleQuery(req.query, paginationFields);
    const result = await OrderService.getAllOrders( options );
    
    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Orders fetched",
        data: result,
    });
});

export const OrderController = {
    createOrder,
    getAllOrders,
};

