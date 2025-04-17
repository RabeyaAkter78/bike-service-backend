/*
  Warnings:

  - You are about to drop the `serviceRecord` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "serviceRecord" DROP CONSTRAINT "serviceRecord_bikeId_fkey";

-- DropTable
DROP TABLE "serviceRecord";

-- CreateTable
CREATE TABLE " ServiceRecord Table" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "RecordStatus" NOT NULL,

    CONSTRAINT " ServiceRecord Table_pkey" PRIMARY KEY ("serviceId")
);

-- AddForeignKey
ALTER TABLE " ServiceRecord Table" ADD CONSTRAINT " ServiceRecord Table_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike Table"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
