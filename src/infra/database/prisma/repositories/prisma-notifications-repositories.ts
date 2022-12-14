import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification";
import { NotificationsRepository } from "../../../../application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepositories implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}
  
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        content: notification.content.Value,
        category: notification.category,
        readAt: notification.readAt,
        cratedAt: notification.createAt,
      }
    })
  }
}
