
export type TPayment = {
    id?: string;
    orderId: string;
    userId: string;
    amount: number;
    status: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
};

