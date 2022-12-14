import { Content } from "./content"

describe('Conteúdo da Notificação', () => {
  it('Espero que seja criado uma Notificação', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');
  
    expect(content).toBeTruthy();
  });
  
  it('Espero que não seja possível criar uma notificação com o conteúdo com menos de 5 carateres', () => {
    expect(() => new Content('test')).toThrow();
  });
  
  it('Espero que não seja possível criar uma notificação com o conteúdo com mais de 256 carateres', () => {
    expect(() => new Content('a'.repeat(257))).toThrow();
  });  
})
