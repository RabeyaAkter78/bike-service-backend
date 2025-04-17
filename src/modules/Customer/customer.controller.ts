import { Request, Response } from "express";
import { customerService } from "./customer.service";


const craeteCustomer=async(req:Request,res:Response)=>{
    try {
        const result=await customerService.createCustomer(req.body);
        res.status(200).json({
            success: true,
            message: "Customer created successfully",
            data: result, 
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create customer",
            error: error
        })
    }
}
export const customerController={
    craeteCustomer
}