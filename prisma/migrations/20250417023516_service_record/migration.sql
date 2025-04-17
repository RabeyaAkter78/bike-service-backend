-- CreateEnum
CREATE TYPE "RecordStatus" AS ENUM ('pending', 'in_progress', 'done');

-- CreateTable
CREATE TABLE "serviceRecord" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "RecordStatus" NOT NULL,

    CONSTRAINT "serviceRecord_pkey" PRIMARY KEY ("serviceId")
);

-- AddForeignKey
ALTER TABLE "serviceRecord" ADD CONSTRAINT "serviceRecord_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike Table"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
