class AuthUser extends Error {
  constructor() {
    super('Email ou senha incorretos')
  }
}

class UnauthorizedUser extends Error {
  constructor() {
    super('Usuário não possui permissão para acessar este recurso')
  }
}

export { AuthUser, UnauthorizedUser }
