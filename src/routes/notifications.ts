import express from "express";

import {
  getAllNotificationsByUserId,
} from "../controllers/notificationController";
import { authenticateToken } from "../middlewares/auth";

const router = express.Router();

router.use(authenticateToken);

router.get("/", getAllNotificationsByUserId);

export default router;
