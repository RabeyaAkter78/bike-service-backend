-- CreateTable
CREATE TABLE "Customer Table" (
    "customerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer Table_pkey" PRIMARY KEY ("customerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer Table_email_key" ON "Customer Table"("email");
