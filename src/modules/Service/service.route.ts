import express from "express";
import { serviceController } from "./service.controller";

const router= express.Router();

router.post("/api/services", serviceController.createServiceRecord);
router.get("/api/services", serviceController.getAllService);
router.get("/api/services/:id", serviceController.getSingleService);
router.put("/api/services/:id", serviceController.updateServiceStatus);
router.get("/api/services/status", serviceController.getOverdueStatus);

export const serviceRoute=router;