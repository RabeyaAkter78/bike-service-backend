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
exports.customerController = void 0;
const customer_service_1 = require("./customer.service");
const craeteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.createCustomer(req.body);
        res.status(200).json({
            success: true,
            message: "Customer created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create customer",
            error: error,
        });
    }
});
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.getCustomers();
        res.status(200).json({
            success: true,
            message: "Customers fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get customers",
            error: error,
        });
    }
});
const getSingleCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.getSIngleCustomer(req.params.id);
        res.status(200).json({
            success: true,
            message: "Customer fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get customer",
            error: error,
        });
    }
});
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.updateCustomer(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update customer",
            error: error,
        });
    }
});
const deleteCUstomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.deletCustomer(req.params.id);
        res.status(200).json({
            success: true,
            message: "Customer deleted successfully",
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update customer",
            error: error,
        });
    }
});
exports.customerController = {
    craeteCustomer,
    getCustomers,
    getSingleCustomer,
    updateCustomer,
    deleteCUstomer
};
