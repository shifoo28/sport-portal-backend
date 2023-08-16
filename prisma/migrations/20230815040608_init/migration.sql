-- CreateEnum
CREATE TYPE "Sections" AS ENUM ('Local', 'World', 'Video');

-- CreateTable
CREATE TABLE "Lang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BaseCategory" (
    "id" TEXT NOT NULL,
    "nameTm" TEXT NOT NULL,
    "nameRu" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BaseCategory_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "textTm" TEXT NOT NULL,
    "textRu" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "nameTm" TEXT NOT NULL,
    "nameRu" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Videos" (
    "id" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "nameTm" TEXT NOT NULL,
    "nameRu" TEXT NOT NULL,
    "videoPath" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Videos_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "Lang_name_key" ON "Lang"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BaseCategory_nameTm_nameRu_key" ON "BaseCategory"("nameTm", "nameRu");

-- CreateIndex
CREATE UNIQUE INDEX "SportCategories_nameTm_nameRu_section_key" ON "SportCategories"("nameTm", "nameRu", "section");

-- CreateIndex
CREATE UNIQUE INDEX "News_nameTm_nameRu_key" ON "News"("nameTm", "nameRu");

-- CreateIndex
CREATE UNIQUE INDEX "Videos_nameTm_nameRu_key" ON "Videos"("nameTm", "nameRu");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "SportCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Videos" ADD CONSTRAINT "Videos_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "SportCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
