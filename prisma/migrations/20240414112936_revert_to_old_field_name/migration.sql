/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Issue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Issue` DROP COLUMN `createdAt`,
    ADD COLUMN `create` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
