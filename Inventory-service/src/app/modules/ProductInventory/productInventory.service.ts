import httpStatus from "http-status";
import { IPaginationOptions } from "../../../types/common";
import { PaginationHandler } from "../../../utils/paginationHelper";
import prisma from "../../../utils/prisma";
import { TProductInventory } from "./productInventory.interfaces";
import CustomApiError from "../../../Error/customErrorHandler";

// Post productInventory data to database
const createProductInventory = async ( payload:TProductInventory) => {
  const isProductInventoryExist = await prisma.productInventory.findFirst({
    where: {
      productId: payload.productId,
    },
  });

  if (isProductInventoryExist) {
    throw new CustomApiError( httpStatus.BAD_REQUEST, "Product Inventory created, if you want to update quantity please use update API");
};

    const result = await prisma.productInventory.create({
      data: {
        productId: payload.productId,
        soldQuantity: payload.soldQuantity,
        shippedQuantity: payload.shippedQuantity,
        availableQuantity: payload.availableQuantity,
        productTotalQuantityId: payload.productTotalQuantityId,
      },
    });
    
    if (!result) {
      throw new CustomApiError(httpStatus.INTERNAL_SERVER_ERROR, "Product Inventory not created");
    }

    return result;
  }


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

const getProductInventoryById = async ( id: string) => {
  const result = await prisma.productInventory.findUnique({
    where: {
      productId: id,
    },
  });

  if (!result) {
    throw new CustomApiError(httpStatus.NOT_FOUND, "Product Inventory not found");
  }

  return result;
}

const updateProductInventory = async ( id: string, payload: TProductInventory) => {
  const result = await prisma.productInventory.update({
    where: {
      productId: id,
    },
    data: payload,
  });

  if (!result) {
    throw new CustomApiError(httpStatus.INTERNAL_SERVER_ERROR, "Product Inventory not updated");
  }

  return result;
}


export const ProductInventoryService = {
  createProductInventory,
  getAllProductInventory,
  getProductInventoryById,
  updateProductInventory
};

