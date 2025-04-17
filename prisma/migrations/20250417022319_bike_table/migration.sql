-- CreateTable
CREATE TABLE "Bike Table" (
    "bikeId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Bike Table_pkey" PRIMARY KEY ("bikeId")
);

-- AddForeignKey
ALTER TABLE "Bike Table" ADD CONSTRAINT "Bike Table_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer Table"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;
