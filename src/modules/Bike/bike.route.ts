import  express from 'express';
import { bikeController } from './bike.controller';


const router=express.Router();
router.post("/api/bikes", bikeController.createBike);
router.get("/api/bikes", bikeController.getBikes);
router.get("/api/bikes/:id", bikeController.getSingleBike);

export const bikeRoute=router;