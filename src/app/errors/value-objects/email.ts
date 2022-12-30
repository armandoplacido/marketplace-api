class InvalidEmailFormat extends Error {
  constructor(email: string) {
    super('O formato do e-mail é inválido => ' + email)
  }
}

export { InvalidEmailFormat }
