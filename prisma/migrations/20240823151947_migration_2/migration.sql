-- DropIndex
DROP INDEX "Task_id_key";

-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "Task" ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
