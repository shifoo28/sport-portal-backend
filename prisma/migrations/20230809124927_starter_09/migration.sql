/*
  Warnings:

  - You are about to drop the column `text` on the `News` table. All the data in the column will be lost.
  - Added the required column `textRu` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textTm` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" DROP COLUMN "text",
ADD COLUMN     "textRu" TEXT NOT NULL,
ADD COLUMN     "textTm" TEXT NOT NULL;
