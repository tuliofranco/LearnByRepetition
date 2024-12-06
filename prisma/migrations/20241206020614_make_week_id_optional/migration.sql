-- DropForeignKey
ALTER TABLE "Word" DROP CONSTRAINT "Word_weekId_fkey";

-- AlterTable
ALTER TABLE "Word" ALTER COLUMN "weekId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "Week"("id") ON DELETE SET NULL ON UPDATE CASCADE;
