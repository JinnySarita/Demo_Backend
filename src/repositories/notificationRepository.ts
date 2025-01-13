import { INotification, Notification } from "../models/notification";

export const getAllNotificationsByUserIdRepo = async (
  userId: string
): Promise<INotification[]> => {
  try {
    return await Notification.find({ userId }); // Query the notifications by userId
  } catch (error) {
    console.error("Repository Error:", error);
    throw new Error("Error fetching notifications by student ID");
  }
};

