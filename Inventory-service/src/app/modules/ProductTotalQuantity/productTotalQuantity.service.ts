import httpStatus from "http-status";
import { IPaginationOptions } from "../../../types/common";
import { PaginationHandler } from "../../../utils/paginationHelper";
import prisma from "../../../utils/prisma";

// Post productTotalQuantity data to database
const createProductTotalQuantity = async () => {
  
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

