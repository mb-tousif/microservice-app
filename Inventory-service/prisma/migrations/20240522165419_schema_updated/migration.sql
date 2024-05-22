/*
  Warnings:

  - Added the required column `updatedAt` to the `product_inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `product_total_quantity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_inventory" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "product_total_quantity" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
