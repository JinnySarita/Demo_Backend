import dotenv from "dotenv";
import express, { Application } from "express";
import mongoose from "mongoose";

import notificationRouter from "./routes/notifications";

dotenv.config();

const app: Application = express();

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL as string)
    .then(() => console.log("Connected to Database"))
    .catch(error => console.error("Database connection error:", error));

app.use(express.json());

app.use("/notifications", notificationRouter);

// Start the server
const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server started on port ${port}`));
