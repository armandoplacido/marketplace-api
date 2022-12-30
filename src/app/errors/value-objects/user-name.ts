class InvalidUserNameFormat extends Error {
  constructor(userName: string) {
    super('O formato do nome de usuário é inválido => ' + userName)
  }
}

class InvalidUserNameLenth extends Error {
  constructor(userName: string) {
    super('O nome de usuário deve ter no máximo 150 caracteres => ' + userName)
  }
}
export { InvalidUserNameFormat, InvalidUserNameLenth }
