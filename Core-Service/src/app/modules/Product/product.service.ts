import httpStatus from "http-status";
import { TProduct, TProductFilterableOptions } from "./product.interfaces";
import { Product } from "./product.model";
import CustomApiError from "../../../Error/customErrorHandler";
import { PaginationHandler } from "../../../utils/paginationHelper";
import { IPaginationOptions } from "../../../types/common";
import { userSearchableFields } from "../User/user.constants";
import { SortOrder } from "mongoose";

const createProduct = async ( payload: TProduct ) => {
    const isProductExist = await Product.findOne({ title: payload.title });
    if (isProductExist) {
        throw new CustomApiError(httpStatus.BAD_REQUEST, "Product already exist with this title");
    }
    const result = await Product.create(payload);
    if (!result) {
        throw new CustomApiError(httpStatus.BAD_REQUEST, "Product not created");
    }
    return result;
}

const getAllProducts = async ( 
    options:IPaginationOptions, 
    filters:TProductFilterableOptions ) => {
        const { search, ...filtersData } = filters;
        const { page, skip, limit, sortBy, sortOrder } = PaginationHandler(options);
        const andConditions = [];
        if (search) {
            andConditions.push({
                $or: userSearchableFields.map((field) => ({
                    [field]: { $regex: search, $options: "i" },
                })),
            });
        }

        if (Object.keys(filtersData).length) {
            andConditions.push({
                $and: Object.entries(filtersData).map(([field, value]) => ({
                    [field]: value,
                })),
            });
        }

        const sortConditions: { [key: string]: SortOrder } = {};
        if (sortBy && sortOrder) {
            sortConditions[sortBy] = sortOrder;
        }
        const whereConditions =
            andConditions.length > 0 ? { $and: andConditions } : {};

        const result = await Product.find(whereConditions)
        .skip(skip).limit(limit).lean();
        const total = await Product.countDocuments(whereConditions);

        return {
            meta: {
                page,
                limit,
                total,
            },
            data: result,
        };
};

const getProductById = async ( payload: string ) => {
    const product = await Product.findById({ _id: payload });
    if (!product) {
        throw new CustomApiError(httpStatus.NOT_FOUND, "Product not found");
    }
    return product;
};

const updateProduct = async ( id:string, payload: TProduct ) => {
    const product = await Product.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!product) {
        throw new CustomApiError(httpStatus.NOT_FOUND, "Product update failed");
    }
    return product;
}

const deleteProduct = async ( id:string ) => {
    const product = await Product.findByIdAndDelete({ _id: id });
    if (!product) {
        throw new CustomApiError(httpStatus.NOT_FOUND, "Product delete failed");
    }
    return product;
}


export const ProductService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};

