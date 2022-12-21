import { makeNotification } from "@test/factories/notification-factory";
import { CancelNotification } from "./cancel-notification"
import { NotificationNotFound } from "./errors/notification-not-found";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";

describe('Cancelar notificação', () => {
  it('Espero que seja cancelado uma notificação', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    //Espero que o canceledAt seja qualquer objeto do tipo Date
    expect(notificationsRepository.notifications[0].canceledAt)
      .toEqual(expect.any(Date));
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
