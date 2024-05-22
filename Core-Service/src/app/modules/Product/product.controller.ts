import { Request, Response } from "express";
import httpStatus from "http-status";
import { ProductService } from "./product.service";
import ResponseHandler from "../../../utils/responseHandler";
import AsyncHandler from "../../../utils/asyncHandler";
import { HandleQuery } from "../../../utils/handleQuery";
import { paginationFields } from "../../../types/common";
import { productFilterAbleField } from "./product.constants";

const createProduct = AsyncHandler(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await ProductService.createProduct(payload);
  ResponseHandler(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});

const getAllProducts = AsyncHandler(async (req: Request, res: Response) => {
     const options = HandleQuery(req.query, paginationFields);
  const filters = HandleQuery(req.query, productFilterAbleField);
    const result = await ProductService.getAllProducts(options, filters);
    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All products retrieved successfully",
        data: result,
    });
});

const getProductById = AsyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ProductService.getProductById(id);
    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product retrieved successfully",
        data: result,
    });
});

const updateProduct = AsyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await ProductService.updateProduct(id, payload);
    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product updated successfully",
        data: result,
    });
})

const deleteProduct = AsyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ProductService.deleteProduct(id);
    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product deleted successfully",
        data: result,
    });
});

export const ProductController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};

