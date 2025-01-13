import { INotification } from "../models/notification";
import {
  getAllNotificationsByUserIdRepo,
} from "../repositories/notificationRepository";

export const getAllNotificationsByUserIdService = async (
  userId: string
): Promise<INotification[]> => {
  return await getAllNotificationsByUserIdRepo(userId);
};

