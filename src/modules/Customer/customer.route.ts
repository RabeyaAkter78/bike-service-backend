
import express from "express";
import { customerController } from "./customer.controller";

const router = express.Router();
router.post("/api/customers", customerController.craeteCustomer);
router.get("/api/customers", customerController.getCustomers);

export const customerRoute = router;
