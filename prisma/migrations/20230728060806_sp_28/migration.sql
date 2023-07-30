/*
  Warnings:

  - You are about to drop the column `categoryId` on the `News` table. All the data in the column will be lost.
  - You are about to drop the `CategoryNews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_categoryId_fkey";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "categoryId",
ADD COLUMN     "newsCategoryId" INTEGER;

-- DropTable
DROP TABLE "CategoryNews";

-- CreateTable
CREATE TABLE "NewsCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "NewsCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsCategory_name_key" ON "NewsCategory"("name");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_newsCategoryId_fkey" FOREIGN KEY ("newsCategoryId") REFERENCES "NewsCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
