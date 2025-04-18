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
exports.serviceController = void 0;
const service_service_1 = require("./service.service");
const createServiceRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceService.createServiceRecord(req.body);
        res.status(200).json({
            success: true,
            message: "Service record created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create service record",
            error: error,
        });
    }
});
const getAllService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceService.getAllService();
        res.status(200).json({
            success: true,
            message: "Service record fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get service record",
            error: error,
        });
    }
});
const getSingleService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceService.getSingleService(req.params.id);
        res.status(200).json({
            success: true,
            message: "Service record fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get service record",
            error: error,
        });
    }
});
const updateServiceStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const updatedService = Object.assign(Object.assign({}, req.body), { status: "done", completionDate: (_a = req.body.completionDate) !== null && _a !== void 0 ? _a : new Date() });
        const result = yield service_service_1.serviceService.updateServiceStatus(req.params.id, updatedService);
        res.status(200).json({
            success: true,
            message: "Service marked as completed",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update service record",
            error: error,
        });
    }
});
const getOverdueStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceService.getOverdueService();
        res.status(200).json({
            success: true,
            message: "Overdue or pending services fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get service record",
            error: error,
        });
    }
});
exports.serviceController = {
    createServiceRecord,
    getAllService,
    getSingleService,
    updateServiceStatus,
    getOverdueStatus
};
