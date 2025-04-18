import { Request, Response } from "express";
import { serviceService } from "./service.service";

const createServiceRecord = async (req: Request, res: Response) => {
  try {
    const result = await serviceService.createServiceRecord(req.body);
    res.status(200).json({
      success: true,
      message: "Service record created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create service record",
      error: error,
    });
  }
};


export const serviceController = {
  createServiceRecord,
};
