import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

const CreateBike = async (data: any) => {
  if (!data.customerId) {
    throw new Error("Customer ID is required to create a bike.");
  }

  const customerExist = await prisma.customer.findUnique({
    where: {
      customerId: data.customerId,
    },
  });

  if (!customerExist) {
    throw new Error("Customer does not exist");
  }

  const result = await prisma.bike.create({
    data: {
      brand: data.brand,
      model: data.model,
      year: data.year,
      customer: {
        connect: { customerId: data.customerId },
      },
    },
  });

  return result;
};

const getBikes = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getSingleBike = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const bikeService = {
  CreateBike,
  getBikes,
  getSingleBike,
};
