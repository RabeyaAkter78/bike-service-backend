import express from "express";
import { serviceController } from "./service.controller";

const router= express.Router();

router.post("/api/services", serviceController.createServiceRecord);

export const serviceRoute=router;