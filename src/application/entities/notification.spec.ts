import { Content } from './content';
import { Notification } from './notification';

describe('Notificação', () => {
  it('Espero que seja criado uma Notificação', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'exemplo-de-Id-valido',
    });
  
    expect(notification).toBeTruthy();
  });
  
})
