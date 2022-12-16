import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification"
import { NotificationNotFound } from "./errors/notification-not-found";

describe('Cancelar notificação', () => {
  it('Espero que seja cancelado uma notificação', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      recipientId: 'exemplo-recipient-id',
      content: new Content('Nova solicitação de amizade'),
      category: 'social'
    });

    await notificationsRepository.create(notification);
    
    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt)
      .toEqual(expect.any(Date));
      //Espero que o canceledAt seja qualquer objeto do tipo Date
  });

  it('Espero que não seja cancelado uma notificação quando ela não existir', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);
    
    expect(() => {
      return cancelNotification.execute({
        notificationId: 'notification-id-inexistente',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
