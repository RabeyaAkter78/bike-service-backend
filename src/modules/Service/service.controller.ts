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

const getAllService = async (req: Request, res: Response) => {
  try {
    const result = await serviceService.getAllService();
    res.status(200).json({
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get service record",
      error: error,
    });
  }
};

const getSingleService = async (req: Request, res: Response) => {
  try {
    const result = await serviceService.getSingleService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get service record",
      error: error,
    });
  }
};

const updateServiceStatus = async (req: Request, res: Response) => {
  try {
    const updatedService = {
      ...req.body,
      status: "done",
      completionDate: req.body.completionDate ?? new Date(),
    };

    const result = await serviceService.updateServiceStatus(
      req.params.id,
      updatedService
    );
    res.status(200).json({
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update service record",
      error: error,
    });
  }
};

const getOverdueStatus = async (req: Request, res: Response) => {
  try {
    const result = await serviceService.getOverdueService();
    res.status(200).json({
      success: true,
      message: "Overdue or pending services fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get service record",
      error: error,
    });
  }
};

export const serviceController = {
  createServiceRecord,
  getAllService,
  getSingleService,
  updateServiceStatus,
  getOverdueStatus
};
