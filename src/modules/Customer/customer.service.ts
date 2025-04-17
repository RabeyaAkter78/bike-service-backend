import { PrismaClient } from "../../../generated/prisma";

const prisma=new PrismaClient();

const createCustomer = async (data: any) => {
  const customerData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
  };

  const result= await prisma.customer.create({
    data: customerData
  })
  return result
};

export const customerService = {
  createCustomer,
};