import { PrismaClient, serviceRecord } from "../../../generated/prisma";

const prisma = new PrismaClient();

const createServiceRecord = async (data: serviceRecord) => {
  if (!data.bikeId) {
    throw new Error("Bike ID is required to create a service record.");
  }
  const serviceData = {
    bikeId: data.bikeId,
    serviceDate: data.serviceDate,
    description: data.description,
    status: data.status,
  };

  const result = await prisma.serviceRecord.create({
    data: serviceData,
  });

  return result;
};


const getAllService= async()=>{
    const result = await prisma.serviceRecord.findMany({});
    return result;
}

export const serviceService = {
  createServiceRecord,
  getAllService
};
