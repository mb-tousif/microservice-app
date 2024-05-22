import httpStatus from "http-status";
import { TPayment } from "./payment.interfaces";
import prisma from "../../../utils/prisma";
import { IPaginationOptions } from "../../../types/common";
import { PaginationHandler } from "../../../utils/paginationHelper";

// Post payment data to database
const createPayment = async (payload: TPayment): Promise<TPayment> => {

  const result = await prisma.payment.create({
    data: payload,
  });
  return result;
};

// Get all payments
const getAllPayments = async (
  options: IPaginationOptions
) => {
  // Handle pagination
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHandler(options);

  const result = await prisma.payment.findMany({
    skip,
    take: limit
  });

  const count = await prisma.payment.count();

  return {
    meta: {
      page,
      limit,
      total: count,
    },
    data: result,
  };
};

export const PaymentService = {
  createPayment,
  getAllPayments,
};

