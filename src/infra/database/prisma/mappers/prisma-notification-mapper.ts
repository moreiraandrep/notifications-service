import { Notification } from "@application/entities/notification";

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.Value,
      category: notification.category,
      readAt: notification.readAt,
      cratedAt: notification.createAt,
    };
  }
}