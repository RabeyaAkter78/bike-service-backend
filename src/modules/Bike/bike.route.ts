import  express from 'express';
import { bikeController } from './bike.controller';


const router=express.Router();
router.post("/api/bikes", bikeController.createBike);
router.get("/api/bikes", bikeController.getBikes);

export const bikeRoute=router;