import { Request, Response } from "express";
import { customerService } from "./customer.service";
import { get } from "http";

const craeteCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerService.createCustomer(req.body);
    res.status(200).json({
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create customer",
      error: error,
    });
  }
};

const getCustomers = async (req: Request, res: Response) => {
  try {
    const result = await customerService.getCustomers();
    res.status(200).json({
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get customers",
      error: error,
    });
  }
};

const getSingleCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerService.getSIngleCustomer(req.params.id);
    res.status(200).json({
      success: true,
      message: "Customer fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get customer",
      error: error,
    });
  }
};

const updateCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerService.updateCustomer(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Customer updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update customer",
      error: error,
    });
  }
};

const deleteCUstomer = async (req: Request, res: Response) => {
  try {
    const result = await customerService.deletCustomer(req.params.id);
    res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update customer",
      error: error,
    });
  }
};

export const customerController = {
  craeteCustomer,
  getCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCUstomer
};
