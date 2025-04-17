import express, { Application, Request, Response } from "express";
import cors from "cors"
import { customerRoute } from "./modules/Customer/customer.route";
import { bikeRoute } from "./modules/Bike/bike.route";

const app:Application=express();
app.use(cors());
app.use (express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req:Request,res:Response)=>{
    res.send(({
        Message:"Welcome to Bike Servicing Backend"
    }))
});


app.post("/api/customers", customerRoute);
// app.get("/api/customers");
// app.get("/api/customers/:id");
// app.put("/api/customers/:id");
// app.delete("/api/customers/:id");


app.post("/api/bikes",bikeRoute);


 export default app;