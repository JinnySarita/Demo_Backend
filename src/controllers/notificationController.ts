import { Request, Response } from "express";
import { getAllNotificationsByUserIdService } from "../services/notificationService";

export const getAllNotificationsByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.params.userId;

  if (!userId) {
    res.status(400).json({ error: "Bad Request", message: "User ID is required" });
    return;
  }

  try {
    const notifications = await getAllNotificationsByUserIdService(userId);
    if (notifications.length === 0) {
      res.status(204).send();
    } else {
      res.status(200).json({ data: notifications });
    }
  } catch (error) {
    console.error('Error retrieving notifications:', error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An error occurred while retrieving notifications"
    });
  }
};

