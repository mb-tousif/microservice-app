import { Request, Response } from "express";
import httpStatus from "http-status";
import { ProductInventoryService } from "./productInventory.service";
import AsyncHandler from "../../../utils/asyncHandler";
import ResponseHandler from "../../../utils/responseHandler";
import { HandleQuery } from "../../../utils/handleQuery";
import { paginationFields } from "../../../types/common";

const createProductInventory = AsyncHandler(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await ProductInventoryService.createProductInventory(payload);

    ResponseHandler(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Product Inventory created",
    data: result,
  });
});

const getAllProductInventory = AsyncHandler(async (req: Request, res: Response) => {
  const options = HandleQuery(req.query, paginationFields);
  const result = await ProductInventoryService.getAllProductInventory(options);

  ResponseHandler(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Inventory fetched",
    data: result,
  });
});

const getProductInventoryById = AsyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ProductInventoryService.getProductInventoryById(id);
    
    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product Inventory fetched",
        data: result,
    });
});

const updateProductInventory = AsyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await ProductInventoryService.updateProductInventory(id, payload);

    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product Inventory updated",
        data: result,
    });
})

export const ProductInventoryController = {
    createProductInventory,
    getAllProductInventory,
    getProductInventoryById,
    updateProductInventory
};

