# 🚴 Bike Servicing Management

## 📋 Summery

The **Bike Servicing Management System** is designed for bike servicing centers to efficiently manage their operations. It helps in handling customer information, tracking bikes, and maintaining service records.

## 🔗 Live Link :https://bike-service-backend-izm7.onrender.com/

## 🛠 Technology Used:

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

## ⚙️ Setup Guide:

Follow these steps to set up the project locally:

1. Create a new folder and open it in VS Code.
2. Open the terminal and run the following commands:

```bash
npm init -y
npm install prisma typescript tsx @types/node --save-dev
npx tsc --init
npx prisma
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```

3.Configure your PostgreSQL database in the .env file created by Prisma.

✨ Key Features:

👤 Customer Management
* Craete Customer,
* Get All Customers,
* Get Single Customer,
* Update a Customer,
* Delete a customer

🏍️ Bike Management

* Craete a Bike,
* Get all Bike,
* Get Specific bike

🛠️ Service Management

* Crete a service request,
* get all service request
* Get a specific service record
* Mark a service as completed

📌 Notes 
* Make sure PostgreSQL is installed and running on your system.

* Update the **.env** file with your actual database credentials.

* Use **npx prisma migrate dev** to apply migrations after setting up your Prisma schema.

* Use **npm run dev** to run the project