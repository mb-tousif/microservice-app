import { Model } from "mongoose";

export type TProduct = {
  _id?: string;
  title: string;
  price: string;
  description?: string;
  imgUrl?: string;
  status?: string;
};

export type ProductModel = Model<TProduct, Record<string, unknown>>;

export type TProductFilterableOptions = {
  search?: string;
  price?: string;
  status?: string;
  title?: string;
};
