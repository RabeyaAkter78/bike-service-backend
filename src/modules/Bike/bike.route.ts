import  express from 'express';
import { bikeController } from './bike.controller';


const router=express.Router();
router.post("/api/bikes", bikeController.createBike);

export const bikeRoute=router;