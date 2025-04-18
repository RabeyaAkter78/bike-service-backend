import { get } from "http";
import { Customer, PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

const createCustomer = async (data: Customer) => {
  const customerData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
  };

  const result = await prisma.customer.create({
    data: customerData,
  });
  return result;
};

const getCustomers = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSIngleCustomer = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  return result;
};

const updateCustomer = async (id: string, data: Customer) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: data,
  });
  return result;
};


const deletCustomer=async(id:string)=>{
  const result= await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result 
}

export const customerService = {
  createCustomer,
  getCustomers,
  getSIngleCustomer,
  updateCustomer,
  deletCustomer
};
