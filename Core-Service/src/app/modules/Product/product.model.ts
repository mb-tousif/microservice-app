import { Schema, model } from "mongoose";
import { TProduct, ProductModel } from "./product.interfaces";

const productSchema = new Schema<TProduct>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      default:
        "Product Description is not available, Please contact the seller for more information.",

    },
    price: {
      type: String,
      required: [true, "Price is required"],
    },
    imgUrl: {
      type: String,
      default:
        "https://img.freepik.com/premium-photo/full-shopping-basket-with-products-isolated-white_771335-31758.jpg",
    },
    status: {
      type: String,
      enum: ["available", "sold out", "coming soon"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model<TProduct, ProductModel>("Product", productSchema);