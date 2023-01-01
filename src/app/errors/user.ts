class UserNotFound extends Error {
  constructor() {
    super('O usuário não foi encontrado')
  }
}

class UserEmailAlreadyExists extends Error {
  constructor() {
    super('O endereço de email já está sendo utilizado')
  }
}

class UserCpfAlreadyExists extends Error {
  constructor() {
    super('O cpf já está sendo utilizado')
  }
}

class CreateUserError extends Error {
  constructor(message: string) {
    super(message)
  }
}

export { UserNotFound, UserEmailAlreadyExists, UserCpfAlreadyExists, CreateUserError }
