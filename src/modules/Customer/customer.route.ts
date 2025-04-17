
import express from "express";
import { customerController } from "./customer.controller";

const router = express.Router();
router.post("/api/customers", customerController.craeteCustomer);

export const customerRoute = router;
