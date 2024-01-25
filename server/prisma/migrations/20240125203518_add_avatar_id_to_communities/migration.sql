-- AlterTable
ALTER TABLE "communities" ADD COLUMN     "avatar_id" TEXT;

-- AddForeignKey
ALTER TABLE "communities" ADD CONSTRAINT "communities_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE CASCADE;
