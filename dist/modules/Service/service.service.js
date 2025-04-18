"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceService = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createServiceRecord = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!data.bikeId) {
        throw new Error("Bike ID is required to create a service record.");
    }
    const serviceData = {
        bikeId: data.bikeId,
        serviceDate: data.serviceDate,
        description: data.description,
        status: data.status,
    };
    const result = yield prisma.serviceRecord.create({
        data: serviceData,
    });
    return result;
});
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.serviceRecord.findMany({});
    return result;
});
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const updateServiceStatus = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: data,
    });
    return result;
});
const getOverdueService = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));
    const result = yield prisma.serviceRecord.findMany({
        where: {
            status: { in: ["pending", "in_progress"] },
            serviceDate: { lt: sevenDaysAgo },
        },
    });
    return result;
});
exports.serviceService = {
    createServiceRecord,
    getAllService,
    getSingleService,
    updateServiceStatus,
    getOverdueService,
};
