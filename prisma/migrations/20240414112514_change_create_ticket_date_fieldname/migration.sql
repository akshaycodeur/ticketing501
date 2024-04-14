/*
  Warnings:

  - You are about to drop the column `create` on the `Issue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Issue` DROP COLUMN `create`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
