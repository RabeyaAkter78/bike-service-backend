"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const customer_route_1 = require("./modules/Customer/customer.route");
const bike_route_1 = require("./modules/Bike/bike.route");
const service_route_1 = require("./modules/Service/service.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        Message: "Welcome to Bike Servicing Backend",
    });
});
app.post("/api/customers", customer_route_1.customerRoute);
app.get("/api/customers", customer_route_1.customerRoute);
app.get("/api/customers/:id", customer_route_1.customerRoute);
app.put("/api/customers/:id", customer_route_1.customerRoute);
app.delete("/api/customers/:id", customer_route_1.customerRoute);
app.post("/api/bikes", bike_route_1.bikeRoute);
app.get("/api/bikes", bike_route_1.bikeRoute);
app.get("/api/bikes/:id", bike_route_1.bikeRoute);
app.post("/api/services", service_route_1.serviceRoute);
app.get("/api/services", service_route_1.serviceRoute);
app.get("/api/services/:id", service_route_1.serviceRoute);
app.put("/api/services/:id", service_route_1.serviceRoute);
app.get("/api/services/status", service_route_1.serviceRoute);
exports.default = app;
