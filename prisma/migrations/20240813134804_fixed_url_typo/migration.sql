/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "imageURL",
ADD COLUMN     "imageUrl" TEXT;
