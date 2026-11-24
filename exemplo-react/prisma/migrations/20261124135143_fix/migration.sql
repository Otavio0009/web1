/*
  Warnings:

  - You are about to drop the column `Complited` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `texr` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `text` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "Complited",
DROP COLUMN "texr",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "text" TEXT NOT NULL;
