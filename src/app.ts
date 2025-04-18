import express, { Application, Request, Response } from "express";
import cors from "cors";
import { customerRoute } from "./modules/Customer/customer.route";
import { bikeRoute } from "./modules/Bike/bike.route";
import { serviceRoute } from "./modules/Service/service.route";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Welcome to Bike Servicing Backend",
  });
});

app.post("/api/customers", customerRoute);
app.get("/api/customers", customerRoute);
app.get("/api/customers/:id", customerRoute);
app.put("/api/customers/:id", customerRoute);
app.delete("/api/customers/:id", customerRoute);

app.post("/api/bikes", bikeRoute);
app.get("/api/bikes", bikeRoute);
app.get("/api/bikes/:id", bikeRoute);

app.post("/api/services", serviceRoute);
app.get("/api/services", serviceRoute);
app.get("/api/services/:id", serviceRoute);
app.put("/api/services/:id", serviceRoute);
app.get("/api/services/status", serviceRoute);

export default app;
