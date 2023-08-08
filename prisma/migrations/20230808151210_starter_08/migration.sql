/*
  Warnings:

  - Made the column `text` on table `News` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "News" ALTER COLUMN "text" SET NOT NULL;
