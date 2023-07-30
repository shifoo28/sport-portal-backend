/*
  Warnings:

  - Made the column `newsCategoryId` on table `News` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_newsCategoryId_fkey";

-- AlterTable
ALTER TABLE "News" ALTER COLUMN "newsCategoryId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_newsCategoryId_fkey" FOREIGN KEY ("newsCategoryId") REFERENCES "NewsCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
