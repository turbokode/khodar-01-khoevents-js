-- CreateEnum
CREATE TYPE "StatusEnum" AS ENUM ('PUBLISHED', 'CANCELLED');

-- CreateTable
CREATE TABLE "files" (
    "id" TEXT NOT NULL,
    "original_name" VARCHAR(255) NOT NULL,
    "filename" VARCHAR(255) NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "limit" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "status" "StatusEnum" NOT NULL DEFAULT 'PUBLISHED',
    "startTime" VARCHAR(5) NOT NULL,
    "endTime" VARCHAR(5) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "communityId" TEXT NOT NULL,
    "banner_id" TEXT NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "communities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_banner_id_fkey" FOREIGN KEY ("banner_id") REFERENCES "files"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
