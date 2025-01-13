import { Request, Response } from "express";

import { AuthenticatedRequest } from "../middlewares/auth";
import {
  getAllNotificationsByUserIdService,
} from "../services/notificationService";

export const getAllNotificationsByUserId = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) {
    res.status(401).json({ error: "No bearer token provided" });
    return;
  }

  try {
    const notifications = await getAllNotificationsByUserIdService(userId);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving notifications by userId",
    });
  }
};

