import express from "express";
import { serviceController } from "./service.controller";

const router= express.Router();

router.post("/api/services", serviceController.createServiceRecord);
router.get("/api/services", serviceController.getAllService);

export const serviceRoute=router;