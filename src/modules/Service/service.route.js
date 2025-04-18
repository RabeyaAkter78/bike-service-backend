"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoute = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.post("/api/services", service_controller_1.serviceController.createServiceRecord);
router.get("/api/services", service_controller_1.serviceController.getAllService);
router.get("/api/services/:id", service_controller_1.serviceController.getSingleService);
router.put("/api/services/:id", service_controller_1.serviceController.updateServiceStatus);
router.get("/api/services/status", service_controller_1.serviceController.getOverdueStatus);
exports.serviceRoute = router;
