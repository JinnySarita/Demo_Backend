import express from "express";
import {
  getAllNotificationsByUserId,
} from "../controllers/notificationController";

const router = express.Router();

router.get("/user/:userId", getAllNotificationsByUserId);

export default router;
