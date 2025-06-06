"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoute = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.post("/api/bikes", bike_controller_1.bikeController.createBike);
router.get("/api/bikes", bike_controller_1.bikeController.getBikes);
router.get("/api/bikes/:id", bike_controller_1.bikeController.getSingleBike);
exports.bikeRoute = router;
