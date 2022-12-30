export class InvalidText extends Error {
  constructor(text: string) {
    super('O formato do texto é inválido => ' + text)
  }
}
