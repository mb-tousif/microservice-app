import httpStatus from "http-status";
import { TOrder } from "./order.interfaces";
import prisma from "../../../utils/prisma";
import { IPaginationOptions } from "../../../types/common";
import { PaginationHandler } from "../../../utils/paginationHelper";

// Post order data to database
const createOrder = async (payload: TOrder) => {
  const result = await prisma.order.create({
    data: payload,
  });
  return result;
};

// Get all orders
const getAllOrders = async (options: IPaginationOptions) => {
  // Handle pagination
  const { page, limit, skip, sortBy, sortOrder } = PaginationHandler(options);

  const result = await prisma.order.findMany({
    skip,
    take: limit,
  });

  const count = await prisma.order.count();

  return {
    meta: {
      page,
      limit,
      total: count,
    },
    data: result,
  };
};

export const OrderService = {
  createOrder,
  getAllOrders,
};
