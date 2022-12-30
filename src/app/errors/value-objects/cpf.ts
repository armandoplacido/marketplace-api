class InvalidCpfFormat extends Error {
  constructor(cpf: string) {
    super('O formato do CPF é inválido => ' + cpf)
  }
}

export { InvalidCpfFormat }
