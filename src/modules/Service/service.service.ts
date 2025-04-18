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

const getAllService = async () => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};

const getSingleService = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });
  return result;
};

const updateServiceStatus = async (id: string, data: serviceRecord) => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: data,
  });
  return result;
};



const getOverdueService = async () => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));

  const result = await prisma.serviceRecord.findMany({
    where: {
      status: { in: ["pending", "in_progress"] },
      serviceDate: { lt: sevenDaysAgo },
    },
   
   
  });

  return result;
};

export const serviceService = {
  createServiceRecord,
  getAllService,
  getSingleService,
  updateServiceStatus,
  getOverdueService,
};
