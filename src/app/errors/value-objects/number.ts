export class InvalidNumber extends Error {
  constructor(number: number) {
    super('O formato do número é inválido => ' + number)
  }
}
