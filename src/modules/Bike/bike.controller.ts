import { Request, Response } from "express";
import { bikeService } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
  try {
    const result = await bikeService.CreateBike(req.body);
    res.status(200).json({
      success: true,
      message: "Bike Added successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add bike",
      error: error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};

const getBikes=async(req: Request, res: Response) => {
  try {
    const result = await bikeService.getBikes();
    res.status(200).json({
      success: true,
      message: "Bikes fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get bikes",
      error: error instanceof Error ? error.message : "An unknown error occurred",
    })
  }
};

const getSingleBike=async(req: Request, res: Response) => {
  try {
    const result= await bikeService.getSingleBike(req.params.id);
    res.status(200).json({
      success: true,
      message: "Bike fetched successfully",
      data: result,
    });
    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get bike",
      error: error instanceof Error ? error.message : "An unknown error occurred",
    })
  }
}

export const bikeController = {
  createBike,
  getBikes,
  getSingleBike
};