/*
  Warnings:

  - The primary key for the `BaseCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `BaseCategory` table. All the data in the column will be lost.
  - The primary key for the `Lang` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `News` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `newsCategoryId` on the `News` table. All the data in the column will be lost.
  - The primary key for the `Videos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Videos` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `Videos` table. All the data in the column will be lost.
  - You are about to drop the `NewsCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VideoCategory` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nameTm,nameRu]` on the table `BaseCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameTm,nameRu]` on the table `News` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameTm,nameRu]` on the table `Videos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameRu` to the `BaseCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameTm` to the `BaseCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `BaseCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Lang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagePath` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameRu` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameTm` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `views` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagePath` to the `Videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameRu` to the `Videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameTm` to the `Videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoPath` to the `Videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `views` to the `Videos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sections" AS ENUM ('Local', 'World', 'Video');

-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_newsCategoryId_fkey";

-- DropIndex
DROP INDEX "BaseCategory_name_key";

-- AlterTable
ALTER TABLE "BaseCategory" DROP CONSTRAINT "BaseCategory_pkey",
DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nameRu" TEXT NOT NULL,
ADD COLUMN     "nameTm" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "BaseCategory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "BaseCategory_id_seq";

-- AlterTable
ALTER TABLE "Lang" DROP CONSTRAINT "Lang_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Lang_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Lang_id_seq";

-- AlterTable
ALTER TABLE "News" DROP CONSTRAINT "News_pkey",
DROP COLUMN "name",
DROP COLUMN "newsCategoryId",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "imagePath" TEXT NOT NULL,
ADD COLUMN     "nameRu" TEXT NOT NULL,
ADD COLUMN     "nameTm" TEXT NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "text" DROP NOT NULL,
ADD CONSTRAINT "News_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "News_id_seq";

-- AlterTable
ALTER TABLE "Videos" DROP CONSTRAINT "Videos_pkey",
DROP COLUMN "name",
DROP COLUMN "path",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imagePath" TEXT NOT NULL,
ADD COLUMN     "nameRu" TEXT NOT NULL,
ADD COLUMN     "nameTm" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "videoPath" TEXT NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Videos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Videos_id_seq";

-- DropTable
DROP TABLE "NewsCategory";

-- DropTable
DROP TABLE "VideoCategory";

-- CreateTable
CREATE TABLE "SportCategories" (
    "id" TEXT NOT NULL,
    "nameTm" TEXT NOT NULL,
    "nameRu" TEXT NOT NULL,
    "section" "Sections" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SportCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ads" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SportCategories_nameTm_nameRu_section_key" ON "SportCategories"("nameTm", "nameRu", "section");

-- CreateIndex
CREATE UNIQUE INDEX "BaseCategory_nameTm_nameRu_key" ON "BaseCategory"("nameTm", "nameRu");

-- CreateIndex
CREATE UNIQUE INDEX "News_nameTm_nameRu_key" ON "News"("nameTm", "nameRu");

-- CreateIndex
CREATE UNIQUE INDEX "Videos_nameTm_nameRu_key" ON "Videos"("nameTm", "nameRu");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "SportCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Videos" ADD CONSTRAINT "Videos_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "SportCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
