import httpStatus from "http-status";
import { IPaginationOptions } from "../../../types/common";
import { PaginationHandler } from "../../../utils/paginationHelper";
import prisma from "../../../utils/prisma";

// Post shipping data to database
const createShipping = async ()=> {
};

// Get all shippings
const getAllShippings = async (
  options: IPaginationOptions,
) => {
  // Handle pagination
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHandler(options);

  const result = await prisma.shipping.findMany({
    skip,
    take: limit
  });

  const count = await prisma.shipping.count();

  return {
    meta: {
      page,
      limit,
      total: count,
    },
    data: result,
  };
};

export const ShippingService = {
  createShipping,
  getAllShippings,
};

