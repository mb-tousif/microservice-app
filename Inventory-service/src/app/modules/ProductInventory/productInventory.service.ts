import httpStatus from "http-status";
import { IPaginationOptions } from "../../../types/common";
import { PaginationHandler } from "../../../utils/paginationHelper";
import prisma from "../../../utils/prisma";

// Post productInventory data to database
const createProductInventory = async () => {
};

// Get all productInventory
const getAllProductInventory = async (
  options: IPaginationOptions,
) => {
  // Handle pagination
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHandler(options);

  const result = await prisma.productInventory.findMany({
    skip,
    take: limit
  });
  const count = await prisma.productInventory.count();

  return {
    meta: {
      page,
      limit,
      total: count,
    },
    data: result,
  };
};


export const productInventoryService = {
  createProductInventory,
  getAllProductInventory,
};

