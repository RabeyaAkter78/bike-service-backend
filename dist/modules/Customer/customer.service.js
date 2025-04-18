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
exports.customerService = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
    };
    const result = yield prisma.customer.create({
        data: customerData,
    });
    return result;
});
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findMany();
    return result;
});
const getSIngleCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    return result;
});
const updateCustomer = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.update({
        where: {
            customerId: id,
        },
        data: data,
    });
    return result;
});
const deletCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.customerService = {
    createCustomer,
    getCustomers,
    getSIngleCustomer,
    updateCustomer,
    deletCustomer
};
