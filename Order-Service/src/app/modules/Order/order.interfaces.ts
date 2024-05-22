export type TOrder = {
  id?: string;
  productId: string;
  quantity: number;
  price: number;
  status?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};
