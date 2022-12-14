export class Content {
  private readonly content: string;

  get Value(): string {
    return this.content;
  }

  private ValidateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <=256;
  }

  constructor(content: string) {
    const isContentLengthValid = this.ValidateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Tamanho do conteúdo inválido!')
    }

    this.content = content;
  }
}