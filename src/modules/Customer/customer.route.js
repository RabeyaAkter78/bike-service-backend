"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoute = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post("/api/customers", customer_controller_1.customerController.craeteCustomer);
router.get("/api/customers", customer_controller_1.customerController.getCustomers);
router.get("/api/customers/:id", customer_controller_1.customerController.getSingleCustomer);
router.put("/api/customers/:id", customer_controller_1.customerController.updateCustomer);
router.delete("/api/customers/:id", customer_controller_1.customerController.deleteCUstomer);
exports.customerRoute = router;
