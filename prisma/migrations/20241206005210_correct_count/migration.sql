/*
  Warnings:

  - You are about to drop the column `userId` on the `Week` table. All the data in the column will be lost.
  - You are about to drop the `StudyStats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudyStats" DROP CONSTRAINT "StudyStats_userId_fkey";

-- DropForeignKey
ALTER TABLE "StudyStats" DROP CONSTRAINT "StudyStats_wordId_fkey";

-- DropForeignKey
ALTER TABLE "Week" DROP CONSTRAINT "Week_userId_fkey";

-- AlterTable
ALTER TABLE "Week" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "correctCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "wrongCount" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "StudyStats";

-- DropTable
DROP TABLE "User";
