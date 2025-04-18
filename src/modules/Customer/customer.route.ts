
import express from "express";
import { customerController } from "./customer.controller";

const router = express.Router();
router.post("/api/customers", customerController.craeteCustomer);
router.get("/api/customers", customerController.getCustomers);
router.get("/api/customers/:id", customerController.getSingleCustomer);

export const customerRoute = router;
