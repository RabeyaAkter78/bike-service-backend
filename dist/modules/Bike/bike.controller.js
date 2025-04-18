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
exports.bikeController = void 0;
const bike_service_1 = require("./bike.service");
const createBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeService.CreateBike(req.body);
        res.status(200).json({
            success: true,
            message: "Bike Added successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to add bike",
            error: error instanceof Error ? error.message : "An unknown error occurred",
        });
    }
});
const getBikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeService.getBikes();
        res.status(200).json({
            success: true,
            message: "Bikes fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get bikes",
            error: error instanceof Error ? error.message : "An unknown error occurred",
        });
    }
});
const getSingleBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeService.getSingleBike(req.params.id);
        res.status(200).json({
            success: true,
            message: "Bike fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get bike",
            error: error instanceof Error ? error.message : "An unknown error occurred",
        });
    }
});
exports.bikeController = {
    createBike,
    getBikes,
    getSingleBike
};
