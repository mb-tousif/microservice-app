import httpStatus from "http-status";
import { IPaginationOptions } from "../../../types/common";
import { PaginationHandler } from "../../../utils/paginationHelper";
import prisma from "../../../utils/prisma";
import { TProductTotalQuantity } from "./productTotalQuantity.interfaces";
import CustomApiError from "../../../Error/customErrorHandler";

// Post productTotalQuantity data to database
const createProductTotalQuantity = async ( payload:TProductTotalQuantity) => {
  const isProductTotalQuantityExist = await prisma.productTotalQuantity.findFirst({
    where: {
      productId: payload.productId,
    },
  });

  if (isProductTotalQuantityExist) {
    throw new CustomApiError( httpStatus.BAD_REQUEST, "Product Total Quantity created, if you want to update quantity please use update API");
  }

  const result = await prisma.productTotalQuantity.create({
    data: {
      quantity: payload.quantity,
      productId: payload.productId,
      status: payload.status,
    },
  });

  if (!result) {
    throw new CustomApiError(httpStatus.INTERNAL_SERVER_ERROR, "Product Total Quantity not created");
  }

  return result;
};

// Get all productTotalQuantity
const getAllProductTotalQuantity = async (
  options: IPaginationOptions
) => {
  // Handle pagination
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHandler(options);
  const result = await prisma.productTotalQuantity.findMany({
    skip,
    take: limit,
  });

  const count = await prisma.productTotalQuantity.count();

  return {
    meta: {
      page,
      limit,
      total: count,
    },
    data: result,
  };
};

export const ProductTotalQuantityService = {
  createProductTotalQuantity,
  getAllProductTotalQuantity,
};

