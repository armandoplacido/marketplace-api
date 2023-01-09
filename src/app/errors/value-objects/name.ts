class InvalidNameFormat extends Error {
  constructor(userName: string) {
    super('O formato do nome de usuário é inválido => ' + userName)
  }
}

export { InvalidNameFormat }
