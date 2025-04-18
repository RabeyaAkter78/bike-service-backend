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
exports.bikeService = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const CreateBike = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!data.customerId) {
        throw new Error("Customer ID is required to create a bike.");
    }
    const customerExist = yield prisma.customer.findUnique({
        where: {
            customerId: data.customerId,
        },
    });
    if (!customerExist) {
        throw new Error("Customer does not exist");
    }
    const result = yield prisma.bike.create({
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
});
const getBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.findMany();
    return result;
});
const getSingleBike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    return result;
});
exports.bikeService = {
    CreateBike,
    getBikes,
    getSingleBike,
};
